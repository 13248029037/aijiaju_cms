/**
 * 根据两个地点的坐标位置判断，是否可以归为同一位置
 * @param {Object: {lat 经度值,lng 维度值}} p1 经纬度坐标
 * @param {Object: {lat 经度值,lng 维度值}} p2 经纬度坐标
 * @param {Number} allowError 允许的误差值(两点经纬度的差平方和),默认0.000001
 * @return {Boolean}
 */

export function isSamePostion(p1, p2, allowError = 0.00001){
  return Math.pow((p1.lat - p2.lat), 2) + Math.pow((p1.lng - p2.lng), 2) < allowError;
}

//格式化时间

export function  transformTime (obj) {
    let leftTime = obj.split('-')[0]
    let rightTime = obj.split('-')[1]
    let leftH = leftTime/60<10?'0'+Math.floor(leftTime/60):Math.floor(leftTime/60);
    let leftM = leftTime%60<10?'0'+leftTime%60:leftTime%60;
    let rightH = rightTime/60<10?'0'+Math.floor(rightTime/60):Math.floor(rightTime/60);
    let rightM = rightTime%60<10?'0'+rightTime%60:rightTime%60;
    return leftH+':'+leftM+'-'+rightH+':'+rightM
}

//判断是否是Date对象
export function isDateObj(date){
    return typeof date === 'object' &&　date.constructor === Date;
  }

//格式化日期格式
export function formatDate(value){
  let date = null,
      month = -1,
      day = -1;
  isDateObj(value)? date = value : date = new Date();
  month = date.getMonth()+1,
  day = date.getDate();
  return date.getFullYear() + '-' + (month < 10 ? '0'+ month : month) +'-'+ (day < 10 ? '0'+ day : day);
}
//格式化时间格式
export function formatTime(date){
  let h,m,s;
  if(date){
    date = isDateObj(date) ? date : new Date(date);
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds()

    return (h < 10 ?'0'+ h : h)  +  ':' + (m < 10 ?'0'+ m : m)+':' + (s < 10 ?'0'+ s : s);
  }
  return '00:00:00';
}

//格式化日期格式： 02-01/星期一
export function date2Str (dt) {
    dt = new Date(dt);
    let [month, date, day] = [dt.getMonth() + 1, dt.getDate(), dt.getDay()];
    return `${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}/星期${'日一二三四五六'[day]}`;
}
// 标准化时间格式
export function formatDateAndTime (date) {
    if (date === null) {
        return '';
    }
    date = new Date(date);
    function fillZero (num) {
        num = +num;
        return num <= 9 ? '0' + num : '' + num;
    }
    let [Y, M ,D] = [
        date.getFullYear(),
        fillZero(date.getMonth() + 1),
        fillZero(date.getDate())
    ];

    let [h, m ,s] = [
        fillZero(date.getHours()),
        fillZero(date.getMinutes()),
        fillZero(date.getSeconds())
    ];
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

export const weekdaysArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

