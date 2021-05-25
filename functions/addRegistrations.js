function addRegistrations(existingReg){

    var arrReg =  existingReg || [];
    var letters =  /[A-Z]+\s\d+/gi



    function enterRegistrationsNo(regNo){
        var numberPlate = regNo.trim()
         if (numberPlate.match(letters)){
        return numberPlate;
        }

       else {

        return("invalid registration");
        }     
  
    }

    function addRegOnArr(regArr){

        var regNum01 = regArr;
        if(!arrReg.includes(regNum01)){
            arrReg.push(regNum01);
        }
    }

    function getRegistrations(){
        return arrReg
    }

  


    return{
        enterRegistrationsNo,
        addRegOnArr,
        getRegistrations
     } 
}