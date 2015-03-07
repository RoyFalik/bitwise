/*  Dec <-> Binary
    Hex <-> Dec
    Hex <-> Bin
    */
function convert_bases(original_base, input_num, new_base){
    var original_base_int = get_base(original_base);
    var convert_num = parseInt(input_num, original_base_int);
    var new_base_int = get_base(new_base);
    converted_num = prefix(new_base_int) + convert_num.toString(new_base_int);
    return converted_num;
}

function prefix(base){
    switch(base){
        case 16:
            return "0x";
        default:
            return "";
    }
}

function get_base(base){
    switch(base){
        case "bin":
            return 2;
        case "hex":
            return 16;
        case "dec":
            return 10;
        default:
            return 0;
    }
}

function twos_complement(number, word){
    //get number in binary
    //var number = "01111111";
    //get word size (32 or 64)
    //var word = 8;
    var result = 0;
    //if most sig bit is 1, make it negative
    if(number.charAt(0) === '1')
        result -= Math.pow(2, word - 1);
    var i;
    //current power offset
    var curr_pow = word - 2;
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
    return result;
}