function getCookie (name, defaultValue) {
  let arr = ''
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return defaultValue
  }
}

export {
  getCookie
}
