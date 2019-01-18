// 基准大小
// const baseSize = 100
// // 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。

//   const scale = document.documentElement.clientWidth / 375
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
// }

// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }
const clientWidth = window.screen.width;
const dpr = window.devicePixelRatio;

const vp = document.createElement('meta');
document.documentElement.style.fontSize =100 * dpr * clientWidth / 375 + 'px';
vp.name = 'viewport';
vp.content = `initial-scale=${1.0 * 1 / dpr}, maximum-scale=${1.0 * 1 / dpr}, minimum-scale=${1.0 * 1 / dpr}, user-scalable=no, width=device-width`;
const m = document.getElementsByTagName('meta')[0];
m.parentNode.insertBefore(vp, m);