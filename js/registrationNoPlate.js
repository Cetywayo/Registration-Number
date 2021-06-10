var regElem = document.querySelector('.regNum') //refence
var addButtonElement = document.querySelector('.add')
var showAllButtonElement = document.querySelector('.show-all')
var resetButtonElem = document.querySelector('.reset')
var showElementButton = document.querySelector('.show')
var unorderd = document.getElementById('list');
var displayError = document.querySelector('.erroMsg')

var storeRegistrationNimbers = []

if (localStorage['reg']) {
  storeRegistrationNimbers = JSON.parse(localStorage.getItem('reg'));
}

var regInstance = addRegistrations(storeRegistrationNimbers);
function addReg() {

  var newReg = regInstance.enterRegistrationsNo(regElem.value)

  if (!storeRegistrationNimbers.includes(newReg)) {


    if (newReg) {
      regInstance.addRegOnArr(newReg)

      let element = document.createElement("li")
      var reglist = document.createTextNode(newReg)
      element.appendChild(reglist)
      unorderd.append(element)
    }
    else {
      displayError.innerHTML = "Please enter vallid registration"
      setTimeout(function () {
        displayError.innerHTML = displayError.textContent = '';
      }, 1900)
    }


  }
  else if (newReg === regInstance.enterRegistrationsNo(regElem.value)) {
    displayError.innerHTML = "registration is already existing"
    setTimeout(function () {
      displayError.innerHTML = displayError.textContent = '';
    }, 1900)
  }

  else {
    displayError.innerHTML = "invalid registration"
    setTimeout(function () {
      displayError.innerHTML = displayError.textContent = '';
    }, 1900)
  }

  localStorage.setItem("reg", JSON.stringify(regInstance.getRegistrations()));
  regElem.value = '';
}

function showSelectedRegTown() {
  var checkedRadioBtn = document.querySelector("input[name='location']:checked");
  var showArr = regInstance.selectTown(checkedRadioBtn.value);
  while (unorderd.firstChild) {
    unorderd.removeChild(unorderd.firstChild)
  }

  if (showArr.length == 0) {
    displayError.innerHTML = "No registration Numbers"

    setTimeout(function () {
      displayError.innerHTML = displayError.textContent = '';
    }, 2000)
  }
  else {

    for (var i = 0; i < showArr.length; i++) {
      let displaySelectedArr = document.createElement("li")
      var displayArr = document.createTextNode(showArr[i])
      displaySelectedArr.appendChild(displayArr)
      unorderd.append(displaySelectedArr)
    }
  }
  console.log(regInstance.selectTown(checkedRadioBtn.value))
  checkedRadioBtn.checked = false;

}

window.onload = () => {
  if (localStorage['reg']) {
    var storeRegistrationNimbers = JSON.parse(localStorage.getItem('reg'));


    for (var i = 0; i < storeRegistrationNimbers.length; i++) {

      let displaySelectedArr = document.createElement("li")
      var displayArr = document.createTextNode(storeRegistrationNimbers[i])
      displaySelectedArr.appendChild(displayArr)
      unorderd.append(displaySelectedArr)
    }
  }
}

function resetStorage() {
  localStorage.clear()
  location.reload()

}
addButtonElement.addEventListener('click', addReg)
resetButtonElem.addEventListener('click', resetStorage)
showElementButton.addEventListener('click', showSelectedRegTown)
