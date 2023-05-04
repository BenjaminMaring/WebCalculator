// use parseInt() to convert to int
//initialize variables
let display = document.getElementById("display");
display.value="";

let num1 =0;
let num2 =0;
let operand ="";

//this function insterts the input into the 
//display
function insert(n){
	display.value = display.value + n;
}

//this function clears the display and
//assigned variables
function undo(){
	display.value = "";
	num1=0;
	num2=0;
	operand="";
}
//this function is used whenever an operand 
//button is pressed. it saves the value that was enter and the operation to he performed.
function operate(command) {
if (display.value != ""){
	num1=parseInt(display.value);
	operand = command;
	display.value = "";
	}//end if
else {
	display.value="Error 1"
}
}//end operate()

//this function will perform the math and dictate how to handle input
function doMath() {
	num2 = parseInt(display.value);
	
switch(operand){
	case '+': 
		display.value = num1 + num2;
		break;
			
	case '-':
		display.value = num1 - num2;
		break;
			
	case '*':
		display.value = num1 * num2;
		break;
			
	case '/': 
		display.value = num1 / num2;
		break;
			
	default: display.value="Error 2";
		break;
	}//end switch
}



 