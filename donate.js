document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("button").addEventListener("click", function () {
		thankYou();
	});
});



function thankYou() {
	if (document.getElementsByClassName("inputs")[0].value.length > 0 &&
		document.getElementsByClassName("inputs")[1].value.length > 0 &&
		document.getElementsByClassName("inputs")[2].value.length > 0 &&
		document.getElementsByClassName("inputs")[3].value.length > 0 &&
		document.getElementsByClassName("inputs")[4].value.length > 0 &&
		document.getElementsByClassName("inputs")[5].value.length > 0 &&
		document.getElementsByClassName("inputs")[6].value.length > 0 ) 
	{
		 document.getElementById("thankYou").innerHTML = "Thank you for your donation!";
	} else {
		 document.getElementById("thankYou").innerHTML = "Please try again";
	}
}