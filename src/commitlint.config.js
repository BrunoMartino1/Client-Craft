export default {
    rules: {
        "header-max-length": [2, "always", 100],
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 100],
        "body-case": [1, "always", "lower-case"],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 100],
        "subject-case": [2, "always", ["lower-case"]],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "perf",
                "test",
                "build",
                "ci",
                "chore",
                "revert",
            ],
        ],
        "scope-empty": [2, "never"],
        "scope-case": [2, "always", "upper-case"],
    },
};
