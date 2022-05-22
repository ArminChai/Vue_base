import $ from 'jquery'

$('#listUl li:odd').css('color', 'blue')
$('#listUl li:even').css('color', 'orange')

import './css/index.css'
import './less/index.less'

import picSrc from './assets/1.gif'
let pic = document.createElement('img')
pic.src = picSrc
document.body.appendChild(pic)

import './assets/fonts/iconfont.css'
let i = document.createElement('i')
i.className = 'iconfont icon-weixin'
document.body.appendChild(i)

let fn = () => console.log('我是一个箭头函数')
console.log(fn)