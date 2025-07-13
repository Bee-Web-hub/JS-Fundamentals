const res = process.argv.slice(2);
const per = res[0];

if (per === undefined) {
    console.log("no argument");
} else {
    console.log(per);
}