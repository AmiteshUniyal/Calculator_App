let output = document.getElementById('inp');
let current_value ='';

function insert(value){
    current_value += value;
    output.value = current_value;
}

function clearInput() {
    current_value = '';
    output.value = '';
}

function hello() {
    current_value = current_value.slice(0, -1);
    output.value = current_value;
}

function result() {
    try {
        current_value = Math.round(eval(current_value) * 100000) / 100000;
        output.value = current_value;
    }
    catch (error) {
        output.value = 'Math Error';
    }
}