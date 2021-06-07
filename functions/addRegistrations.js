function addRegistrations(existingReg){

    var arrReg =  existingReg || [];
    var letters =   /^[A-Z]{2}\s\d{3}\-\d{3}$/    // CA 123 123 CF 123123 CK 123-123
    var letters1 =    /^[A-Z]{2}\s\d{6}$/ 
    var letters2 =   /^[A-Z]{2}\s\d{3}\s\d{3}$/    //^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$
    var newArr = []
    var duplicate = "registration is already existing";



    function enterRegistrationsNo(regNo){
        var numberPlate = regNo.trim()
         if (numberPlate.match(letters) || numberPlate.match(letters1) || numberPlate.match(letters2)  ){
            
        return numberPlate;
        }  
        
        
  
    }

    function addRegOnArr(regArr){

        var regNum01 = regArr;
        
            if(!arrReg.includes(regNum01)){
                arrReg.push(regNum01);
                
            // } else {
            //     duplicate = "registration is already existing"
                
            }
        }
     
     
    

    function getDuplicate() {
        return duplicate;
    }

    function getRegistrations(){
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
