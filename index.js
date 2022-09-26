const info = require("./information");
const cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: `Hello i'm ${info.name} from ${info.campus}`,
    })
);
