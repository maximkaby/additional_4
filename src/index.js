module.exports = function multiply(first, second) {

    let firstNum = [];
    let secondNum = [];
    first = first.toString();
    second = second.toString();

    function mult(first, number) {
        if(typeof number == "string")
            number = Number(number);

        if(number == 0)
            return '0';

        let excess = 0;
        let firstArr = first.split('');

        let i = 1;

        while(i <= firstArr.length){
            let val = Number(firstArr[firstArr.length - i]) * number + excess;
            firstArr[firstArr.length - i] = (val % 10).toString();
            excess = Math.floor(val/10);
            i++;
        }
        if(excess > 0)
            firstArr.unshift(excess.toString());
        //console.log(firstArr.join(''));
        return firstArr.join('');
    }
    
    function sum(first, second) {
        let excess = 0;
        let firstArr = first.split('');
        let secondArr = second.split('');
        let longNumber;
        let shortNumber;

        if(firstArr.length > secondArr.length){
            longNumber = firstArr;
            shortNumber = secondArr;
        }else{
            longNumber = secondArr;
            shortNumber = firstArr;
        }

        let i=1;

        while(i <= shortNumber.length){
            let sum = Number(shortNumber[shortNumber.length - i]) +
                Number(longNumber[longNumber.length - i]) + excess;
            longNumber[longNumber.length - i] = (sum % 10).toString();
            excess = Math.floor(sum / 10);
            i++;
        }

        if(longNumber.length == shortNumber.length &&
            excess > 0){
            longNumber.unshift(excess);
        }else{
            let sum = Number(longNumber[longNumber.length - i]) + excess;

            longNumber[longNumber.length - i] = sum.toString();
        }
        //console.log(longNumber.join(''));
        return longNumber.join('');
    }


    //sum('23103232', '997232323333');
    mult('525325325','10');
    function multBig(first, second){
        let excess = 0;
        let firstArr = first.split('');
        let secondArr = second.split('');
        let longNumber;
        let shortNumber;

        if(firstArr.length > secondArr.length){
            longNumber = firstArr;
            shortNumber = secondArr;
        }else{
            longNumber = secondArr;
            shortNumber = firstArr;
        }

        let res = '0';
        longNumber = longNumber.join('');
        for(let i = 1; i <= shortNumber.length; i++){
            let multiple = mult(longNumber, shortNumber[shortNumber.length - i]);
            let j = 1;
            let strnull = '';
            while(j < i){
                strnull += '0';
                j++;
            }

            res =  sum(res, multiple + strnull);
        }
        return res;
    }

    //return  multBig(first, second);
    //console.log(multBig('76095476904769456798433934759347589346587346578342658346285963489253465783', '329865843872563478658342756873375683268326587346582436583456'));
    // if('76095476904769456798433934759347589346587346578342658346285963489253465783' == first &&
    //     '329865843872563478658342756873375683268326587346582436583456' == second )
    //     console.log(multBig(first, second) ==
    //         multBig('76095476904769456798433934759347589346587346578342658346285963489253465783', '329865843872563478658342756873375683268326587346582436583456'));
    return multBig(first, second);
    //return '' + first*second;
}
