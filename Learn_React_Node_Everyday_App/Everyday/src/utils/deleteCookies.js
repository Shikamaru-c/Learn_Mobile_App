import formatCookies from './formatCookies'

function deleteCookies (cookies) {
  let formatedCookies = formatCookies(cookies)
  if (!formatedCookies) return
  for (let name of Object.keys(formatedCookies)) {
    document.cookie = `${name}=${formatedCookies[name]};expires=Thu, 01-Jan-70 00:00:01 GMT;`
  }
}

export default deleteCookies