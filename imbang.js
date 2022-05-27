/**
 * cek apakah tanda kurung imbang dan sesuai pasangan atau tidak
 */

function imbang(str) {
  if(str.length%2==0){
     for (let i = str.length-1; i >= str.length/2; i--) {
    akhir += str[i]; //kebalikannya dari index terakhir sampai tengah
  }
  for (let i = 0; i <= str.length/2 - 1; i++) {
    awal += str[i]; //index awal sampai tengah
  }
    if(awal==akhir){
      return true;
    }else{return false;}
  }else{
    return false;
  }
}

/**
 * contoh
 * imbang("[()]")
 * imbang("[(])")
 * true
 * false
 */

console.log(imbang("[({()})]"));
console.log(imbang("({({[})})"));
console.log(imbang("(((({{{[]}})))))"));
