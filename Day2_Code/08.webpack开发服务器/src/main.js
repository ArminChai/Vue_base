import $ from 'jquery'
import './css/index.css'
import './less/index.less'
import picSrc from './assets/1.gif'
import './assets/fonts/iconfont.css'


$('#listUl li:odd').css('color', 'orange')
$('#listUl li:even').css('color', 'blue')

let itemImg = document.createElement('img')
itemImg.src = picSrc
document.body.appendChild(itemImg)

let itemI = document.createElement('i')
itemI.className = 'iconfont icon-qq'
document.body.appendChild(itemI)

let fn = () => console.log('我是箭头函数')
console.log(fn)