function F(){
//it was GetElement and querysearch right??
if(document.getElementById("UserName").value=="Mahsa" && document.getElementById("Password").value=="123")
	{
		//visiable text box
		//typed success!
		const blah = document.getElementById("result");
		blah.innerText = "Success!";
		blah.value = "Success!";
	}
else{
	const blah = document.getElementById("result");
	blah.innerText = "try another username and password!!";
}

}
//todo: onclick disappearing value! 
//to pass current element to javascript function need to pass this in html and obj in javascritp function
function Disapear(obj){
obj.value="";

}