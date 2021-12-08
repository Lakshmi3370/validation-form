function loginform() {
    var username = document.getElementById("Uname").value;
    var emailid = document.getElementById("Email").value;
    var password = document.getElementById("pass").value;
if(username!= " "){
   var global=document.getElementById("res").innerHTML="java"
    //if(username.match(/[^A-Z]/)){
     //if(username.match(/javasript/i)){   
if(global.match(/javajava)/g)){
    }

   document.getElementById("resp").innerHTML="Enter your username";
 
}
    

if(username.length>6 || username.length<10){
		
    document.getElementById("resp").innerHTML="Enter valid Username";
   

}

 else if (emailid!=" ") {

    document.getElementById("resp").innerHTML="Enter your emailid";
} 

	else if(emailid.length>8 || emailid.length<15){
	
   document.getElementById("resp").innerHTML="Enter valid EmailId";


}


 else if (password!=" ") {
	
    document.getElementById("resp").innerHTML="Enter your password";
} 
	else if(password.length>6 || password.length<8){

        document.getElementById("resp").innerHTML="Enter valid password";
     
    }


else {
        document.getElementById("resp").innerHTML="Login Successfully";
    }
    
}

