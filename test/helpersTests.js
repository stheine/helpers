import check   from 'check-types-2';

import {logger, sendMail} from '../index.js';

suite('helpers', () => {
  suite('logger', () => {
    test('is an object', async() => {
      check.assert.nonEmptyObject(logger);
    });

    test('trace', async() => {
      check.assert.function(logger.trace);
    });

    test('debug', async() => {
      check.assert.function(logger.debug);
    });

    test('info', async() => {
      check.assert.function(logger.info);
    });

    test('warn', async() => {
      check.assert.function(logger.warn);
    });

    test('error', async() => {
      check.assert.function(logger.error);
    });
  });

  suite('sendMail', () => {
    test('is a function', async() => {
      check.assert.function(sendMail);
    });
  });
});
