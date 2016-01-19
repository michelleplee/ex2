window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;
  
  //capture the reset event
  document.f.onreset=resetPage;

  //define process function
  function processForm() {
      
   

    //store user name in a variable
    var userName = document.f.userName.value;
    
    var pronoun = document.f.pronoun.value;
   
    
    var noun1 = document.f.noun1.value;
    var noun2 = document.f.noun2.value;
      var noun3 = document.f.noun3.value;
      var noun4 = document.f.noun4.value;
      
      var verb1 = document.f.verb1.value;
    var verb2 = document.f.verb2.value;
      var verb3 = document.f.verb3.value;
      var verb4 = document.f.verb4.value;
      
    var adjective1 = document.f.adjective1.value;
    var adjective2 = document.f.adjective2.value;
    
 if (userName == "" || pronoun == "" || noun1 == "" || noun2 == "" || noun3 == "" || noun4 == "" || verb1 == "" || verb2 == "" || verb3 == "" || verb4 == "" || adjective1 == "" || adjective2 == "") {
  alert("fill out the form!");
 }
else {
    //capture the msg element to change it's text and html
    var myMsg = document.getElementById("myMsg");

    myMsg.innerHTML = "It is Monday morning and" + "<em> " + userName + "</em> " + "is getting ready for school. With the bus coming" + "<em> " + pronoun + "</em> " + "quickly" + "<em> " + verb1 + "</em> " + "a box of" + "<em> " + noun1 + "</em> " + "and poured" + "<em> " + noun2 + "</em> " + "over it. But that wasn't enough! Stomach" + "<em> " + verb2 + " " + userName + "</em> " + "decides that" +"<em> " + pronoun + "</em> " + "needs more to feed their" + "<em> " + adjective1 + "</em> " + "appetite. Quickly" + "<em> " + pronoun + "</em> " + "tosses a slice of" + "<em> " + noun3 + "</em> " + "onto the pan, it's" + "<em> " + adjective2 + "</em> " + "aroma wafting through the air." + "<em> " + userName + "</em> " + "quickly" + "<em> " + verb3 + "</em> " + "the" + "<em> " + noun3 + "</em> " + "in a" + "<em> " + noun4 + "</em> " + ", and then" + "<em> " + verb4 + "</em> " + "out the door to meet the bus.";
      
      myMsg.className = "show";

    //use the console.log to concatenate a message


    //prevent page from reloading
    return false;
}
      }
      
  
  function resetPage(){
      
    myMsg.innerHTML = "Hello";  
      
    userName.value="";
    pronoun.value="";
    noun1.value="";
    noun2.value="";
      noun3.value="";
      noun4.value="";
      verb1.value="";
      verb2.value="";
     verb3.value="";
     verb4.value="";
      adjective1.value="";
      adjective2.value="";
    
    return false;
  }
}