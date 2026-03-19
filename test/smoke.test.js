import assert from 'node:assert/strict';
import { describe, it } from 'mocha';

import { ESLint } from 'eslint';

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

describe('environment configs', () => {
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

describe('base rules', () => {
    it('no-unused-vars only ignores names that start with an underscore', async () => {
        const allowedMessages = await lintText('function example(_unusedArg) { return 1; }\nexample();\n', [
            frostConfig,
        ]);
        const disallowedMessages = await lintText('function example(unused_arg) { return 1; }\nexample();\n', [
            frostConfig,
        ]);

        assert.strictEqual(allowedMessages.some((message) => message.ruleId === 'no-unused-vars'), false);
        assert.strictEqual(disallowedMessages.some((message) => message.ruleId === 'no-unused-vars'), true);
    });
});
