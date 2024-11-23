# Technical KB

Internal technical knowledgebase for Enfinity: [https://enfinity-solutions.pages.internal.enfinity.com.hk/internal/technical-kb/](https://enfinity-solutions.pages.internal.enfinity.com.hk/internal/technical-kb/)

## Dependencies

You'll need Node.js 18+ and `npm` installed. If not, the recommended installation method is via [`nvm`](https://github.com/nvm-sh/nvm).

## Getting started

Navigate to the project root, then run the following command to install project dependencies:

```bash
npm install
```

## Building and previewing locally

Build the documentation with the following command:

```bash
npm run build
```

Now serve the docs locally for a quick preview with the following command:

```bash
npm run serve
```

## Contributing

Please use the [project forking workflow](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html) for submitting contributions and refrain from committing directly to the `main` branch.

Submit a [merge request](https://docs.gitlab.com/ee/user/project/merge_requests/) when ready.

### Automated code quality checks

The following code formatting and quality checks are enforced on every commit via both a pre-commit hook \(automatically installed by [Husky](https://typicode.github.io/husky/) whenever you run `npm install`\) and in CI/CD:

- [Prettier](https://prettier.io/)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

To avoid surprises during and after `git commit`, we recommend running the following commands and addressing the reported issues prior to staging and committing your changes:

```bash
npx prettier . --write
npx markdownlint-cli2 --fix "docs/**/*.md"
```
