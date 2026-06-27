# JavaScript Exercism Practice

This repository is used to store my JavaScript practice exercises from [Exercism](https://exercism.org/).

Instead of using the default Exercism folder structure, I organize all downloaded JavaScript exercises inside the `exercises/` folder.

## Folder Structure

```text
JavaScript/
├── exercises/
│   ├── hello-world/
│   ├── lasagna/
│   └── ...
├── .gitignore
└── README.md
```

## Purpose

The purpose of this repository is to:

- Practice JavaScript fundamentals
- Solve Exercism JavaScript exercises
- Track my learning progress with Git and GitHub
- Keep all exercises organized in one place

## Exercism Workspace

My Exercism workspace is configured to this project folder.

```bash
exercism configure --workspace=~/Documents/JavaScript
```

Downloaded exercises are stored inside the `exercises/` folder.

Example:

```bash
exercism download --track=javascript --exercise=hello-world
```

## Running Tests

Go into an exercise folder:

```bash
cd exercises/hello-world
```

Install dependencies:

```bash
pnpm install
```

Run tests:

```bash
pnpm test
```

## Submitting an Exercise

After solving an exercise, submit the solution file:

```bash
exercism submit hello-world.js
```

For other exercises, replace `hello-world.js` with the correct solution file name.

## Notes

Each exercise has its own files, tests, and dependencies.

When starting a new exercise, run `pnpm install` inside that exercise folder before running tests.