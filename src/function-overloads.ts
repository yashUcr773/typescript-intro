// function getLength(val: any[]): number
// function getLength(val: string): string
// function getLength(val: string | any[]) {
//     if (typeof val === 'string') {
//         let words = val.split(' ').length
//         return `${words}`
//     }
//     return val.length
// }

// const nWords = getLength("How many words");
// console.log(nWords.length)
// const nItems = getLength([1, 2, 3, 4])
// console.log("🚀 ~ nItems:", nItems)


const dataEntries = {
    entry1: 0.51,
    entry2: -1.23,
    "abc": false
} satisfies Record<string, number | boolean>

// dataEntries.entry3 = 1