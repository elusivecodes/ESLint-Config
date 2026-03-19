# Frost ESLint Config

[![CI](https://github.com/elusivecodes/ESLint-Config/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/elusivecodes/ESLint-Config/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/%40fr0st%2Feslint-config)](https://www.npmjs.com/package/@fr0st/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/%40fr0st%2Feslint-config)](https://www.npmjs.com/package/@fr0st/eslint-config)
[![license](https://img.shields.io/npm/l/%40fr0st%2Feslint-config)](https://github.com/elusivecodes/ESLint-Config/blob/main/LICENSE)

ESLint shareable config for the *Frost* style.

## Installation

```bash
npm i -D @fr0st/eslint-config eslint
```

## Usage

Browser projects:

```javascript
import frostConfig, { browserConfig } from '@fr0st/eslint-config';

export default [
    frostConfig,
    browserConfig,
];
```

Node projects:

```javascript
import frostConfig, { nodeConfig } from '@fr0st/eslint-config';

export default [
    frostConfig,
    nodeConfig,
];
```

If you want to scope the config to specific files, wrap it in your own config object:

```javascript
import frostConfig, { nodeConfig } from '@fr0st/eslint-config';

export default [
    {
        ...frostConfig,
        files: ['**/*.{js,mjs,cjs}'],
    },
    nodeConfig,
];
```

## Compatibility

- Node `>=24`
- ESLint `^10.0.0`
