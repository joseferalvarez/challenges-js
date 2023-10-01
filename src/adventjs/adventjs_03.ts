/** https://adventjs.dev/challenges/2022/3 */

const packOfGifts: string[] = ["book", "doll", "ball", "cat"]
const reindeers: string[] = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers));

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
    const giftsWeight = packOfGifts.reduce((sum: number, current: string) => sum + current.length, 0);
    const reindeersCapacity = reindeers.reduce((sum: number, current: string) => sum + (current.length * 2), 0);

    return Math.floor(reindeersCapacity / giftsWeight);
}