import tfs from 'then-fs'

tfs
    .readFile('./files/11.txt', 'utf8')
    .catch(err => console.log(err.message))
    .then(r1 => {
        console.log(r1)
        return tfs.readFile('./files/2.txt', 'utf8')
    })
    .then(r2 => {
        console.log(r2)
        return tfs.readFile('./files/3.txt', 'utf8')
    })
    .then(r3 => {
        console.log(r3)
    })

/* let arr = [
        tfs.readFile('./files/1.txt', 'utf8'),
        tfs.readFile('./files/2.txt', 'utf8'),
        tfs.readFile('./files/3.txt', 'utf8')
    ]
    // 所有异步操作完成后 在执行then方法
    // Promise.all(arr).then(result => console.log(result))

// 只要任一异步操作完成，就立即执行then方法
Promise.race(arr).then(result => console.log(result)) */