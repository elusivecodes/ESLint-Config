# Frost ESLint Config

ESLint shareable config for the Frost style.

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

- Node `>=20.19.0`
- ESLint `^10.0.0`
