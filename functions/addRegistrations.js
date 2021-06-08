function addRegistrations(existingReg){

    var arrReg =  existingReg || [];
    var letters =   /^[A-Z]{2}\s\d{3}\-\d{3}$/    // CA 123 123 CF 123123 CK 123-123
    var letters1 =    /^[A-Z]{2}\s\d{6}$/ 
    var letters2 =   /^[A-Z]{2}\s\d{3}\s\d{3}$/    //^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$
    var newArr = []
    var duplicate = "registration is already existing";

///var numberPlate= ""

    function enterRegistrationsNo(regNo){
        var numberPlate = regNo.trim()
         if (numberPlate.match(letters) || numberPlate.match(letters1) || numberPlate.match(letters2)  ){
            
        return numberPlate;
        }     
  
    }


    function addRegOnArr(addArrs) {
       var numberPlate = addArrs
         
         if (numberPlate) {
             
             if (!arrReg.includes(numberPlate) && numberPlate.trim().match(letters) || numberPlate.match(letters1) || numberPlate.match(letters2)) {
 console.log('fdfdfdfdfdfdfdfdfdfdfdffd')
                arrReg.push(numberPlate);  
 
             }    
         }
     }
     
    function getDuplicate() {
        return duplicate;
    }

    function getRegistrations(){
        console.log(arrReg + "dsdsdsdsds    ")
        return arrReg
    }

    function selectTown(town){
        newArr=[]
       
        if(town==="CY"){
           
        for(var i =0; i<arrReg.length; i++){
            if (arrReg[i].startsWith('CY')) {
                newArr.push(arrReg[i])
            }
        }
          return newArr

        }


       else if(town==="CA"){
           
            for(var i =0; i<arrReg.length; i++){
                if (arrReg[i].startsWith('CA')) {
                    newArr.push(arrReg[i])
                }
               
    
            }
              return newArr
    
            }

           else if(town==="CJ"){
                for(var i =0; i<arrReg.length; i++){
                    if (arrReg[i].startsWith('CJ')) {
                       
                        newArr.push(arrReg[i])
                    }
                }
                return newArr        
            }

            else if(town==="all"){ 
                return arrReg
            }  

       
        else {
            return "no registration"
        }      
    }

  


    return{
        enterRegistrationsNo,
        addRegOnArr,
        getRegistrations,
        selectTown,
        getDuplicate
     } 
}
