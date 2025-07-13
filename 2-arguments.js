const argscount = Process.argv.slice (2);
const result = argscount[0];

if (result === undefined) {
    console.log ("No argument");
} else {
    console.log(result);
}