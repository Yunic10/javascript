/**
 * fungsi yang membalikkan kalimat/string
 * dilarang menggunakan method reverse()
 */

function balikString(str) {
  var kata ="";
  for (let i = str.length - 1; i>=0 ; i--) {
    kata += str[i];
  }
  return kata;
}
/**
 * contoh
 * balikString('halo dek')
 * ked olah
 */
console.log(balikString("hello world"));
console.log(balikString("bolak balik"));
console.log(balikString("evil o live"));
