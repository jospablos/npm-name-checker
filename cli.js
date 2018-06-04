#!/usr/bin/env node
const http = require('http');
const chalk = require('chalk');

const [,, ...args] = process.argv;

const queryPackageName = (name) => {
  http.get(`http://registry.npmjs.org/${name}`, (res) => {
    const { statusCode } = res;

    if (statusCode !== 200) {
      console.log(chalk.bgGreen(chalk.black(name)) + chalk.green(' is free to use!'));
    } else {
      console.log(chalk.bgRed(name) + chalk.red(' is taken ') + chalk.gray(`(https://www.npmjs.com/package/${name})`));
    }
  })
};

args.forEach(queryPackageName);
