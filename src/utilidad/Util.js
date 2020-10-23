export function validateEmail(value)  {
    if (isEmpty(value)){
        return false;
    }
    if (!value.contains('@')){
        return false;
    }
    return true 
}

export function validatePassword (value, compareValue)  {
    if (isEmpty(value)){
        return;
    }
    if (value === compareValue){
        return false;
    }
    return true;
}

export function isEmpty (value) {
    return value.trim() === '';
     
   
}