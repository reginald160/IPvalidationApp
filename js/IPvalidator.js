const textInput = document.querySelector("#textInput");
const displayBoard = document.querySelector("#displayBoard");
const testButton = document.querySelector("#btn");



testButton.addEventListener('click' , IPvalidator);



function IPvalidator() {
	 let numberInput = textInput.value;
	 let regexIP = /^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/;
	  
	  let result = numberInput.match(regexIP);

	if (regexIP.test(numberInput) ){

		textInput.style.background = "green";
		 
		 alert(`your IP ${result} is valid`);	

	}  

else{
	textInput.style.background = "red";
	alert("your IP is not valid");
	
}
}


