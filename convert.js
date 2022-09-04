function reset(){
    document.getElementById("user-input").value = "";
    document.getElementById("result").value = "Conversion Result";
    document.getElementById("from").selectedIndex = 0;
    document.getElementById("to").selectedIndex = 0; 
}

function convert(){
    var con;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var input = document.getElementById("user-input").value;
    // Decimal to others
    if(from == "decimal" && to == "binary"){
        con = parseInt(input, 10).toString(2);
        document.getElementById("result").value = con;
    }
    else if(from == "decimal" && to == "octal"){
        con = parseInt(input, 10).toString(8);
        document.getElementById("result").value = con;
    }
    else if(from == "decimal" && to == "hexadecimal"){
        con = parseInt(input, 10).toString(16);
        document.getElementById("result").value = con;
    }
    // Binary to others
    else if(from == "binary" && to == "decimal"){
        con = parseInt(input, 2).toString(10);
        document.getElementById("result").value = con;
    }
    else if(from == "binary" && to == "octal"){
        con = parseInt(input, 2).toString(8);
        document.getElementById("result").value = con;
    }
    else if(from == "binary" && to == "hexadecimal"){
        con = parseInt(input, 2).toString(16);
        document.getElementById("result").value = con;
    }
    // Octal to others
    else if(from == "octal" && to == "decimal"){
        con = parseInt(input, 8).toString(10);
        document.getElementById("result").value = con;
    }
    else if(from == "octal" && to == "binary"){
        con = parseInt(input, 8).toString(2);
        document.getElementById("result").value = con;
    }
    else if(from == "octal" && to == "hexadecimal"){
        con = parseInt(input, 8).toString(16);
        document.getElementById("result").value = con;
    }
    // Hexadecimal to others
    else if(from == "hexadecimal" && to == "decimal"){
        con = parseInt(input, 16).toString(10);
        document.getElementById("result").value = con;
    }
    else if(from == "hexadecimal" && to == "binary"){
        con = parseInt(input, 16).toString(2);
        document.getElementById("result").value = con;
    }
    else if(from == "hexadecimal" && to == "octal"){
        con = parseInt(input, 16).toString(8);
        document.getElementById("result").value = con;
    }
    else {
        document.getElementById("result").value = "Error";
    }
    
}