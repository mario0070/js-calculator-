
var numb1=parseInt(prompt("enter the first number: 0 - 9 "))
var opr=prompt("enter operator : + , * , - , / , % ")
var numb2=parseInt(prompt("enter the second number: 0 - 9 "))

if (opr=="+"){
    console.log(numb1 + numb2)
}

else if (opr=="-"){
    console.log(numb1 - numb2)
}

else if (opr=="/"){
    console.log(numb1 / numb2)
}

else if (opr=="*"){
    console.log(numb1 * numb2)
}

else if (opr=="%"){
    console.log(numb1 % numb2)
}