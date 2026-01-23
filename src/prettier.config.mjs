/** @type {import('prettier').Config} */
export default {
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "endOfLine": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": true,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4,
    "useTabs": true,
    "trailingComma": "all",
    "vueIndentScriptAndStyle": false,
    "allowDefaultProject": true,
    "embeddedLanguageFormatting": "auto",
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "importOrderCaseInsensitive": true,
    "importOrderParserPlugins": [
      "classProperties",
      "decorators-legacy",
      "typescript"
    ],
    "importOrder": [
      "<THIRD_PARTY_MODULES>",
      "^@(.*)$",
      "^../(.*)$",
      "^./(.*)$"
    ],
    "plugins": ["@trivago/prettier-plugin-sort-imports"]

}