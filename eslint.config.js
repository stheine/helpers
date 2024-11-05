/* eslint-disable quote-props */

import eslintComments from 'eslint-plugin-eslint-comments';
import globals        from 'globals';
import mocha          from 'eslint-plugin-mocha';
import react          from 'eslint-plugin-react';
import unicorn        from 'eslint-plugin-unicorn';

export default [
//  env: {
//    es6: true,
//    mocha: true,
//    node: true,
//  },
//
//  parser: null,
//  parserOptions: {
//    sourceType: 'module',
//    ecmaVersion: 'latest',
//    ecmaFeatures: {
//      globalReturn: false,
//      impliedStrict: false,
//      jsx: true,
//    },
//  },
//
//
//  settings: {},
//  ignorePatterns: [],

{
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
  },

  {
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      unicorn,
      mocha,
      'eslint-comments': eslintComments,
    },
    rules: {
      'accessor-pairs': ['error', {
        'getWithoutSet': false,
        'setWithoutGet': true,
        'enforceForClassMembers': true,
      }],
      'array-bracket-spacing': [2, 'never'],
      'array-callback-return': ['error', {
        'allowImplicit': true,
        'checkForEach': false,
        'allowVoid': false,
      }],
      'brace-style': ['error', '1tbs', {'allowSingleLine': false}],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      }],
      'curly': ['error', 'all'],
      'default-case': ['error'],
      'default-case-last': ['error'],
      'dot-location': [2, 'property'],
      'eslint-comments/disable-enable-pair': 0,
      'eslint-comments/no-aggregating-enable': ['error'],
      'eslint-comments/no-duplicate-disable': ['error'],
      'eslint-comments/no-restricted-disable': ['off'],
      'eslint-comments/no-unlimited-disable': ['error'],
      'eslint-comments/no-unused-disable': ['error'],
      'eslint-comments/no-unused-enable': ['error'],
      'eslint-comments/no-use': ['off'],
      'eslint-comments/require-description': ['off'],
      'func-call-spacing': ['error', 'never'],
      'id-length': [
        'error',
        {
          'min': 2,
          'properties': 'always',
          'exceptions': [
            '_',
            'i',
            'j',
            't',
            'x',
            'y',
            'z',
          ],
        },
      ],
      'indent': [
        2,
        2,
        {
          'CallExpression': {'arguments': 'off'},
          'ignoreComments': true,
          'MemberExpression': 'off',
          'SwitchCase': 1,
          'VariableDeclarator': {
            'var': 2,
            'let': 2,
            'const': 3,
          },
        },
      ],
      'keyword-spacing': ['error', {
        overrides: {
          catch: {
            after: false,
          },
          if: {
            after: false,
          },
          for: {
            after: false,
          },
          switch: {
            after: false,
          },
          while: {
            after: false,
          },
        },
        before: true,
        after: true,
      }],
      'max-len': ['warn', 120],
      'max-statements-per-line': ['error', {'max': 2}],
      'mocha/no-return-from-async': ['error'],
      'no-cond-assign': ['error', 'always'],
      'no-console': ['error'],
      'no-const-assign': ['error'],
      'no-constant-condition': ['error', {'checkLoops': true}],
      'no-dupe-class-members': ['error'],
      'no-dupe-keys': ['error'],
      'no-duplicate-imports': ['error', {'includeExports': true}],
      'no-array-constructor': ['error'],
      'no-empty': ['error', {
        'allowEmptyCatch': false,
      }],
      'no-empty-function': ['error', {
        'allow': [],
      }],
      'no-extra-parens': ['error', 'all', {
        'conditionalAssign': false,
        'enforceForArrowConditionals': false,
        'ignoreJSX': 'all',
        'nestedBinaryExpressions': false,
        'returnAssign': false,
      }],
      'no-extra-semi': ['error'],
      'no-fallthrough': ['error'],
      'no-loop-func': ['error'],
      'no-loss-of-precision': ['error'],
      'no-process-exit': ['error'],
      'no-shadow': ['error', {
        'builtinGlobals': false,
        'hoist': 'functions',
        'allow': [],
        'ignoreOnInitialization': false,
      }],
      'no-undef': ['error', {'typeof': true}],
      'no-underscore-dangle': ['error', {
        'allow': [
          '__html',
        ],
        'allowAfterThis': false,
        'allowAfterThisConstructor': false,
        'allowAfterSuper': false,
        'allowFunctionParams': false,
        'enforceInMethodNames': true,
        'enforceInClassFields': false,
        'allowInArrayDestructuring': true,
        'allowInObjectDestructuring': true,
      }],
      'no-unreachable-loop': ['error'],
      'no-unused-vars': [2, {'caughtErrors': 'none'}],
      'no-use-before-define': ['error', {
        'functions': true,
        'classes': true,
        'variables': true,
      }],
      'no-useless-constructor': ['error'],
      'nonblock-statement-body-position': ['error', 'below'],
      'object-curly-spacing': [2, 'never'],
      'prefer-promise-reject-errors': ['error', {
        'allowEmptyReject': false,
      }],
      'quote-props': ['error', 'as-needed', {
        'keywords': false,
        'unnecessary': true,
        'numbers': false,
      }],
      'semi': ['error', 'always', {'omitLastInOneLineBlock': false}],
      'semi-spacing': ['error', {
        'before': false,
        'after': true,
      }],
      'sort-imports': ['error', {
        'allowSeparatedGroups': true,
        'ignoreCase': true,
        'ignoreDeclarationSort': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': [
          'none',
          'all',
          'single',
          'multiple',
        ],
      }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': [2, 'never'],
      'space-infix-ops': ['error', {'int32Hint': false}],
      'unicorn/catch-error-name': ['error', {
        name: 'err',
      }],
      'unicorn/no-zero-fractions': ['error'],
      'unicorn/prefer-date-now': ['error'],
      'unicorn/prefer-optional-catch-binding': ['error'],



      'arrow-body-style': [
        'error',
        'as-needed',
        {
          'requireReturnForObjectLiteral': false,
        },
      ],
      'arrow-parens': [
        'error',
        'as-needed',
        {
          'requireForBlockBody': false,
        },
      ],
      'arrow-spacing': [
        'error',
        {
          'before': true,
          'after': true,
        },
      ],
      'block-scoped-var': [
        'error',
      ],
      'block-spacing': [
        'error',
        'always',
      ],
      'callback-return': [
        'error',
        [
          'callback',
          'next',
        ],
      ],
      'class-methods-use-this': [
        'error',
        {
          'exceptMethods': [],
          'enforceForClassFields': true,
        },
      ],
      'comma-style': [
        'error',
        'last',
      ],
      'computed-property-spacing': [
        'error',
        'never',
        {
          'enforceForClassMembers': true,
        },
      ],
      'consistent-this': [
        'error',
        'that',
      ],
      'constructor-super': [
        'error',
      ],
      'eol-last': [
        'error',
        'always',
      ],
      'eqeqeq': [
        'error',
        'always',
      ],
      'for-direction': [
        'error',
      ],
      'func-style': [
        'error',
        'expression',
      ],
      'function-call-argument-newline': [
        'error',
        'consistent',
      ],
      'function-paren-newline': [
        'error',
        'consistent',
      ],
      'generator-star-spacing': [
        'error',
        {
          'before': true,
          'after': true,
        },
      ],
      'getter-return': [
        'error',
        {
          'allowImplicit': true,
        },
      ],
      'global-require': [
        'error',
      ],
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
      ],
      'guard-for-in': [
        'error',
      ],
      'handle-callback-err': [
        'error',
        'err',
      ],
      'jsx-quotes': [
        'error',
        'prefer-single',
      ],
      'linebreak-style': [
        'error',
        'unix',
      ],
      'multiline-comment-style': [
        'error',
        'separate-lines',
      ],
      'multiline-ternary': [
        'error',
        'always-multiline',
      ],
      'new-cap': [
        'error',
        {
          'newIsCap': true,
          'capIsNew': true,
          'newIsCapExceptions': [],
          'capIsNewExceptions': [],
          'properties': true,
        },
      ],
      'newline-per-chained-call': [
        'error',
        {
          'ignoreChainWithDepth': 4,
        },
      ],
      'new-parens': [
        'error',
        'always',
      ],
      'no-alert': [
        'error',
      ],
      'no-bitwise': [
        'error',
        {
          'allow': [],
          'int32Hint': false,
        },
      ],
      'no-buffer-constructor': [
        'error',
      ],
      'no-caller': [
        'error',
      ],
      'no-case-declarations': [
        'error',
      ],
      'no-class-assign': [
        'error',
      ],
      'no-compare-neg-zero': [
        'error',
      ],
      'no-constructor-return': [
        'error',
      ],
      'no-control-regex': [
        'error',
      ],
      'no-debugger': [
        'error',
      ],
      'no-delete-var': [
        'error',
      ],
      'no-div-regex': [
        'error',
      ],
      'no-dupe-args': [
        'error',
      ],
      'no-dupe-else-if': [
        'error',
      ],
      'no-duplicate-case': [
        'error',
      ],
      'no-else-return': [
        'error',
        {
          'allowElseIf': false,
        },
      ],
      'no-empty-character-class': [
        'error',
      ],
      'no-empty-pattern': [
        'error',
      ],
      'no-eq-null': [
        'error',
      ],
      'no-eval': [
        'error',
        {
          'allowIndirect': false,
        },
      ],
      'no-ex-assign': [
        'error',
      ],
      'no-extend-native': [
        'error',
        {
          'exceptions': [],
        },
      ],
      'no-extra-bind': [
        'error',
      ],
      'no-extra-boolean-cast': [
        'error',
      ],
      'no-extra-label': [
        'error',
      ],
      'no-floating-decimal': [
        'error',
      ],
      'no-func-assign': [
        'error',
      ],
      'no-global-assign': [
        'error',
        {
          'exceptions': [],
        },
      ],
      'no-implicit-coercion': [
        'error',
      ],
      'no-implicit-globals': [
        'error',
        {
          'lexicalBindings': false,
        },
      ],
      'no-implied-eval': [
        'error',
      ],
      'no-import-assign': [
        'error',
      ],
      'no-inner-declarations': [
        'error',
        'both',
      ],
      'no-invalid-regexp': [
        'error',
        {
          'allowConstructorFlags': [
            'u',
            'y',
          ],
        },
      ],
      'no-irregular-whitespace': [
        'error',
        {
          'skipComments': false,
          'skipRegExps': false,
          'skipStrings': false,
          'skipTemplates': false,
          'skipJSXText': false,
        },
      ],
      'no-iterator': [
        'error',
      ],
      'no-labels': [
        'error',
        {
          'allowLoop': false,
          'allowSwitch': false,
        },
      ],
      'no-label-var': [
        'error',
      ],
      'no-lone-blocks': [
        'error',
      ],
      'no-lonely-if': [
        'error',
      ],
      'no-misleading-character-class': [
        'error',
      ],
      'no-mixed-requires': [
        'error',
        {
          'grouping': true,
          'allowCall': false,
        },
      ],
      'no-mixed-spaces-and-tabs': [
        'error',
      ],
      'no-multi-assign': [
        'error',
      ],
      'no-multi-str': [
        'error',
      ],
      'no-new': [
        'error',
      ],
      'no-new-func': [
        'error',
      ],
      'no-new-object': [
        'error',
      ],
      'no-new-require': [
        'error',
      ],
      'no-new-symbol': [
        'error',
      ],
      'no-new-wrappers': [
        'error',
      ],
      'no-nonoctal-decimal-escape': [
        'error',
      ],
      'no-obj-calls': [
        'error',
      ],
      'no-octal': [
        'error',
      ],
      'no-octal-escape': [
        'error',
      ],
      'no-param-reassign': [
        'error',
        {
          'props': true,
          'ignorePropertyModificationsFor': [],
        },
      ],
      'no-path-concat': [
        'error',
      ],
      'no-process-env': [
        'error',
      ],
      'no-proto': [
        'error',
      ],
      'no-prototype-builtins': [
        'error',
      ],
      'no-redeclare': [
        'error',
        {
          'builtinGlobals': true,
        },
      ],
      'no-regex-spaces': [
        'error',
      ],
      'no-restricted-globals': [
        'error',
      ],
      'no-return-assign': [
        'error',
        'always',
      ],
      'no-script-url': [
        'error',
      ],
      'no-self-assign': [
        'error',
        {
          'props': true,
        },
      ],
      'no-self-compare': [
        'error',
      ],
      'no-sequences': [
        'error',
      ],
      'no-setter-return': [
        'error',
      ],
      'no-shadow-restricted-names': [
        'error',
      ],
      'no-sparse-arrays': [
        'error',
      ],
      'no-sync': [
        'error',
        {
          'allowAtRootLevel': false,
        },
      ],
      'no-tabs': [
        'error',
        {
          'allowIndentationTabs': false,
        },
      ],
      'no-template-curly-in-string': [
        'error',
      ],
      'no-this-before-super': [
        'error',
      ],
      'no-throw-literal': [
        'error',
      ],
      'no-trailing-spaces': [
        'error',
        {
          'ignoreComments': false,
          'skipBlankLines': false,
        },
      ],
      'no-undef-init': [
        'error',
      ],
      'no-unexpected-multiline': [
        'error',
      ],
      'no-unmodified-loop-condition': [
        'error',
      ],
      'no-unneeded-ternary': [
        'error',
        {
          'defaultAssignment': false,
        },
      ],
      'no-unreachable': [
        'error',
      ],
      'no-unsafe-finally': [
        'error',
      ],
      'no-unsafe-negation': [
        'error',
      ],
      'no-unsafe-optional-chaining': [
        'error',
        {
          'disallowArithmeticOperators': true,
        },
      ],
      'no-unused-expressions': [
        'error',
        {
          'allowShortCircuit': false,
          'allowTernary': false,
          'allowTaggedTemplates': false,
          'enforceForJSX': false,
        },
      ],
      'no-unused-labels': [
        'error',
      ],
      'no-useless-backreference': [
        'error',
      ],
      'no-useless-call': [
        'error',
      ],
      'no-useless-catch': [
        'error',
      ],
      'no-useless-computed-key': [
        'error',
        {
          'enforceForClassMembers': true,
        },
      ],
      'no-useless-concat': [
        'error',
      ],
      'no-useless-escape': [
        'error',
      ],
      'no-useless-rename': [
        'error',
        {
          'ignoreDestructuring': false,
          'ignoreImport': false,
          'ignoreExport': false,
        },
      ],
      'no-useless-return': [
        'error',
      ],
      'no-var': [
        'error',
      ],
      'no-void': [
        'error',
      ],
      'no-whitespace-before-property': [
        'error',
      ],
      'no-with': [
        'error',
      ],
      'object-curly-newline': [
        'error',
        {
          'ObjectExpression': {
            'consistent': true,
          },
          'ObjectPattern': {
            'consistent': true,
          },
          'ImportDeclaration': {
            'consistent': true,
          },
          'ExportDeclaration': {
            'consistent': true,
          },
        },
      ],
      'object-property-newline': [
        'error',
        {
          'allowAllPropertiesOnSameLine': true,
          'allowMultiplePropertiesPerLine': false,
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          'avoidQuotes': false,
          'ignoreConstructors': false,
          'avoidExplicitReturnArrows': true,
        },
      ],
      'one-var-declaration-per-line': [
        'error',
        'always',
      ],
      'operator-assignment': [
        'error',
        'always',
      ],
      'operator-linebreak': [
        'error',
        'after',
      ],
      'padded-blocks': [
        'error',
        'never',
        {
          'allowSingleLineBlocks': true,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return',
        },
        {
          'blankLine': 'always',
          'prev': [
            'const',
            'let',
            'var',
          ],
          'next': '*',
        },
        {
          'blankLine': 'any',
          'prev': [
            'const',
            'let',
            'var',
          ],
          'next': [
            'const',
            'let',
            'var',
          ],
        },
        {
          'blankLine': 'always',
          'prev': 'directive',
          'next': '*',
        },
        {
          'blankLine': 'any',
          'prev': 'directive',
          'next': 'directive',
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          'allowNamedFunctions': false,
          'allowUnboundThis': true,
        },
      ],
      'prefer-const': [
        'error',
        {
          'destructuring': 'any',
          'ignoreReadBeforeAssign': true,
        },
      ],
      'prefer-exponentiation-operator': [
        'error',
      ],
      'prefer-named-capture-group': [
        'error',
      ],
      'prefer-numeric-literals': [
        'error',
      ],
      'prefer-object-spread': [
        'error',
      ],
      'prefer-regex-literals': [
        'error',
      ],
      'prefer-rest-params': [
        'error',
      ],
      'prefer-spread': [
        'error',
      ],
      'prefer-template': [
        'error',
      ],
      'quotes': [
        'error',
        'single',
        {
          'avoidEscape': false,
          'allowTemplateLiterals': true,
        },
      ],
      'radix': [
        'error',
        'always',
      ],
      'require-yield': [
        'error',
      ],
      'rest-spread-spacing': [
        'error',
        'never',
      ],
      'semi-style': [
        'error',
        'last',
      ],
      'sort-vars': [
        'error',
        {
          'ignoreCase': true,
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          'exceptions': [],
          'markers': [],
        },
      ],
      'space-in-parens': [
        'error',
        'never',
      ],
      'space-unary-ops': [
        'error',
        {
          'words': true,
          'nonwords': false,
        },
      ],
      'strict': [
        'error',
        'global',
      ],
      'switch-colon-spacing': [
        'error',
        {
          'after': true,
          'before': false,
        },
      ],
      'symbol-description': [
        'error',
      ],
      'template-curly-spacing': [
        'error',
        'never',
      ],
      'template-tag-spacing': [
        'error',
        'never',
      ],
      'unicode-bom': [
        'error',
        'never',
      ],
      'use-isnan': [
        'error',
        {
          'enforceForSwitchCase': true,
          'enforceForIndexOf': false,
        },
      ],
      'valid-typeof': [
        'error',
        {
          'requireStringLiterals': true,
        },
      ],
      'vars-on-top': [
        'error',
      ],
      'wrap-iife': [
        'error',
        'inside',
        {
          'functionPrototypeMethods': true,
        },
      ],
      'yield-star-spacing': [
        'error',
        {
          'before': true,
          'after': true,
        },
      ],
      'yoda': [
        'error',
        'never',
        {
          'exceptRange': true,
          'onlyEquality': false,
        },
      ],
      'mocha/handle-done-callback': [
        'error',
        {
          'ignoreSkipped': false,
        },
      ],
      'mocha/max-top-level-suites': [
        'error',
        {
          'limit': 1,
        },
      ],
      'mocha/no-async-describe': [
        'error',
      ],
      'mocha/no-exclusive-tests': [
        'error',
      ],
      'mocha/no-exports': [
        'error',
      ],
      'mocha/no-global-tests': [
        'error',
      ],
      'mocha/no-identical-title': [
        'error',
      ],
      'mocha/no-nested-tests': [
        'error',
      ],
      'mocha/no-pending-tests': [
        'error',
      ],
      'mocha/no-return-and-callback': [
        'error',
      ],
      'mocha/no-sibling-hooks': [
        'error',
      ],
      'mocha/no-skipped-tests': [
        'error',
      ],
      'mocha/no-synchronous-tests': [
        'error',
      ],
      'mocha/no-top-level-hooks': [
        'error',
      ],
      'mocha/valid-suite-description': [
        'error',
        '[^\\.]$',
      ],
      'mocha/valid-test-description': [
        'error',
        '\\.$',
      ],
      'unicorn/better-regex': [
        'error',
        {
          'sortCharacterClasses': true,
        },
      ],
      'unicorn/consistent-destructuring': [
        'error',
      ],
      'unicorn/consistent-function-scoping': [
        'error',
      ],
      'unicorn/error-message': [
        'error',
      ],
      'unicorn/escape-case': [
        'error',
      ],
      // 'unicorn/import-style': [
      //   'error',
      //   {
      //     'styles': {
      //       'crypto': {
      //         'unassigned': false,
      //         'default': true,
      //         'namespace': false,
      //         'named': false,
      //       },
      //       'fs': {
      //         'unassigned': false,
      //         'default': true,
      //         'namespace': false,
      //         'named': false,
      //       },
      //       'path': {
      //         'unassigned': false,
      //         'default': true,
      //         'namespace': false,
      //         'named': false,
      //       },
      //       'stream': {
      //         'unassigned': false,
      //         'default': false,
      //         'namespace': false,
      //         'named': true,
      //       },
      //       'url': {
      //         'unassigned': false,
      //         'default': false,
      //         'namespace': false,
      //         'named': true,
      //       },
      //       'util': {
      //         'unassigned': false,
      //         'default': false,
      //         'namespace': false,
      //         'named': true,
      //       },
      //     },
      //     'extendDefaultStyles': false,
      //     'checkImport': true,
      //     'checkDynamicImport': true,
      //     'checkExportFrom': true,
      //     'checkRequire': true,
      //   },
      // ],
      'unicorn/new-for-builtins': [
        'error',
      ],
      'unicorn/no-abusive-eslint-disable': [
        'error',
      ],
      'unicorn/no-array-callback-reference': [
        'error',
      ],
      'unicorn/no-array-method-this-argument': [
        'error',
      ],
      'unicorn/no-console-spaces': [
        'error',
      ],
      'unicorn/no-document-cookie': [
        'error',
      ],
      'unicorn/no-for-loop': [
        'error',
      ],
      'unicorn/no-hex-escape': [
        'error',
      ],
      'unicorn/no-instanceof-array': [
        'error',
      ],
      'unicorn/no-invalid-remove-event-listener': [
        'error',
      ],
      'unicorn/no-lonely-if': [
        'error',
      ],
      'unicorn/no-nested-ternary': [
        'error',
      ],
      'unicorn/no-new-array': [
        'error',
      ],
      'unicorn/no-object-as-default-parameter': [
        'error',
      ],
      'unicorn/no-process-exit': [
        'error',
      ],
      'unicorn/no-static-only-class': [
        'error',
      ],
      'unicorn/no-unreadable-array-destructuring': [
        'error',
      ],
      'unicorn/no-useless-fallback-in-spread': [
        'error',
      ],
      'unicorn/no-useless-length-check': [
        'error',
      ],
      'unicorn/no-useless-spread': [
        'error',
      ],
      'unicorn/no-useless-undefined': [
        'error',
      ],
      'unicorn/number-literal-case': [
        'error',
      ],
      'unicorn/prefer-array-find': [
        'error',
      ],
      'unicorn/prefer-array-flat': [
        'error',
      ],
      'unicorn/prefer-array-flat-map': [
        'error',
      ],
      'unicorn/prefer-array-index-of': [
        'error',
      ],
      'unicorn/prefer-array-some': [
        'error',
      ],
      'unicorn/prefer-at': [
        'error',
      ],
      'unicorn/prefer-default-parameters': [
        'error',
      ],
      'unicorn/prefer-dom-node-dataset': [
        'error',
      ],
      'unicorn/prefer-object-has-own': [
        'error',
      ],
      'unicorn/prefer-includes': [
        'error',
      ],
      'unicorn/prefer-keyboard-event-key': [
        'error',
      ],
      'unicorn/prefer-math-trunc': [
        'error',
      ],
      'unicorn/prefer-negative-index': [
        'error',
      ],
      'unicorn/prefer-number-properties': [
        'error',
      ],
      'unicorn/prefer-object-from-entries': [
        'error',
      ],
      'unicorn/prefer-prototype-methods': [
        'error',
      ],
      'unicorn/prefer-reflect-apply': [
        'error',
      ],
      'unicorn/prefer-regexp-test': [
        'error',
      ],
      'unicorn/prefer-set-has': [
        'error',
      ],
      'unicorn/prefer-spread': [
        'error',
      ],
      'unicorn/prefer-string-replace-all': [
        'error',
      ],
      'unicorn/prefer-string-slice': [
        'error',
      ],
      'unicorn/prefer-string-starts-ends-with': [
        'error',
      ],
      'unicorn/prefer-string-trim-start-end': [
        'error',
      ],
      'unicorn/require-array-join-separator': [
        'error',
      ],
      'unicorn/require-number-to-fixed-digits-argument': [
        'error',
      ],
      'unicorn/require-post-message-target-origin': [
        'error',
      ],
      'unicorn/throw-new-error': [
        'error',
      ],
      'camelcase': [
        'error',
        {
          'properties': 'always',
          'ignoreDestructuring': false,
          'ignoreImports': false,
          'allow': [],
          'ignoreGlobals': false,
        },
      ],
      'comma-spacing': [
        'error',
        {
          'before': false,
          'after': true,
        },
      ],
      'default-param-last': [
        'error',
      ],
      'dot-notation': [
        'error',
        {
          'allowKeywords': true,
          'allowPattern': '',
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          'exceptAfterSingleLine': false,
        },
      ],
    },
  },
];
