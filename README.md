This is a repro to show that "alias" does not work as expetced in wrangler when "no_bundle" is true.

`npm i && npm start`

Expected: The value "this-value-came-from-does-exist" should be logged.

Actual:

```
  [ERROR] service core:user:does-not-exist-test: Uncaught Error: No such module "does-not-exist".

  imported from "index.js"
```

(What should the behaviour be with no_bundle? I recommend it should be like we do with find_additional_modules, except where the name of the module is the alias.)
