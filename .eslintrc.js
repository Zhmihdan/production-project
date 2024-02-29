module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:i18next/recommended",
		"airbnb"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react",
		"i18next"
	],
	"rules": {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx", ".js"] }],
		"react/react-in-jsx-scope": "off",
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"quote-props": "off",
		"no-tabs": "off",
		"comma-dangle": "off",
		"react/jsx-indent": [2, "tab"],
		"import/extensions": "off",
		"no-unused-vars": "warn",
		"import/no-extraneous-dependencies": "off",
		"eol-last": "off",
		"react/require-default-props": "off",
		"react/function-component-definition": "off",
		"react/button-has-type": "warn",
		"arrow-parens": "off",
		"max-len": "off",
		"arrow-body-style": "off",
		"react/jsx-props-no-spreading": "warn",
		"no-shadow": "off",
		"import/newline-after-import": "off",
		"react/jsx-indent-props": [2, "tab"],
		"no-underscore-dangle": "off",
		"react/jsx-max-props-per-line": "off",
		"i18next/no-literal-string": [2, { markupOnly: true, ignoreAttribute: ["data-testid"] }],
		"ban-ts-comment": "off"
	},
	"globals": {
		"__IS_DEV__": true
	}
};
