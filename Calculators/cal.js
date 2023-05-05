// function to display value of Simple calculator buttons
function display(val) {
    document.getElementById("calResults").value += val
}

// function to solve equation in Simple calculator
function solve() {
    calResults.value = eval(calResults.value)
}



/* function to display value of Scientific calculator
buttons */
function sciDisplay(val) {
    document.getElementById("sciCalResults").value += val
}

// function to solve equation in Scientific calculator
function sciSolve() {
    sciCalResults.value = eval(sciCalResults.value)
}

/* function to delete 1 character from the Science 
Calculator; a backspace button */
function backspace() {
    sciCalResults.value = sciCalResults.value.substr(0, sciCalResults.value.length-1);
}


// adds the Trig. sin function to science calculator
function sin() {
    sciCalResults.value = Math.sin(sciCalResults.value);
}

// adds the Trig. cos function to science calculator
function cos() {
    sciCalResults.value = Math.cos(sciCalResults.value);
}

// adds the Trig. tan function to science calculator
function tan() {
    sciCalResults.value = Math.tan(sciCalResults.value);
}


// adds the PI function to science calculator
function pi() {
    sciCalResults.value += Math.PI;
}


/* function that square roots the current numbers in science 
calculator */
function sqrt() {
    sciCalResults.value = Math.sqrt(sciCalResults.value, 2);
}

// squares the current numbers in science calculator by 2
function squared() {
    sciCalResults.value = Math.pow(sciCalResults.value, 2);
}

/* function finds the factorial of a positive integer; finds 
the factorial of the numbered entered in science calculator */
function fact() {
    var i, num, f;

    f = 1;
    num = sciCalResults.value;

    for(i=1; i<=num; i++) {
        f = f*i;
    }

    i = i-1;

    sciCalResults.value = f;
}


// adds the log function to science calculator
function log() {
    sciCalResults.value = Math.log(sciCalResults.value);
}

// Adds the log base 2 function to science calculator 
function logBase2() {
    sciCalResults.value = Math.log2(sciCalResults.value);
}

// Adds the log base 10 function to science calculator 
function logBase10() {
    sciCalResults.value = Math.log10(sciCalResults.value);
}


/* Function takes 10 to the power of what the user enters into
the science calcualtor */
function tenPowers() {
    sciCalResults.value = Math.pow(10, sciCalResults.value);
}

/* function returns the exponent of what's entered into the
science calculator */
function exponent() {
    sciCalResults.value = Math.exp(sciCalResults.value);
}

// function finds the absolute of the entered number
function absolute() {
    sciCalResults.value = Math.abs(sciCalResults.value);
}