module.exports = {
	"env": {
		"es2021": true,
		"node": true
	},
	"extends": [
		`eslint:recommended`,
		`plugin:@typescript-eslint/recommended`
	],
	"overrides": [
	],
	"parser": `@typescript-eslint/parser`,
	"parserOptions": {
		"ecmaVersion": `latest`,
		"sourceType": `module`
	},
	"plugins": [
		`@typescript-eslint`,
		`json-format`
	],
	"rules": {
		"indent": [
			`error`,
			`tab`
		],
		"linebreak-style": [
			`error`,
			`unix`
		],
		"quotes": [
			`error`,
			`backtick`
		],
		"semi": [
			`error`,
			`always`
		],
		"comma-dangle": [`error`, {
			"arrays": `never`,
			"objects": `never`,
			"imports": `never`,
			"exports": `never`,
			"functions": `never`
		}]
	}
};
