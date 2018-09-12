function formatCookies (cookies) {
  if (!cookies) return null
  let result = {}
  let cookiesArray = cookies.split(';')
  cookiesArray.forEach((cookie) => {
    let cookiePair = cookie.split('=')
    result[cookiePair[0].trim()] = cookiePair[1]
  })
  return result
}

export default formatCookies