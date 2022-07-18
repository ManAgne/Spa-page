module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": [0],
        "eol-last": [1],
        "no-multiple-empty-lines": [1, { max: 1 }],
        "react/function-component-definition": [1, {
            "namedComponents": "arrow-function"
        }]
    }
}
