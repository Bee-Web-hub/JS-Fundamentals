const argscount = Process.argv.length - 2;

if (argscount === 0) {
    console.log ("No argument");

 } else if (argscount === 1) {
    console.log ("argument found");
} else {
    console.log("arguments found");
}