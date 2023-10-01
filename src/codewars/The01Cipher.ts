const cipher = (string: string) => {
    const phrase: string[] = string.split("");
    const abecedary: string = "abcdefghijklmnopqrstuvwxyz";

    const number = phrase.map((letter: string) => {
        letter = letter.toLowerCase();
        for (let i = 0; i < abecedary.length; i++) {
            if (letter === abecedary[i] && i % 2 === 0) {
                return 0;
            } else if (letter === abecedary[i] && i % 2 !== 0) {
                return 1;
            } else if (i >= abecedary.length - 1) {
                return letter;
            }
        }
    })
    return number.join("");
}

console.log(cipher("Hello world!"));