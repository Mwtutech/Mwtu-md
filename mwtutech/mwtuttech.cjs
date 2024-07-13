/* MWTU-MD V2 */
/* MWTU-MD V2 */
async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}
/* MWTU-MD V2 */
async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}
/* MWTU-MD V2 */
module.exports = { dBinary, eBinary }
/* MWTU-MD V2 */
/* MWTU-MD V2 */
/* MWTU-MD V2 */
/* MWTU-MD V2 */
