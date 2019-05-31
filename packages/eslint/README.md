# @nju33/eslint-config

available configs is following like.

- `@nju33/eslint-config` (or `@nju33`)
- `@nju33/eslint-config/ts`
- `@nju33/eslint-config/react`
- `@nju33/eslint-config/react/ts`
- `@nju33/eslint-config/vue`
- `@nju33/eslint-config/vue/ts`

## use cases

### in the browser

"I will use the config for browser"
Okey at that time, to add `browser:true` into the `env` section.

```json
{
  "env": {
    "browser": true
  }
}
```

### in the monorepo

My recommendation is just putting the `.eslintrc` whose contents is empty in the root directory.  
After that, putting the `.eslintrc` in a each workspace directory. Those config is added `root:true`.

I will assume that there is an monorepo. And, it is directory structure following like.

```js
.
└── packages
    ├── bar
    ├── baz
    └── foo
```

The `bar`, `bar` and `baz` is workspace.

First of all to put `.eslintrc` in the root.

```json
{}
```

Next, in the each workspace to put the `.eslintrc` following like.

```json
{
  "root": true,
  "extends: [...]
}
```

In the `extends` section is putted what suits the project.
