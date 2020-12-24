export function stringify(obj, flag, emptyValue) {
  if (!obj || !(obj instanceof Object)) {
    return ''
  }
  const res = []
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (value || value === 0 || value === false) {
      res.push(key + '=' + obj[key])
    } else if (flag) {
      res.push(key + '=' + emptyValue)
    }
  })
  return res.join('&')
}

// 规范时间格式
export function formatTime(time) {
  let date
  if (!time) {
    date = new Date()
  } else {
    date = new Date(time)
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + (hour < 10 ? '0' + hour : hour) + ':' +
    (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
}

// 发请求去掉空值
export function exchangeEmpty(obj, flag, emptyValue) {
  if (!obj || !(obj instanceof Object)) {
    return {}
  }
  const res = {}
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (value || value === 0 || value === false) {
      res[key] = value
    } else if (flag) {
      res[key] = emptyValue
    }
  })
  return res
}