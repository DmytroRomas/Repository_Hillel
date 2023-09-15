let firstNum = +prompt( 'Enter first number' )
let secondNum = +prompt( 'Enter second number' )
let thirdNum = +prompt( 'Enter third number' )

// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)

// let firstNum = 1
// let secondNum = 2
// let thirdNum = 3



let arrNum = []
arrNum.push(firstNum, secondNum, thirdNum)
// console.log(arrNum)



function arrayNumSum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum
}

let numberSum = arrayNumSum(arrNum)
//console.log(numberSum)
//console.log(typeof numberSum)

let average = numberSum / arrNum.length
// console.log(average)

alert(
    ' Average of entered digits' +
      " " +
      average
       
  );