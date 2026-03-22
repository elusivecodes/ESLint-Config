import assert from 'node:assert/strict';
import { ESLint } from 'eslint';
import { describe, it } from 'mocha';
import frostConfig, { browserConfig, nodeConfig } from './../index.js';

async function lintText(source, config) {
    const eslint = new ESLint({
        overrideConfig: config,
        overrideConfigFile: true,
    });

    const [result] = await eslint.lintText(source, {
        filePath: 'fixture.js',
    });

    return result.messages;
}

function hasRule(messages, ruleId) {
    return messages.some((message) => message.ruleId === ruleId);
}

describe('environment configs', function() {
    this.timeout(10000);

    it('browserConfig exposes browser globals', async () => {
        const messages = await lintText('window.location.href;\n', [
            frostConfig,
            browserConfig,
        ]);

        assert.deepStrictEqual(messages, []);
    });

    it('nodeConfig exposes node globals', async () => {
        const messages = await lintText('process.env.NODE_ENV;\n', [
            frostConfig,
            nodeConfig,
        ]);

        assert.deepStrictEqual(messages, []);
    });
});

describe('base rules', function() {
    this.timeout(10000);

    it('no-unused-vars only ignores names that start with an underscore', async () => {
        const allowedMessages = await lintText('function example(_unusedArg) { return 1; }\nexample();\n', [
            frostConfig,
        ]);
        const disallowedMessages = await lintText('function example(unused_arg) { return 1; }\nexample();\n', [
            frostConfig,
        ]);

        assert.strictEqual(hasRule(allowedMessages, 'no-unused-vars'), false);
        assert.strictEqual(hasRule(disallowedMessages, 'no-unused-vars'), true);
    });

    it('enforces import declaration ordering', async () => {
        const allowedMessages = await lintText(`import fs from 'node:fs';
import react from 'react';
import parent from '../parent.js';
import sibling from './sibling.js';
import './styles.css';

void fs;
void react;
void parent;
void sibling;
`, [
            frostConfig,
        ]);
        const disallowedMessages = await lintText(`import sibling from './sibling.js';
import fs from 'node:fs';
import react from 'react';

void fs;
void react;
void sibling;
`, [
            frostConfig,
        ]);

        assert.strictEqual(hasRule(allowedMessages, 'perfectionist/sort-imports'), false);
        assert.strictEqual(hasRule(disallowedMessages, 'perfectionist/sort-imports'), true);
    });

    it('enforces re-export declaration ordering', async () => {
        const allowedMessages = await lintText(`export { alpha } from './alpha.js';
export { beta } from './beta.js';
`, [
            frostConfig,
        ]);
        const disallowedMessages = await lintText(`export { beta } from './beta.js';
export { alpha } from './alpha.js';
`, [
            frostConfig,
        ]);

        assert.strictEqual(hasRule(allowedMessages, 'perfectionist/sort-exports'), false);
        assert.strictEqual(hasRule(disallowedMessages, 'perfectionist/sort-exports'), true);
    });

    it('enforces class member order for static props, static methods, props, constructor, and methods', async () => {
        const allowedMessages = await lintText(`class Example {
    static alpha = 1;
    static beta() {}
    alpha = 1;
    constructor() {}
    beta() {}
}

void Example;
`, [
            frostConfig,
        ]);
        const disallowedMessages = await lintText(`class Example {
    alpha = 1;
    static alpha = 1;
    beta() {}
    constructor() {}
    static beta() {}
}

void Example;
`, [
            frostConfig,
        ]);

        assert.strictEqual(hasRule(allowedMessages, 'perfectionist/sort-classes'), false);
        assert.strictEqual(hasRule(disallowedMessages, 'perfectionist/sort-classes'), true);
    });
});
