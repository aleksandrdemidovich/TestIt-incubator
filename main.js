let input = document.getElementById("input");
let buttn = document.getElementById("bttnFind");

//task 3
/* if(buttn){
    buttn.addEventListener("click", () => {
        checked(input.value)
        alert(arrObj[0].name)
    })
}

//task 4
function checked(str){
    if(str === 'google'){
        alert('Yandex круче. Но это не точно')
    } else{
        alert(input.value)
    }
} */

//task 5
/* let arrObj = [{name: 'Alex', age: 23} 
            , {name: 'Dima', age: 33}
            , {name: 'Vasya', age: 33} 
            , {name: 'Tolik', age: 43}]

 */
//task 6
function superSum(a, b){
    return a + b
}

alert(superSum(5, Math.PI))

//task 7
let numArr = []
for(let i = 0; i < 10; i++ ){
    numArr[i] = Math.floor(Math.random() * 100)
}

function find(arr){
    let max = numArr[0]
    let min = numArr[0]
    for(let i = 0; i < numArr.length; i++){
        if((numArr[i]) < min){
            min = numArr[i]
        } else if( numArr[i] > max) {
            max = numArr[i]
        }
    }
    return `Max in arr - ${max}, min in arr - ${min}`
}

console.log(numArr)
console.log(find(numArr))

//task 8 
let a = "XXX";
let b = "YYY";
console.log(`Before change value a = ${a}, b = ${b}`);
[b, a] = [a, b]
console.log(`After change value a = ${a}, b = ${b}`);

//task 9
someArr = [25, 54, 84, 23, 19, 5, 92, 34, 94, 83];

function findMax(arr){
   return Math.max.apply(null, arr) 
}
console.log(someArr);
console.log(findMax(someArr))

//task 10
if(buttn){
    buttn.addEventListener("click", setTimeout.bind(null, () => {
        checked(input.value)
    }, 3000))
}

function checked(str){
    if(str === 'google'){
        alert('Yandex круче. Но это не точно')

    } else{
        alert(input.value)
    }
}