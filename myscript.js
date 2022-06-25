
var numb1=parseInt(prompt("enter the first number: 0 - 9 "))
var opr=prompt("enter operator : + , * , - , / , % ")
var numb2=parseInt(prompt("enter the second number: 0 - 9 "))

if(opr== '+'){
        result = numb1 + numb2;
    }

else if(opr == '-'){
        result = numb1 - numb2;
    }

else if(opr == '%'){
        result = numb1 % numb2;
    }

else if(opr == '/'){
        result = numb1 / numb2;
    }

else if(opr == '*'){
        result = numb1 * numb2;
    }

else if(isNaN(numb1) || isNaN(numb2)){
        
        alert('incorrect')
    }

    alert(numb1 + opr + numb2 + '=' + result);
    console.log(numb1 + " " + opr + " " + numb2 + " = " + result);
