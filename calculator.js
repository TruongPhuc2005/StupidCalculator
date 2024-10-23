function display(value)
{
    document.getElementById("display").value += value;
}

function clearDisplay()
{
    document.getElementById("display").value = '';
}

function displayResult()
{
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }
    catch (error)
    {
        display.value = 'Error';
    }
}
