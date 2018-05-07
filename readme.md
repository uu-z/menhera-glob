## Install

```bash
$ yarn global add menhera-cli

$ mhr init uu-z/template-module mymodule
```

## Example

```bash
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
