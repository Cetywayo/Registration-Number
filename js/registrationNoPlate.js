var regElem = document.querySelector('.regNum') //refence
var addButtonElement = document.querySelector('.add')
var showAllButtonElement = document.querySelector('.show-all')
var resetButtonElem = document.querySelector('.reset')
var showElementButton = document.querySelector('.show')
var unorderd = document.getElementById('list');
var displayError = document.querySelector('.erroMsg')


if(localStorage['reg']){
    var storeRegistrationNimbers = JSON.parse(localStorage.getItem('reg'));
}

var regInstance = addRegistrations(storeRegistrationNimbers);
//let counter =regInstance.addRegOnArr()

// function appendReg() {

// }


    
function addReg(){



  //if(regElem.value)
  regInstance.addRegOnArr(regElem.value)
   var regies =  regInstance.getRegistrations()
   if(regInstance.enterRegistrationsNo(regElem.value)){
     if (regInstance.addRegOnArr(regElem.value)) {}
    let element = document.createElement("li")
    var reglist = document.createTextNode(regInstance.enterRegistrationsNo(regElem.value))
    element.appendChild(reglist)
    unorderd.append(element)
    
      
  localStorage.setItem("reg", JSON.stringify(regInstance.getRegistrations()));
   

 

  }
  else if(regInstance.enterRegistrationsNo(regElem.value).includes){
    displayError.innerHTML= "registration is already existing"
    setTimeout(function(){
      displayError.innerHTML =displayError.textContent ='' ;
    }, 1900)
  }
  
  else {
    displayError.innerHTML= "invalid registration"
    setTimeout(function(){
      displayError.innerHTML =displayError.textContent ='' ;
    }, 1900)
}
regElem.value = '';

   
}

   function showSelectedRegTown(){
    var checkedRadioBtn = document.querySelector("input[name='location']:checked");
    var showArr = regInstance.selectTown(checkedRadioBtn.value);
    while(unorderd.firstChild){
      unorderd.removeChild(unorderd.firstChild)
    }

    if(showArr.length == 0)  {
      displayError.innerHTML= "No registrations"
     
      setTimeout(function(){
        displayError.innerHTML =displayError.textContent ='' ;
      }, 2000)
    }
    else{


    
    console.log(showArr)
    for (var i=0; i<showArr.length;i++){
    let displaySelectedArr = document.createElement("li")
    var displayArr =document.createTextNode(showArr[i]) 
    displaySelectedArr.appendChild(displayArr)
    unorderd.append(displaySelectedArr)
    }
  }
  
    
  
    console.log(regInstance.selectTown(checkedRadioBtn.value))

   
    checkedRadioBtn.checked = false;

 }

 window.onload = () => {
   
  for (var i=0; i<storeRegistrationNimbers.length;i++){

    let displaySelectedArr = document.createElement("li")
    var displayArr =document.createTextNode(storeRegistrationNimbers[i]) 
    displaySelectedArr.appendChild(displayArr)
    unorderd.append(displaySelectedArr)
    }

};

 function resetStorage(){
  localStorage.clear()
  location.reload()

}
   addButtonElement.addEventListener('click', addReg)
   resetButtonElem.addEventListener('click',resetStorage )
   showElementButton.addEventListener('click',showSelectedRegTown )
