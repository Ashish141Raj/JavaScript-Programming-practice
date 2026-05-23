/**10. Pattern Printing

Print this pattern using nested for loops:

*
**
***
****
*****
 
*/

for(let i = 1; i <= 5; i++){
    let pattern = " ";
    for(let j = 1; j <= i; j++){
        pattern +="*"
    }
    console.log(pattern);
}