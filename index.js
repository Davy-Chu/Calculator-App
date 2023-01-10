function set(op) {
    document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display");
    let Exp1 = Exp.value;
    for(let i in Exp1){
        if(Exp1[i] === 'x'){
            Exp1[i] = '*';
        }
        else if(Exp1[i] === '÷'){
            Exp1[i] = '/';
            console.log(Exp1[i]);
        }
    	
	}
    let result = eval(Exp1);
    Exp.value = result;
}