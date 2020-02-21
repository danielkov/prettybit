# 📟 prettybits

Mini library for pretty printing bits and bytes.

This project was bootstrapped with [this template](https://github.com/danielkov/single-package).

## Get started

```sh
npm install --save prettybits
```

or

```sh
yarn add prettybits
```

## Usage

Pretty print bytes:

```ts
import { bytes } from 'prettybits';

console.log(bytes(-11234)); // > -11.2 kB
console.log(bytes(0)); // > 0 B
console.log(bytes(11234)); // > 11.2 kB
console.log(bytes(3284751)); // > 3.28 MB
```

Pretty print bits:

```ts
import { bits } from 'prettybits';

console.log(bits(-11234)); // > -11.2 kbit
console.log(bits(0)); // > 0 b
console.log(bits(11234)); // > 11.2 kbit
console.log(bits(3284751)); // > 3.28 Mbit
```

## Contributing

Thank you for wanting to contribute. Before you get started, [read our contribution guidelines](CONTRIBUTING.md).

To get started, fork the repository and then clone it to your machine. You will need Node JS v8+ and NPM to run the project.

To grab all the dependencies for development:

```sh
npm install
```

Run tests in watch mode:

```sh
npm test -w
```

Once you're happy with your changes, use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard to create your commit messages.

To build the package, use the command:

```sh
npm build
```

If all seems good and tests are green, push your changes and submit a pull request.
