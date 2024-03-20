# stheine/helpers

# Use

```
npm install @stheine/helpers
```

## eslint.config.js
```
import eslintConfig from '@stheine/helpers/eslint.config';

export default [
  ...eslintConfig,
];
```

## logger
```
import {logger} from '@stheine/helpers';

logger.info('Startup');
```

## sendMail
```
import {sendMail} from '@stheine/helpers';

await sendMail({
  to:      'technik@heine7.de',
  subject: `Test mail`,
  html:    `<html>Eine test mail</html>`,
});
```
