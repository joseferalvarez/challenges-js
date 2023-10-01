const PHRASE: string = "How can mirrors be real if our eyes aren't real";

const getCapitalizePhrase = (phrase: string) => {
    let words = phrase.split(" ");

    words = words.map((word: string) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    });

    return words.join(" ");
}

console.log(getCapitalizePhrase(PHRASE));