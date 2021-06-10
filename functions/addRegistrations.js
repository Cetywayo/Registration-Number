function addRegistrations(existingReg) {

    var arrReg = existingReg || [];
    var letters = /^[A-Za-z]{2}\s\d{3}\-\d{3}$/
    var letters1 = /^[A-Za-z]{2}\s\d{6}$/
    var letters2 = /^[A-Za-z]{2}\s\d{3}\s\d{3}$/
    var newArr = []
    var duplicate = "registration is already existing";

    function enterRegistrationsNo(regNo) {
        var numberPlate = regNo.trim()

        if (numberPlate.match(letters) || numberPlate.match(letters1) || numberPlate.match(letters2)) {

            return numberPlate.toUpperCase();
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

    function getRegistrations() {
        return arrReg
    }

    function selectTown(town) {
        newArr = []

        if (town === "CY") {

            for (var i = 0; i < arrReg.length; i++) {
                if (arrReg[i].startsWith('CY')) {
                    newArr.push(arrReg[i])
                }
            }
            return newArr

        }
        else if (town === "CA") {

            for (var i = 0; i < arrReg.length; i++) {
                if (arrReg[i].startsWith('CA')) {
                    newArr.push(arrReg[i])
                }


            }
            return newArr

        }

        else if (town === "CJ") {
            for (var i = 0; i < arrReg.length; i++) {
                if (arrReg[i].startsWith('CJ')) {

                    newArr.push(arrReg[i])
                }
            }
            return newArr
        }

        else if (town === "all") {
            return arrReg
        }


        else {
            return "no registration"
        }
    }

    return {
        enterRegistrationsNo,
        addRegOnArr,
        getRegistrations,
        selectTown,
        getDuplicate
    }
}
