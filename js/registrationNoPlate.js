var regElem = document.querySelector('.regNum') //refence
var addButtonElement = document.querySelector('.add')
var showAllButtonElement = document.querySelector('.show-all')
//var showAddedRegElement = document.querySelector('.recentReg')
var showAllRegistrationsElement = document.getElementById('countReg')
var resetButtonElem = document.querySelector('.reset')
// var checkedRadioElement = document.querySelector("input[name='location']:checked")
var showElementButton = document.querySelector('.show')
var showRegForSelected = document.getElementById('showSelected')


if(localStorage['reg']){
    var storeRegistrationNimbers = JSON.parse(localStorage.getItem('reg'));
}

var regInstance = addRegistrations(storeRegistrationNimbers);
//let counter =regInstance.addRegOnArr()

var unorderd = document.getElementById('list');
    
function addReg(){



  //if(regElem.value)
   
  var validReg =  regInstance.enterRegistrationsNo(regElem.value);
   // showAddedRegElement.innerHTML= regElem.value;
     let element = document.createElement("li")
     var reglist = document.createTextNode(validReg)
     element.appendChild(reglist)
     unorderd.appendChild(element)
    // console.log(unorderd);
    // document.regNum.appendChild(ul)

    regInstance.addRegOnArr(regElem.value)
   localStorage.setItem("reg", JSON.stringify(regInstance.getRegistrations()));
    

   regElem.value = '';
  
}

   function showSelectedRegTown(){

    var checkedRadioBtn = document.querySelector("input[name='location']:checked");
       //var counter=0;
       var arrReg= regInstance.getRegistrations();
       var selectedregTown = [];
      //  console.log(arrReg)
     
        if(checkedRadioBtn.value === "bellville") {
            for(var i =0; i<=arrReg.length;i++) {
              if(arrReg[i].startsWith('CY')){
                // console.log(regNew[i]);
                let bellivelleReg = document.createElement("li")
                var bellReg= document.createTextNode(arrReg[i])
                 bellivelleReg.appendChild(bellReg)
                 showRegForSelected.appendChild(bellivelleReg)
                 checkedRadioBtn.checked = false;


                  //selectedregTown.push(regNew[i])
                 // showRegForSelected.innerHTML = selectedregTown;

              }
              // console.log(arrReg) ;
            }      
        }

       else if(checkedRadioBtn.value === "capeTown") {
            for(var i =0; i<=arrReg.length;i++) {
              if(arrReg[i].startsWith('CA')){
                let capeReg = document.createElement("li")
                var capetownReg= document.createTextNode(arrReg[i])
                 capeReg.appendChild(capetownReg)
                 showRegForSelected.appendChild(capeReg) 
                 checkedRadioBtn.checked = false;             
              }
              // console.log(arrReg) ;
            }
       }

       else if(checkedRadioBtn.value === "paarl") {
        for(var i =0; i<=arrReg.length;i++) {
          if(arrReg[i].startsWith('CJ')){
            let paarlReg = document.createElement("li")
                var paar= document.createTextNode(arrReg[i])
                 paarlReg.appendChild(paar)
                 showRegForSelected.appendChild(paarlReg)  
                 checkedRadioBtn.checked = false;
          }
          // console.log(arrReg) ;
          //showRegForSelected.innerHTML = arrReg;
        }
   }

   
      
   else {
       "There's no registration"
      }
      
      
   }

   function showAll(){
    var showAllTownArrs = regInstance.getRegistrations()
   for(var i=0; i<=showAllTownArrs.length; i++){
   console.log(showAllTownArrs[i]);
   let allArrShow = document.createElement("li")
   var allTownArrs = document.createTextNode(showAllTownArrs[i])
   allArrShow.appendChild(allTownArrs)
   showAllRegistrationsElement.appendChild(allArrShow);
   }
 }

 function resetStorage(){
  //localStorage.clear()
  regInstance.getRegistrations().clear()
  //countRegistrationElement.clear()
 // Location.reload()

}
  
 
   addButtonElement.addEventListener('click', addReg)
   showAllButtonElement.addEventListener('click', showAll)
   resetButtonElem.addEventListener('click',resetStorage )
   showElementButton.addEventListener('click',showSelectedRegTown )