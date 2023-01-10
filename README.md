# Basic Nodejs CLI example

This is basic repo to show how to make a quick-n-dirty nodejs based command line interface (CLI) program.

This demo just reads a file and writes file, but allows custom arguments and command line help.

## Building it
First run the following command to install dependancies

```javascript
npm install
````

The core deps are yargs which is used for argument passing and command line help generation.

## Running it

In the repo run
```
node . -i inputFileName -o outputFileName
```
It will the copy the data in the input file to the output file using text encoding.   Of course if your app needs binary support change this in the fileRead and fileWrite commands in the source code.

Running the following prints out the help
```bash
node . -h
```

or you can all it directly as:
```bash
./bin/index.js -h
``` 

which should print out the help.  If you get a permission denied error run this command in the /bin directory:

```bash
chmod +x index.js
```

The arguments and defaults can be changed in the ./bin/index.js file.

## Installing your cli package
You can make this a global package by running
```bash
npm install -g . 
```
in the main directory or at any prompt:
```bash
npm install -g path/to/this/repo
```

If you publish to npm then one can run your command with
```bash
npx whatver-you-named-your-command-in-npm --arg1  --arg2 value --arg3
```


##  More complex use cases
This is just a starter for quick and dirty (and to remind people like me who switch languages a lot) some basic nodejs grammar.

You may wish to use packing tool (rollup, webpack, etc) to minify and bundle your code as it grows however this works "out of the box" for quick reference.

