module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2021,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		impliedStrict: true,
	},
	plugins: ["@typescript-eslint"],
	ignorePatterns: ["**/*.html"],
	rules: {},
};
