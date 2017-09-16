module.exports = {
    "extends": "airbnb",
    "plugins": ["react"],
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "React": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "semi": ["error", "never"],
    }
};