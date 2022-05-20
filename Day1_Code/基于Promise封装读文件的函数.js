import fs from 'fs'

function Promise(then) {
    this.then = function() {

    }
}

function getFile(path) {
    return new Promise(function(result, reject) {
        fs.readFile(path, 'utf8', (err, dataStr) => {
            if (err) {
                return reject(err)
            }
            result(dataStr)
        })
    })
}

getFile('./files/11.txt').then(r1 => console.log(r1)).catch(err => console.log(err.message))