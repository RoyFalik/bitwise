/*  Dec <-> Binary
    Hex <-> Dec
    Hex <-> Bin
    */
function convert_bases(original_base, input_num, new_base){
    var original_base_int = get_base(original_base);
    var convert_num = parseInt(input_num, original_base_int);
    var new_base_int = get_base(new_base);
    //if converting negative to hex first go to two's complement then to hex
    if (convert_num < 0 && new_base == "hex"){
        var tc = twos_complement(input_num, 32);
        return convert_bases("tc", tc, "hex");
    }
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
    if (base.valueOf() == "dec")
        return 10;
    else if (base.valueOf() == "bin")
        return 2;
    else if (base.valueOf() == "hex")
        return 16;
    else
        return 2;
}


//edit so any base can be input
function twos_complement(number, word){
    //max pos for word size k = 2^(k-1)-1
    //neg lim = -1*2^k
    var MAX = Math.pow(2, word-1) -1;
    var MIN = (-1) * Math.pow(2, word);
    var result = "";
    var num = parseInt(number, 10);


    if(num <= MAX && num >= MIN){
        //var abs_num = Math.abs(num);
        var i;
        for(i = 0; i < word; i++){
            result = (num&1) + result;
            num >>= 1;
        }
    }
    else{
        alert("Please enter a " + word + "-sized number");
        return;
    }
    return result;
}