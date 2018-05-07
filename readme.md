## Install

```bash
$ yarn menhera menhera-glob
```

## Example

```js
import Mhr from 'menhera';
import glob from 'menhera-glob';

Mhr.$use({
  _mount: {glob},
  glob: {
    '*.md': {
      opts: {},
      exec({_val}) {
        console.log(_val);
      },
      execs: [({_val}) => console.log(_val)],
      execPipe: [
        ctx => {
          console.log(ctx._val);
          return ctx;
        },
        ctx => {
          console.log(ctx._val);
          return ctx;
        },
      ],
    },
  },
});
```
