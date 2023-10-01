/** https://adventjs.dev/challenges/2022/4 */

const boxes: { l: number, w: number, h: number }[] = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]

console.log(fitsInOneBox(boxes));

function fitsInOneBox(boxes: { l: number, w: number, h: number }[]) {
    const boxesOrdered = boxes.sort((a, b) => {
        return a.l - b.l;
    })

    for (let i = 0; i < boxesOrdered.length - 1; i++) {
        const { l: length, w: width, h: height } = boxesOrdered[i];
        const { l: length2, w: width2, h: height2 } = boxesOrdered[i + 1];

        if (length >= length2 || width >= width2 || height >= height2) {
            return false;
        }
    }

    return true;
}