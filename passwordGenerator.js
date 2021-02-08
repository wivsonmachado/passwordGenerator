function passwordGenerator(size = 8, charchoice = 1){

    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'

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

        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
    }

    let stringpass = ''
    let x = 1
    do{
        stringpass = stringpass + `${caract1()}`
        x++
    }while(x <= size)
    console.log(stringpass)

}
passwordGenerator(12, 1)
passwordGenerator(12, 2)
passwordGenerator(12, 3)

