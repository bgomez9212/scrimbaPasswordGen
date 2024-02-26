const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?", "/"];
const charsWithoutNums = characters.filter(function(character){
    return isNaN(character)
})
const charsWithoutSyms = characters.slice(0, characters.indexOf("9") + 1)
const charsOnlyLetters = characters.slice(0, characters.indexOf('0'))

const genBtn = document.getElementById('pass-maker')
const numbersOption = document.getElementById('numbers-option')
const symbolsOption = document.getElementById('symbols-option')

let passwordArr = []


function createPassword(){
    const desiredLength = parseInt(document.getElementById('pw-length').value)
    let pass = ''
    for (let i = 0; i < desiredLength; i++){
        if (numbersOption.checked && symbolsOption.checked){
            let randomNum = Math.floor(Math.random() * charsOnlyLetters.length)
            pass += charsOnlyLetters[randomNum]
        } else if (numbersOption.checked){
            let randomNum = Math.floor(Math.random() * charsWithoutNums.length)
            pass += charsWithoutNums[randomNum]
        } else if (symbolsOption.checked){
            let randomNum = Math.floor(Math.random() * charsWithoutSyms.length)
            pass += charsWithoutSyms[randomNum]
        } else {
            let randomNum = Math.floor(Math.random() * characters.length)
            pass += characters[randomNum]
        }
    }
    return pass
}

function createMultiplePasswords(){
    passwordArr = []
    const numberOfPasswords = parseInt(document.getElementById("number-of-pw").value)
    for (let i = 0; i < numberOfPasswords; i++){
        passwordArr.push(createPassword())
    }
    return passwordArr
}

function renderPasswords(){
    let passwords = createMultiplePasswords()
    let passwordHtml = ``
    passwords.forEach(function(password){
        passwordHtml += `<h4>${password}</h4>`
    })
    return passwordHtml
}

genBtn.addEventListener('click', function(){
    document.getElementById('password-container').innerHTML = renderPasswords()
})