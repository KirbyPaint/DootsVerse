module.exports = {
	"env": {
		"es2021": true,
		"node": true
	},
	"extends": [
		`eslint:recommended`,
		`plugin:@typescript-eslint/recommended`
	],
	"parser": `@typescript-eslint/parser`,
	"parserOptions": {
		"ecmaVersion": `latest`,
		"sourceType": `module`
	},
	"plugins": [
		`@typescript-eslint`,
		`json-format`,
		`simple-import-sort`
	],
	"rules": {
		// increase the severity of rules so they are auto-fixable
		"simple-import-sort/imports": `error`,
		"simple-import-sort/exports": `error`,
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
		}],
		'no-multiple-empty-lines': [`error`, { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }]
	},
	"overrides": [
		// override "simple-import-sort" config
		{
			"files": [`*.js`, `*.jsx`, `*.ts`, `*.tsx`],
			"rules": {
				"simple-import-sort/imports": [
					`error`,
					{
						"groups": [
							// Packages `react` related packages come first.
							[`^react`, `^@?\\w`],
							// Internal packages.
							[`^(@|components)(/.*|$)`],
							// Side effect imports.
							[`^\\u0000`],
							// Parent imports. Put `..` last.
							[`^\\.\\.(?!/?$)`, `^\\.\\./?$`],
							// Other relative imports. Put same-folder imports and `.` last.
							[`^\\./(?=.*/)(?!/?$)`, `^\\.(?!/?$)`, `^\\./?$`],
							// Style imports.
							[`^.+\\.?(css)$`]
						]
					}
				]
			}
		}
	]
};
