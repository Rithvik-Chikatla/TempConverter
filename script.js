
function tempConverter(id, val) {
    // let c, f, k;
    val = parseFloat(val);
    if(id === 'inputc') {
        
        document.getElementById('inputf').value = ((val * 1.8) + 32).toFixed(2);
        document.getElementById('inputk').value = (val + 273.15).toFixed(2);
        // console.log("end")
    }
    else if(id === 'inputf')
    {
        inputc.value = ((val - 32)/1.8).toFixed(2);
        inputk.value = (((val - 32)/1.8) + 273.15).toFixed(2);
    }
    else if(id === 'inputk')
    {
        inputc.value = (val-273.15).toFixed(2);
        inputf.value = (((val-273.15)*1.8)+32).toFixed(2);
    }
    if(inputc.value === '' || inputf.value === '' || inputk.value === '') {
        inputc.value = ''
        inputf.value = ''
        inputk.value = ''

    }

}

function clearFn() {
    inputc.value = ''
    inputf.value = ''
    inputk.value = ''
}