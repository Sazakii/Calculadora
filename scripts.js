function insert(val){
    var v = document.getElementById('res')
    v.value += val
}

function resolve(){
    var num1 = document.getElementById('res').value
    var num2 = eval(num1)

    document.getElementById('res').value = num2 
}

function Clear(){
    var inp = document.getElementById('res')
    inp.value = ''
}

function apagar(){
    var res = document.getElementById('res')
    res.value = res.value.slice(0, -1)
}