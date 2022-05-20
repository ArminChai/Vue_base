import fs from 'fs'

function getFile(fPath) {
    return new Promise(function(result, reject) {
        fs.readFile(fPath, 'utf8', function(err, dataStr) {
            if (err) return reject(err)
            result(dataStr)
        })
    })
}

// getFile('./files/11.txt').then(r1 => console.log(r1)).catch(err => console.log(err.message))