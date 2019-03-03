# eslint-plugin-number-literal-case

## Enforce lowercase identifier and uppercase value for number literals

Enforces a convention of defining number literals where the literal identifier is written in lowercase and the value in uppercase. Differentiating the casing of the identifier and value clearly separates them and makes your code more readable.

## Usage:

Install the plugin:

```js
npm i --save-dev eslint-plugin-number-literal-case
```

Update your eslintrc to include the plugin and enable the rule:

```json
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": ["number-literal-case"],
  "rules": {
    "number-literal-case/number-literal-case": ["error"]
  }
```

**Note:** _That the `env` and `'sourceType': "module"` have to be set for the rule to run. The `ecmaVersion` can be set to any version `>=6`._

You can also enable the rule using the recommended config which enables the rule and the correct `env` and `parserOptions`. So instead of the above config in your eslint config just use the `extends` option:

```json
{
  "extends": ["plugin:number-literal-case/recommended"]
}
```

_You don't need to add anything else if you use that._

## Examples

### Fail

```js
const foo = 0xff;
const foo = 0xff;
const foo = 0xff;
```

```js
const foo = 0b11;
```

```js
const foo = 0o10;
```

### Pass

```js
const foo = 0xff;
```

```js
const foo = 0b11;
```

```js
const foo = 0o10;
```

## Note:

This rule and its implementation is taken straight out of the fantastic [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) collection of ESLint rules. Check the project out for even more awesome rules you can use!

I just needed this one for a bunch of projects so i just pulled it out into its own plugin. Thank you goes to @sindresorhus for ([eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)) and its maintainers.

## License

[MIT](LICENSE)
