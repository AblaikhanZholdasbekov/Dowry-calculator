var a = document.getElementById("education");  //DOM getElementById() Method
var b = document.getElementById("networth");
 var c=document.getElementById("Caste")
var strUser = a.value;
let button = document.querySelector('button'); 

button.addEventListener('click', function (){  //Event -click



var total = 100;

/* */
if(a.value == 1){       // here i used a conditionals to get the value that i need. Initially,we have 100$ and by each conditional our price will be change.
  total *= 1.5;
  console.log(total);          //here i could use if-else by creating functions with implementing our section 'education'networth and case' btw i declared it at the beginning of my code
}
else if(a.value == 2){
  total *= 1.2;
  console.log(total);
} else if(a.value == 3){
  total *= 1.05;
  console.log(total);
} else if(a.value==3){
  total *= 0.9;
  console.log(total);
} 
if(b.value == 1){
  total *= 2;
  console.log(total);
}
else if(b.value == 2){
  total *= 1.5;
  console.log(total);
} else if (b.value==3){
  total *= 1.2;
  console.log(total);
} 
/* Caste */
if(c.value==1){ 
    total+=100; 
    console.log(total);
} 
else if(c.value==2){ 
    total+=50; 
    console.log(total);
} 
else if(c.value==3){ 
    total+=20; 
    console.log(total);
} 
else if(c.value==4){ 
    total+=10; 
    console.log(total);
}
else if(c.value==5){
    total-=50;
    console.log(total);
}
/* SKILLS */ 
if(document.getElementById('optionn1').checked == true) { 
    total += 10;
    console.log(total);
} 
if(document.getElementById('optionn2').checked == true) { 
  total += 20;
  console.log(total);
}  
if(document.getElementById('optionn3').checked == true) { 
  total += 15;
  console.log(total);
}
if(document.getElementById('optionn4').checked == true){ 
    total += 10;
    console.log(total);
}
/* SKILLS */
/* AGE */
if(document.getElementById('Choice1').checked==true) { 
    total*=1.5;
    console.log(total);
} 
else if(document.getElementById('Choice2').checked==true) { 
  total*=1.2;
  console.log(total);
} 
else if(document.getElementById('Choice3').checked==true) { 
    total *= 0.95;
    console.log(total);
} 
/* AGE */
/* REPUTATION */

if(document.getElementById('reputation1').checked==true) { 
    total*=0.85;
    console.log(total);
} 
else if(document.getElementById('reputation2').checked==true) { 
  total*=0.9;
  console.log(total);
} 
else if(document.getElementById('reputation3').checked==true){ 
    total -= 20;
    console.log(total);
} 
/* REPUTATION */


res.textContent = "Price:"+total + '$';      //by this we take final price


});
const reloadtButton = document.querySelector("#reload");//this function was created for refresh our page to choice other variables and here i could use remove but it works well
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
