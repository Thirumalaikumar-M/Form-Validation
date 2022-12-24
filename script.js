let passwordInput = document.querySelector('input[type="password"]');
let passwordStrength= document.getElementById('passwordStrength');
let poor = document.querySelector('#passwordStrength #poor');
let weak = document.querySelector('#passwordStrength #weak');
let strong = document.querySelector('#passwordStrength #strong');
let passwordInfo = document.getElementById('passwordInfo');

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;;
let strongRegExp = /(?=.*?[#?!@$%^&*-])/;
let whitespaceRegExp = /^$|\s+/;


passwordInput.oninput= function(){

     let passwordValue= passwordInput.value;
     let passwordLength= passwordValue.length;

     let poorPassword= passwordValue.match(poorRegExp);
     let weakPassword= passwordValue.match(weakRegExp);
     let strongPassword= passwordValue.match(strongRegExp);
     let whitespace= passwordValue.match(whitespaceRegExp);

if(passwordValue != ""){

 passwordStrength.style.display = "block";
 passwordStrength.style.display = "flex";
 passwordInfo.style.display = "block";
 passwordInfo.style.color = "black";

 if(whitespace)
 {
  passwordInfo.textContent = "whitespaces are not allowed";
 }else{
 poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
}

 
}else{
 
 passwordStrength.style.display = "none";
 passwordInfo.style.display = "none";

}
}

function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){

  if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
    {
   poor.classList.add("active");
   passwordInfo.style.display = "block";
   passwordInfo.style.color = "red";
   passwordInfo.textContent = "Your password is too Poor";
      
    }
}

function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
{
 weak.classList.add("active");
 passwordInfo.textContent = "Your password is Weak";
 passwordInfo.style.color = "orange";

}else{
 weak.classList.remove("active");
 
}
}

function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){

if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
{
 poor.classList.add("active");
 weak.classList.add("active");
 strong.classList.add("active");
 passwordInfo.textContent = "Your password is strong";
 passwordInfo.style.color = "green";
}else{
 strong.classList.remove("active");
 
}
}

function extravalidate(){
  var cpass = document.getElementById('cpass').value;
  var age = document.getElementById('age').value;
  if(passwordInput != cpass){
    alert("Please make sure Password and Confirm password must be same");
  }
  else if(age < 18){
    alert("users under the age of 18 are not allowed");
  }
  else{
    return true;
  }
}