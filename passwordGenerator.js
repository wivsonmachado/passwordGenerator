function copyPass(){
    var senha = document.getElementById("result").innerHTML
    navigator.clipboard.writeText(senha)
    return alert("Senha copiada para sua área de tranferência")
}



function sizeNumber(){
    var saida = document.getElementById('saida')
    var size = document.getElementById('sliderRange').value
    saida.innerHTML = size
    return size
}

function checkNumber(){      
      let checkLow = document.getElementById("lower")
      let checkUpp = document.getElementById("upper")
      let checkNum = document.getElementById("numeros")
      let checkSim = document.getElementById("simbolos")
      let typeN
        if(checkLow.checked && !checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 1
        }else if(!checkLow.checked && checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 2
        }else if(!checkLow.checked && !checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 3
        }else if(!checkLow.checked && !checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 4
        }else if(checkLow.checked && checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 5
        }else if(checkLow.checked && !checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 6
        }else if(checkLow.checked && !checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 7
        }else if(!checkLow.checked && checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 8
        }else if(!checkLow.checked && checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 9
        }else if(!checkLow.checked && !checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 10
        }else if(checkLow.checked && !checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 11
        }else if(!checkLow.checked && checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 12
        }else if(checkLow.checked && checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 13
        }else if(checkLow.checked && checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 14
        }else if(checkLow.checked && checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 15
        }else{
            alert("Escolha pelo menos 1 opção para gerar uma senha!")
        }
}
function passwordGenerator(size = 8, charchoice){

    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let stringpass = ''
        let lower = 'abcdefghijklmnopqrstuvwxyz'
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'
        let x = 1
        let m1
        let m2
        let m3
        let m4
        let m5
        let i = 0
//Params to choice chars
        switch(charchoice){
            case 1:
                mixletters = lower
                break
            case 2:
                mixletters = upper
                break
            case 3:
                mixletters = numbers
                break
            case 4:
                mixletters = simbols
                break
            case 5:
                mixletters = lower + upper
                break
            case 6:
                mixletters = lower + numbers
                break
            case 7:
                mixletters = lower + simbols
                break
            case 8:
                mixletters = upper + numbers
                break
            case 9:
                mixletters = upper + simbols
                break
            case 10:
                mixletters = numbers + simbols
                break
            case 11:
                mixletters = lower + numbers + simbols
                break
            case 12:
                mixletters = upper + numbers + simbols
                 break
            case 13:
                mixletters = lower + upper + numbers
                break
            case 14:
                mixletters = lower + upper + simbols
                break
            case 15:
                mixletters = upper + lower + numbers + simbols
                break
        }

//Function to ramdomize and get chars on string
        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
        }
//Conditional for create password based on size and chars choices
if(charchoice == 1 || charchoice == 2 || charchoice == 3 || charchoice == 4){
    while(x <= size){
        stringpass = stringpass + `${caract1()}` 
        x++
    }
}
    switch(charchoice){
        case 5: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos uma letra maiúscula
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}`
                    x++
                }
                while(i <= size){
                m1 = stringpass.charAt(i)
                m2 = lower.indexOf(m1)
                if(m2 !== -1){
                    break
                }
                i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
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
            break
        case 6: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m4 = numbers.indexOf(m1)
                        if(m4 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m2 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m4 == -1)
            break
        case 7: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m2 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m5 == -1)
            break
        case 8: //Condicional para verificar se há pelo menos uma letra maiúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m4 = numbers.indexOf(m1)
                        if(m4 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m3 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m4 == -1)
            break
        case 9: //Condicional para verificar se há pelo menos uma letra maiúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m3 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m5 == -1)
            break
        case 10: //Condicional para verificar se há pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m4 == -1 || m5 == -1)
            break
        case 11: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m4 == -1 || m5 == -1)
            break
        case 12: //Condicional para verificar se há pelo menos uma letra maiúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m3 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m4 == -1 || m5 == -1)
            break
        case 13: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1)
            break
        case 14: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m5 == -1)
            break
        case 15: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }
                while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1 || m5 == -1)
            break

    }

document.getElementById("result").innerHTML = stringpass
//return stringpass
//console.log(stringpass)
}