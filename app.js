function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val*2) 
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(even){
       if(even%2 === 0){
        newArr.push(even);
       };
    })
    return newArr;
}

function showFirstAndLast(str){
    let newStr = [];
    str.forEach(function(first){
        newStr.push(first[0] + first[first.length-1]);
        
    });
    return newStr;
}


function addKeyAndValue(arr, key, value){
    arr.forEach(function(obj){
        obj[key] = value;
    });
    return arr;
}

function vowelCount(str){
   let letters = str.split('');
   let obj = {};
   let vowels = 'aeiou';

   letters.forEach(function(amount){
    let lowerCaseLetters = amount.toLowerCase()
    if(vowels.indexOf(lowerCaseLetters) !== -1){
        obj[lowerCaseLetters]++;
    } else {
        obj[lowerCaseLetters] = 1;
    }
   });
   return obj;

}


//MAP

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val *2;
    });

}


function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val*i;
    });

}

function extractKey(arrOfObj, key){
    return arrOfObj.map(function(arr){
        return arr[key];
    });
}


function extractFullName(arr){
    return arr.map(function(fAl){
       return fAl.first + ' ' + fAl.last;
    });
}

//Filter

function filterByValue(arr){
    return arr.filter(function(val){
        return val.isCatOwner;
    });
}

function find(arr, val){
    return arr.filter(function(num){
        if(val === num){
            return num;
        }
    });

}


function findInObj(arr, key, value){
    return arr.filter(function(fir){
        return fir[key] === value})[0];
}

function removeVowels(str){
    let vowel = 'aeiou'
    return str.toLowerCase().split('').filter(function(val){
        return vowel.indexOf(val) === -1;
    }).join('');

}

function doubleOddNumbers(arr){
    let odd = arr.filter(function(oddVal){
        return oddVal % 2 === 1;
    });
    return odd.map(function(val){
        return val * 2;
    });

    
}