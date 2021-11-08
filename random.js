//big jump function     
function jump(x,y){
    var jump = document.getElementById('jump');
    jump.style.left = x + 'px';
    jump.style.top = y + 'px';
}


// .reduce() example
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(a, b) {

    return a + b;

}   , 0);

//absolute value 
function abs(x){
    if(x < 0){
        return -x;
    }
    return x;
}

//length of an array  

//.abs() example
var numbers = [-1, -2, -3, -4, -5];
var absSum = numbers.reduce(function(a, b) {
    
        return abs(a) + abs(b);
    
    }
    , 0);

    // check if two strings are anagrams
    function anagram(str1, str2){
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    }

    // length of object
    function length(obj){
        var count = 0;
        for(var key in obj){
            count++;
        }
        return count;
    }