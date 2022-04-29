var randomstring = require("randomstring")

export let randomString = (length: number) => {
    return randomstring.generate(length);
}
