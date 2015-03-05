/*  Dec <-> Binary
    Hex <-> Dec
    Hex <-> Bin
    */
function convert_bases(original_base, input_num, new_base){
    //var original_base = 2
    //var input_num = "10101"
    var convert_num = parseInt(input_num, original_base);
    //var new_base = 16;
    var converted_num = '';
    var rem;

    //loop through and convert num to new bse
    while(convert_num > 0){
        //get remainder of current number
        rem = convert_num % new_base;
        //integer division on current number
        convert_num = Math.floor(convert_num/new_base);
        //update converted num
        converted_num = mapping(rem) + converted_num;
    }

    //add appropriate prefix
    converted_num = prefix(new_base) + converted_num
    console.log(converted_num);

    reutrn converted_num;
}

function prefix(base){
    switch(base){
        case 16:
            return "0x";
        default:
            return "";
    }
}

function mapping(x){
    //if number is between 0-9, return it as string
    if(x >= 0 && x <= 9)
        return x.toString();
    //if numnber is > 10, return hex representation
    switch(x){
        case 10:
            return "A";
        case 11:
            return "B";
        case 12:
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15:
            return "F";
        default:
            return "ERROR";
    }
}


//get number in binary
var number = "01111111";
//get word size (32 or 64)
var word = 8;
var result = 0;
//if most sig bit is 1, make it negative
if(number.charAt(0) === '1')
    result -= Math.pow(2, word-1);
var i;
//current power offset
var curr_pow = word-2;
//starting with second character in string, loop through
//and if curr char is a 1, add to result
for(i = 1; i < word; i++){
    if(number.charAt(i) === "1"){
        //add 2^curr_pow to result
        result += Math.pow(2, curr_pow);
    }
    //decrement current power
    curr_pow--;
}

console.log(result);



/* 0101 = 5
1010 = 10

2s comp:
0101 = 5
1010 = -6

*/