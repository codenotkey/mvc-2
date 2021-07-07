import './app1.css'
import $ from "jquery"

const $number = $('#counter .screen')
const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
let num = localStorage.getItem('app1') || 100
$number.text(num)

$button1.on('click', ()=>{
    let n = parseInt($number.text())
    n  +=1
    $number.text(n)
    localStorage.setItem('app1',n)
})
$button2.on('click', ()=>{
    let n = parseInt($number.text())
    n  -=1
    $number.text(n)
    localStorage.setItem('app1',n)
})
$button3.on('click', ()=>{
    let n = parseInt($number.text())
    n  *=2
    $number.text(n)
    localStorage.setItem('app1',n)
})
$button4.on('click', ()=>{
    let n = parseInt($number.text())
    n  /=2
    $number.text(n)
    localStorage.setItem('app1',n)
})


