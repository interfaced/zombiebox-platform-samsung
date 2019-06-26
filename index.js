/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2013-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const fse = require('fs-extra');
const path = require('path');
const {AbstractPlatform} = require('zombiebox');
const xmlbuilder = require('xmlbuilder');
const strftime = require('strftime');
const ip = require('ip');
const template = require('lodash/template');


/**
 */
class PlatformSamsung extends AbstractPlatform {
	/**
	 */
	constructor() {
		super();

		/**
		 * @const {string}
		 */
		this.DEFAULT_ZIP_NAME = '_';
	}

	/**
	 * @override
	 */
	getName() {
		return 'samsung';
	}

	/**
	 * @override
	 */
	getSourcesDir() {
		return path.join(__dirname, 'lib');
	}

	/**
	 * @override
	 */
	getConfig() {
		const externs = path.join(__dirname, 'externs');

		return {
			platforms: {
				samsung: {
					zipName: this.DEFAULT_ZIP_NAME,
					widget: {
						ThumbIcon: path.join(__dirname, 'icon', '106x87.png'),
						BigThumbIcon: path.join(__dirname, 'icon', '115x95.png'),
						BigListIcon: path.join(__dirname, 'icon', '95x78.png'),
						ListIcon: path.join(__dirname, 'icon', '85x70.png'),
						autoUpdate: 'y',
						login: 'n',
						fullwidget: 'y',
						srcctl: 'y',
						dcont: 'y',
						childlock: 'y',
						network: 'y',
						mouse: 'y',
						width: '1280',
						height: '720',
						deleteJS: 'ZbAppUninstall',
						category: 'video',
						type: 'user',
						apptype: '11', // 11: HTML + Javascript + Flash Player Object
						description: 'My application',
						author: {
							name: 'Mr. Jones',
							email: 'mail@example.com',
							link: 'http://example.com',
							organization: 'My Organization'
						}
					},
					server: {
						ip: ip.address()
					}
				}
			},
			include: [{
				name: 'Samsung APIs',
				externalScripts: [
					'$MANAGER_WIDGET/Common/API/Widget.js',
					'$MANAGER_WIDGET/Common/API/TVKeyValue.js',
					'$MANAGER_WIDGET/Common/API/Plugin.js',
					'$MANAGER_WIDGET/Common/Define.js'
				],
				externs: [
					path.join(externs, 'base.js'),
					path.join(externs, 'common', 'define.js'),
					path.join(externs, 'common', 'api', 'tv-key.js'),
					path.join(externs, 'common', 'api', 'plugin.js'),
					path.join(externs, 'common', 'api', 'widget.js'),
					path.join(externs, 'media-plugin.js'),
					path.join(externs, 'plugin-audio.js'),
					path.join(externs, 'plugin-external-widget-interface.js'),
					path.join(externs, 'plugin-image-viewer.js'),
					path.join(externs, 'plugin-player.js'),
					path.join(externs, 'plugin-tv.js'),
					path.join(externs, 'plugin-nnavi.js'),
					path.join(externs, 'plugin-network.js'),
					path.join(externs, 'plugin-time.js'),
					path.join(externs, 'pluginSEF.js'),
					path.join(externs, 'file-system.js')
				]
			}]
		};
	}

	/**
	 * @override
	 */
	buildApp(zbApp, dir) {
		const buildHelper = zbApp.getBuildHelper();
		const config = zbApp.getConfig();
		const {
			widget: widgetConfig,
			server: serverConfig,
			zipName: zipNameConfig
		} = config.platforms.samsung;
		const {name, version} = zbApp.getAppPackageJson();

		widgetConfig.cpname = widgetConfig.cpname || name;
		widgetConfig.widgetname = widgetConfig.widgetname || name;
		widgetConfig.ver = widgetConfig.ver || version;

		const sanitizeString = (str) => str.replace(/[^a-z0-9]+/gi, this.DEFAULT_ZIP_NAME);

		const sanitizedZipName = sanitizeString(zipNameConfig);
		const sanitizedJsonName = sanitizeString(name);
		const isCorrectAppNameForZip = sanitizedZipName !== this.DEFAULT_ZIP_NAME;
		const appNameForZip = isCorrectAppNameForZip ? sanitizedZipName : sanitizedJsonName;

		const zipName = `${appNameForZip}_${sanitizeString(widgetConfig.ver)}_Asia_${strftime('%Y%m%d')}.zip`;
		const widgetInfo =
			`Use Alpha Blending? = Yes\nScreen Resolution = ${widgetConfig.width}x${widgetConfig.height}`;

		const icons = [
			'ThumbIcon',
			'BigThumbIcon',
			'BigListIcon',
			'ListIcon'
		];

		const obj2Xml = (obj) => xmlbuilder
			.create(obj, {headless: true})
			.end({pretty: true, indent: '\t'});

		const srcDir = path.join(dir, 'src');

		fse.mkdirpSync(srcDir);

		return buildHelper
			.writeIndexHTML(path.join(srcDir, 'index.html'))
			.then((warnings) => {
				fse.mkdirpSync(path.join(srcDir, 'icon'));

				icons.forEach((iconKey) => {
					const archivePath = path.join('icon', `${iconKey}.png`);
					const srcPath = path.join(srcDir, archivePath);

					fse.copySync(widgetConfig[iconKey], srcPath);
					widgetConfig[iconKey] = archivePath;
				});

				const templatePath = path.join(__dirname, 'duties', 'ZbAppUninstall.js.tpl');
				const templateString = fse.readFileSync(templatePath, 'utf-8');
				const deleteJSContent = template(templateString)({
					commonFileName: widgetConfig.widgetname
				});

				const files = {
					'widget.info': widgetInfo,
					'config.xml': obj2Xml({widget: widgetConfig}),
					'zbapp.name': widgetConfig.widgetname,
					'ZbAppUninstall.js': deleteJSContent
				};

				const promises = Object
					.keys(files)
					.map((file) => fse.writeFile(path.join(srcDir, file), files[file]));

				return Promise
					.all(promises)
					.then(() => warnings);
			})
			.then((warnings) => {
				buildHelper.copyStaticFiles(srcDir);

				return buildHelper
					.writeZIPArchive(path.join(dir, zipName), buildHelper.addDirToArchiveMap(srcDir))
					.then((bytes) => {
						const widgetlist = {
							'rsp': {
								'@stat': 'ok',
								'widget': {
									'@id': 'widget0',

									'title': widgetConfig.widgetname,
									'description': widgetConfig.description,
									'download': `http://${serverConfig.ip}/${zipName}`,
									'compression': {
										'@type': 'zip',
										'@size': bytes
									}
								}

							}
						};

						return fse
							.writeFile(path.join(dir, 'widgetlist.xml'), obj2Xml(widgetlist))
							.then(() => warnings);
					});
			});
	}
}


/**
 */
module.exports = PlatformSamsung;
