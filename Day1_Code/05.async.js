import tfs from 'then-fs'

console.log('a')
async function getFile() {
    console.log('b')
    let r1 = await tfs.readFile('./files/1.txt', 'utf8')
    console.log(r1)
    let r2 = await tfs.readFile('./files/2.txt', 'utf8')
    console.log(r2)
    let r3 = await tfs.readFile('./files/3.txt', 'utf8')
    console.log(r3)
    console.log('d')
    console.log('e')
}
getFile()
console.log('c')