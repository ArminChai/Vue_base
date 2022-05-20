let n1 = 10
let n2 = 20

function show() {
    console.log('这是 show 的函数')
}

// 默认导出
export default {
    n1,
    n2,
    show
}

// 按需导出
export let a1 = 11
export let a2 = 22
export function aa() {
    console.log('这是 aa 的函数')
}

// 直接导出并执行
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }