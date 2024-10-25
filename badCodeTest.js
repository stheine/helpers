// / eslint-disable-next-line eslint-comments/no-unlimited-disable

import checkDuplicate1 from 'nodemailer';
// eslint-disable-next-line no-duplicate-imports
import checkDuplicate2 from 'nodemailer';
// eslint-disable sort-imports
import check from 'dayjs';
// eslint-enable sort-imports

// / eslint-disable-next-line unicorn/no-abusive-eslint-disable
// / eslint-disable

// eslint-disable-next-line no-empty-function
const func = function() {
};

(async() => {
  // eslint-disable-next-line no-unused-vars
  const aaa = 1;
  const out = check.noop();
  const bb  = check;
  // eslint-disable-next-line no-underscore-dangle
  const _abc = 1;
  const ABC = {
    aa: 1,
    bb: 2,
    // eslint-disable-next-line no-dupe-keys
    bb: 3,
  };

  // / eslint-disable-next-line eslint-comments/no-unused-disable
  // / eslint-disable-next-line semi

  // eslint-disable-next-line semi
  checkDuplicate1()
  checkDuplicate2();
  // eslint-disable-next-line indent
   checkDuplicate2();
  // eslint-disable-next-line no-extra-semi
  checkDuplicate2(); ;
  // eslint-disable-next-line semi-spacing
  checkDuplicate2();check(out);
  check(ABC);
  func(ABC);

  // eslint-disable-next-line no-console
  console.log(out);

  // eslint-disable-next-line no-use-before-define
  a--;

  // eslint-disable-next-line id-length
  let a = 1;

  // eslint-disable-next-line unicorn/no-zero-fractions
  a = 1.0;

  a = [
    'a',
    // eslint-disable-next-line comma-dangle
    2
  ];

  // eslint-disable-next-line no-undef
  a = b.c();

  a = _abc
    .c();

  // eslint-disable-next-line dot-location
  a = bb.
    c();

  // eslint-disable-next-line max-len
  a = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  // eslint-disable-next-line space-infix-ops
  a= 1;

  // eslint-disable-next-line max-statements-per-line
  a = 1; a = 2; a = 3;

  // eslint-disable-next-line object-curly-spacing
  a = { ab: 123};

  // eslint-disable-next-line quote-props
  a = {'ab': 123};

  a = {ab : 123};

  // eslint-disable-next-line func-call-spacing
  a = bb ();

  // eslint-disable-next-line no-unreachable-loop
  for(const aa of [1, 2, 3]) {
    // eslint-disable-next-line no-const-assign
    aa++;

    // eslint-disable-next-line no-shadow
    let bb = aa;

    bb--;
    --bb;

    if(bb > aa) {
      return;
    }

    if(bb < a)
    // eslint-disable-next-line brace-style
    {
      return;
    }

    break;
  }

  await new Promise((resolve, reject) => {
    if(a < bb) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(123);
    }

    // eslint-disable-next-line unicorn/prefer-date-now
    a = new Date().getTime();

    resolve();
  });

  for(a of bb)
    // eslint-disable-next-line curly
    a = bb;

  // eslint-disable-next-line keyword-spacing
  for (a of bb) {
    a = bb;
  }
  // eslint-disable-next-line keyword-spacing
  if (a === bb) {
    a = bb;
  }
  // eslint-disable-next-line keyword-spacing
  try{
  // eslint-disable-next-line keyword-spacing
  } catch (err) {
    a = err;
  // eslint-disable-next-line keyword-spacing
  } finally{
    a = bb;
  }
  // eslint-disable-next-line keyword-spacing
  while (a === bb) {
    a = bb;
  }
  // eslint-disable-next-line keyword-spacing
  switch (a) {
    case 1:
    default:
  }

  switch(a) {
    // eslint-disable-next-line default-case-last
    default:
    case 1:
      a = bb;
      // eslint-disable-next-line no-fallthrough
    case 2:
      a = bb;
  }

  // eslint-disable-next-line default-case
  switch(a) {
    case 1:
  }

  try {
    a = bb;
    // eslint-disable-next-line unicorn/prefer-optional-catch-binding
  } catch(err) {
    a = bb;
  }

  try {
    a = bb;
    // eslint-disable-next-line space-before-blocks
  } catch(err){
    a = err;
  }

  try {
    a = bb;
  } catch{
    a = bb;
  }

  try {
    a = bb;
  } catch(err) {
    a = err;
  }

  try {
    a = bb;
  } catch(subErr) {
    a = subErr;
  }

  try {
    a = bb;
    // eslint-disable-next-line unicorn/catch-error-name
  } catch(errApi) {
    a = errApi;
  }

  try {
    a = bb;
    // eslint-disable-next-line unicorn/catch-error-name
  } catch(result) {
    a = result;
  }

  // eslint-disable-next-line no-cond-assign
  if(a = bb) {
    a = bb;
  }

  // eslint-disable-next-line no-constant-condition
  if(true) {
    a = bb;
  }
})();
