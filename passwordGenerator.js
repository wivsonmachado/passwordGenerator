function sizeNumber(){
    var saida = document.getElementById('saida')
    var size = document.getElementById('sliderRange').value
    saida.innerHTML = size
    return size
}

function checkNumber(){
      let checkNum = document.getElementById("numeros")
      let checkSim = document.getElementById("simbolos")
      let saidacheck = document.getElementById("checked")
      let typeN
        if(checkNum.checked && !checkSim.checked){
            saidacheck.innerHTML = 2
            return typeN = 2
        }else if(checkNum.checked && checkSim.checked){
            saidacheck.innerHTML = 3
            return typeN = 3
        }else if(!checkNum.checked && checkSim.checked){
            saidacheck.innerHTML = 4
            return typeN = 4
        }else{
            saidacheck.innerHTML = ''
            return typeN = 1
        }
}
function passwordGenerator(size = 8, charchoice = 1){

    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let stringpass = ''
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'
        let x = 1
        let m1
        let m2
        let m3
        let i = 0
//Params to choice chars
        switch(charchoice){
            case 1:
                mixletters = letters
                break
            case 2:
                mixletters = letters + numbers
                break
            case 3:
                mixletters = letters + numbers + simbols
                break
            case 4:
                mixletters = letters + simbols
        }

//Function to ramdomize and get chars on string
        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
        }
//Conditional for create password based on size and chars choices
if(charchoice == 1){
    while(x <= size){
        stringpass = stringpass + `${caract1()}`
        x++
    }
}else if(charchoice == 2){
    do{
        while(x <= size){
            stringpass = stringpass + `${caract1()}`
            x++
        }
        while(i <= stringpass.length){
        m1 = stringpass.charAt(i)
        m2 = numbers.indexOf(m1)
        if(m2 !== -1){
            break
        }
        i++
        }if(m1 == '' || m2 == -1){
            x = 1
            i = 0
            stringpass = ''
        }
    }while(m1 == '' || m2 == -1)
}else if(charchoice == 3){
    do{
        while(x <= size){
            stringpass = stringpass + `${caract1()}`
            x++
        }
        while(i <= stringpass.length){
        m1 = stringpass.charAt(i)
        m2 = numbers.indexOf(m1)
        if(m2 !== -1){
            break
        }
        i++
        }while(i <= stringpass.length){
            m1 = stringpass.charAt(i)
            m3 = simbols.indexOf(m1)
            if(m3 !== -1){
                break
            }
            i++
            }if(m1 == '' || m2 == -1 || m3 == -1){
            x = 1
            i = 0
            stringpass = ''
        }
    }while(m1 == '' || m2 == -1 || m3 == -1)
}else if(charchoice == 4){
    do{
        while(x <= size){
            stringpass = stringpass + `${caract1()}`
            x++
        }
        while(i <= stringpass.length){
        m1 = stringpass.charAt(i)
        m3 = simbols.indexOf(m1)
        if(m3 !== -1){
            break
        }
        i++
        }if(m1 == '' || m3 == -1){
            x = 1
            i = 0
            stringpass = ''
        }
    }while(m1 == '' || m3 == -1)
}
document.getElementById("result").innerHTML = stringpass
//return stringpass
//console.log(stringpass)
}