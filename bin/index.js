#!/usr/bin/env node

const yargs = require("yargs");
const fs    = require("fs");

// this function does the work, but we've separated it out incase we want to export this as a pure library 
// see module.export {} in the bottom of this file
function cli (options) {
    let data = null;  // placeholder for some data

    if (options.name) {
        const greeting = `Hello, ${options.name}!\n`;
        console.log(greeting);
    }

    if (options.listArgs) {
        // console.log(process.argv); // lists how process.argv args were passed in
        console.log(yargs.argv);  // lists how yargs handles arguments 
    }

   
    if (options.inpFile ) {
        try {
            if (options.verbose)
                console.log('The contents of inputFile are:\n');
            data = fs.readFileSync(options.inpFile, {encoding:'utf8', flag:'r'});
            if (options.verbose)
                console.log(data,'\n');
        }
        catch (e) {
            console.log ("error: ", e);
        }
    }

    // do something with data from input File
    if (data) {

    }

    // write to output file
    if (options.outFile && data != null) {
        try {
            fs.writeFileSync(options.outFile, data);
            if (options.verbose)
                console.log(`wrote file: ${options.outFile} \n`);
        }
        catch (e){
            console.log ("error: ", e);
        }
    }

}

// this is separated out so we can use the main logic (function cli) as module in other code in the future
if (require.main === module) {

    const opts = yargs
     .usage("Usage: -n <name>")
     .option("n", { alias: "name",        describe: "Your name", type: "string", demandOption: false })
     .option("i", { alias: "inpFile",     describe: "input File", type: "string", demandOption: false , default : null})
     .option("o", { alias: "outFile",     describe: "output File", type: "string", demandOption: false , default : null})
     .option("l", { alias: "listArgs" ,   describe: "list all arguments", type: "boolean", demandOption: false , default: null})
     .option("v", { alias: "verbose" ,   describe: "verbose mode", type: "boolean", demandOption: false , default: false})
     .demandCommand(1, '')  // this prints out help if no arguments are passed.  Remove this line if your app has default behavior not requiring arguments
     .argv;

    cli(opts);
}

// export main logic for other uses in the future, such as being included in a new tool
module.exports = {cli}