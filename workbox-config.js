module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};