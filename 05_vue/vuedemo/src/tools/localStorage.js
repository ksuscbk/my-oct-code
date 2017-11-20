// 本地缓存一般都存储关键信息
const KEY = 'KEY'

export function getInfo() {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
}


export function setInfo(data) {
    // 先取出本地存储的信息
    var arr = JSON.parse(localStorage.getItem(KEY) || '[]')

    arr.push(data)

    localStorage.setItem(KEY, JSON.stringify(arr))
}