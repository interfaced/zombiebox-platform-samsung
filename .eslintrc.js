const {join, dirname} = require('path');
const configInterfacedEsm = require('eslint-config-interfaced/overrides/esm');
const configInterfacedNode = require('eslint-config-interfaced/overrides/node');
const configInterfacedExterns = require('eslint-config-interfaced/overrides/externs');

const resolveModulePath = (packageName) => {
	const packageInfoPath = require.resolve(`${packageName}/package.json`);
	return join(dirname(packageInfoPath), require(packageInfoPath).module);
};

module.exports = {
	extends: 'interfaced',
	overrides: [
		{
			...configInterfacedEsm,
			files: ['lib/**/*.js'],
			settings: {
				'import/resolver': {
					alias: [
						['zb', resolveModulePath('zombiebox')]
					]
				}
			},
			rules: {
				...configInterfacedEsm.rules,
				'new-cap': 'off',
				'import/no-unresolved': ['error', {ignore: ['^generated/']}]
			}
		},
		{
			...configInterfacedNode,
			files: ['index.js']
		},
		{
			...configInterfacedExterns,
			files: ['externs/**/*.js'],
			rules: {
				...configInterfacedExterns.rules,
				'no-undef': 'off',
				'interfaced/no-restricted-jsdoc-tags': 'off'
			}
		}
	]
};
