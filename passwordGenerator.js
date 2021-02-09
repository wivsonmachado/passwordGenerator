function passwordGenerator(size = 8, charchoice = 1){

    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let stringpass = ''
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'

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
        }

//Function to ramdomize and get chars on string
        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
    }

//Loop do while to contruction password based on size of chars
    let x = 1
    do{        
        stringpass = stringpass + `${caract1()}`
        x++
    }while(x <= size)

//Loop for to read password constructed
    let m1 = ''
    for(i = 0; i <= 12; i++){        
        m1 = stringpass.charAt(i)
        //console.log(`${m1} ${mixletters.indexOf(m1) == -1}`)
    }

//Conditional to do right password based on chars choices
if(charchoice == 1){
    while(letters.indexOf(m1) == -1){
        do{
            stringpass = ''
            stringpass = stringpass + `${caract1()}`
            x++
        }while(x <= size)
    }
    console.log(stringpass)
}else if(charchoice == 2){
    while(numbers.indexOf(m1) == -1){
        do{
            stringpass = ''
            stringpass = stringpass + `${caract1()}`
            x++
        }while(x <= size)
    }
    console.log(stringpass)
}else if(charchoice == 3){
    while(simbols.indexOf(m1) == -1 && numbers.indexOf(m1) == -1){
        do{
            stringpass = ''
            stringpass = stringpass + `${caract1()}`
            x++
        }while(x <= size)
    }
    console.log(stringpass)
}

}

passwordGenerator(12, 1)
passwordGenerator(12, 2)
passwordGenerator(12, 3)