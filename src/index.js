import glob from 'tiny-glob';

export default {
  name: 'glob',
  _hooks: {
    glob: {
      async $({_, _key, _val}) {
        const {opts, exec, execs, execPipe} = _val;
        let files = await glob(_key, opts);
        exec && exec({_, _val: files});
        execs && execs.forEach(exec => exec({_, _val: files}));
        execPipe && execPipe.reduce((a, b) => (...args) => b(a(...args)))({_val: files, _});
      },
    },
  },
};
