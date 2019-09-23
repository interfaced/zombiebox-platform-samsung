module.exports = {
	extends: 'interfaced',
	overrides: [
		{
			files: ['lib/**/*.js'],
			extends: 'interfaced/esm',
			settings: {
				'import/resolver': 'zombiebox'
			},
			rules: {
				'new-cap': 'off',
			}
		},
		{
			files: ['index.js'],
			extends: 'interfaced/node',
		},
		{
			files: ['externs/**/*.js'],
			extends: 'interfaced/externs',
			rules: {
				// TODO: cleanup externs to reenable all of the rules
				'no-undef': 'off',
				'jsdoc/check-tag-names': 'off',
				'jsdoc/require-returns-check': 'off',
				'interfaced/no-restricted-jsdoc-tags': 'off'
			}
		}
	]
};
