/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-tabs": "error",
        "indent": "off",
        "vue/script-indent": ["error", 4, {
            baseIndent: 1,
            switchCase: 1,
            ignores: []
        }],
        "vue/html-indent": ["error", 4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        semi: [0, "never"], //允许使用分号
        "no-unused-vars": "warn",
        "comma-dangle": [
            "warn",
            {
                arrays: "ignore",
                objects: "ignore",
                imports: "never",
                exports: "never",
                functions: "ignore",
            },
        ],
        "no-var": "warn",
        "no-bitwise": "off",
        "no-multi-assign": "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "global-require": "off",
        "import/no-dynamic-require": "off",
        "consistent-return": "off",
        "no-lonely-if": "off",
        "no-nested-ternary": "off",
        "no-unsafe-finally": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["off"],
        "@typescript-eslint/no-loop-func": ["off"],
        "@typescript-eslint/no-redeclare": ["off"],
        "@typescript-eslint/no-shadow": ["off"],
        "no-restricted-syntax": "off",
        "prefer-promise-reject-errors": "off",
        "no-useless-return": "off",
        "no-underscore-dangle": "off",
        "no-case-declarations": "off",
        "vue/no-multiple-template-root": "off",
        "vue/multi-word-component-names": "off",
        "no-mutating-props": "off",
        "vue/no-v-html": "off",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 10, // 标签超出5个属性就会换行
                multiline: 1,
            },
        ],
        "vue/script-setup-uses-vars": "error",
        "object-curly-spacing": ["error", "always"],
        "arrow-spacing": "error",
        "vue/block-tag-newline": [
            "error",
            {
                //  标签直接的换行规范
                singleline: "always",
                multiline: "always",
                maxEmptyLines: 1,
                blocks: {
                    script: {
                        singleline: "always",
                        multiline: "always",
                        maxEmptyLines: 1,
                    },
                    template: {
                        singleline: "always",
                        multiline: "always",
                        maxEmptyLines: 0,
                    },
                    "my-block": {
                        singleline: "always",
                        multiline: "always",
                        maxEmptyLines: 0,
                    },
                },
            },
        ],
        "vue/singleline-html-element-content-newline": [
            "off",
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ["pre", "textarea"],
            },
        ],
        // "vue/block-tag-newline": "off",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "vue/attributes-order": "off",
        "vue/html-self-closing": "off",
    },
}
