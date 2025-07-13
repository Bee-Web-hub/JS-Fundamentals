const argscount = Process.argv.length - 2;

if (argscount === 0) {
    console.log ("No argument");

 } else if (argscount === 1) {
    console.log ("1 argument");
} else {
    console.log( `${argscount} arguments`);
}