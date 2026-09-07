// Cleaned shim of selenite's js/all.js.
// Original hosted anti-embedding (window.self !== window.top => blank page)
// and analytics injection, which break embedding via iframe on Rcdn.
// This version only provides the helper functions games may reference.
function getCookie(cname) {
  let name = cname + "=";
  let ca = decodeURIComponent(document.cookie).split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
let panicurl = "https://google.com";
function panicMode() {
  let p = getCookie("panicurl");
  panicurl = p === "" ? "https://google.com" : p;
}
function setCloak(name, icon) {
  if (name) document.title = name;
}