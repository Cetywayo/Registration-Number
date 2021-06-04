function addRegistrations(existingReg){

    var arrReg =  existingReg || [];
    var letters =  /^[A-Z]+\s\d+/gi
    var newArr = []



    function enterRegistrationsNo(regNo){
        var numberPlate = regNo.trim()
         if (numberPlate.match(letters)){
        return numberPlate;
        }     
  
    }

    function addRegOnArr(regArr){

        var regNum01 = regArr;
        if(enterRegistrationsNo(regArr)){
            if(!arrReg.includes(regNum01)){
                arrReg.push(regNum01);
            }
        }
     
     
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
        selectTown
     } 
}
