function convertTemperature(){

    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if(!isNaN(celsiusInput.value)){

        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
    else if(!isNaN(fahrenheitInput.value)){
       
        const fahrenheitValue =  fahrenheitInput.value;
        const celsiusValue =  (fahrenheitValue - 32) * 5/9;
        
        
        celsiusInput.value = celsiusValue.toFixed(2);
    }
    
    else{
        alert("Please Enter a valid Number");
    }
}