import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import pluginImport from "eslint-plugin-import"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{ignores: ["dist"]},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2023,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"import": pluginImport,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{allowConstantExport: true},
			],
			"import/order": "error",
			"indent": ["error", "tab", {
				"FunctionDeclaration": {"parameters": "first"},
				"FunctionExpression": {"parameters": "first"},
				"CallExpression": {"arguments": "first"},
				"ArrayExpression": "first",
				"ObjectExpression": "first",
				"ImportDeclaration": "first",
			}],
			"object-curly-newline": ["error", {
				"consistent": true,
			}],
			"object-curly-spacing": ["error", "always", {
				"arraysInObjects": false,
				"objectsInObjects": false,
			}],
			"array-bracket-spacing": ["error", "never"],
			"one-var-declaration-per-line": ["error", "initializations"],
			"quotes": ["error", "double", { allowTemplateLiterals: true }],
			"semi": ["error", "never"],
			"comma-dangle": ["error", "always-multiline"],
			"max-len": ["warn", 120],
			"space-before-function-paren": ["error", {
				"anonymous": "never",
				"named": "never",
				"asyncArrow": "always",
			}],
			"func-style": ["warn", "declaration", {"allowArrowFunctions": true}],
			"id-length": ["warn", {"max": 40, "exceptions": ["i", "j", "x", "y", "_"]}],
			"new-cap": ["warn", {
				"newIsCap": true,
				"capIsNew": true,
			}],
			"no-empty": ["error", {
				"allowEmptyCatch": true,
			}],
			"eol-last": ["error", "always"],
			"no-console": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
		},
	},
)