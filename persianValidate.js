/**
 * validate user email
 * @param {array} array - user email to validate
 * @returns {boolean} - returns true if input data is a valid email
 */
function validateArray(array) {
    return Array.isArray(array);
}

/**
 * validate email
 * @param {string} email - email to validate
 * @returns {boolean} -returns true if the input data is valid
 */
function validateEmail(email){
    const regex = /^[\w-\.]+@([\w]+\.)[\w]{2,4}$/; 
    return regex.test(email)
}
/**
 * validate image file extentions
 * @param {string} file_name - the file name 
 * @returns {boolean} - returns true if input data is valid
 */
function validImageextention(file_name){
    const validextentions = ['png'];
    const fileExtenstion = file_name.split('.').pop().toLowerCase(); 
    // ممکن اسم فایل چند بخشی باشه اخرین بخش میشه پسوند فایل
    return validextentions.includes(fileExtenstion);
}

/**
 * validate function
 * @param {function} func - function to validate
 * @returns  {boolean} -returns true if input data is a function
 */
function validateFunc(func){
    return typeof func ==="function"
}

/**
 * validate an iranian user mobile number
 * @param {*} mobile -The mobile number must start with 09 and then have 9 numeric digits.
 * @returns {string}- Return True if mobile is valid otherwise false
 */
function validatePhone(mobile) {
    const regex = /^(09)(1[0-9]|2[0-9]|3[0-9])\d{7}$/;
    return regex.test(mobile);
}
/**
 * validate nationalcode
 * @param {string} code - code to validate
 * @returns {boolean} - returns true if input data is valid
 */
function validateNationalcode(code) {
    const regex = /^\d{10}$/;
    if (!regex.test(code)) {
        return false;
    }
    const check = parseInt(code[9], 10);
    let sum = 0;
    for(i=0;i<9;i++){
        sum+=parseInt(code[i],10)*(10-i)
    }
    let rem = sum%11
    console.log(rem)
    if(rem<2){
        return rem === check
    }
    return (11-rem) ===check
}

/**
 * validate object
 * This function checks whether the input is an object and not empty.
 * @param {object} obj - object to validate
 * @returns {boolean} - return true if the input data is a valid object
 */
function validateObject(obj) {
    try {
        return typeof obj === "object" && obj !== null;
    } catch (err) {
        return false
    }
}

/**
 * validate user password 
 * This function checks that the input password contains at least 10 characters and also contains at least one lowercase letter, one uppercase letter, one number, and one special symbol.
 * @param {string} password -the password to validate
 * @returns {boolean}-return true if the password is valid
 */
function validatePasswordRe(password) {
    let length = password.length;
    const isValidLength = password.length>3 ? true :false;
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowecase = /[a-z]/.test(password);
    const hasNumber = /[\d]/.test(password);
    const hasSymbol = /[\W_]/.test(password);
    if (isValidLength && hasUppercase && hasLowecase && hasNumber && hasSymbol) {
        return true
    }else{
        return false
    }
 
}
/**
 * validate a persian name
 * this function checks whether input name contains only farsi characters,dot and space
 * @param {string} full_name - The persian name to validate
 * @returns {boolean} - returns true if fuul_name is valid
 */
function persianName(full_name){
    const regex = /^[\u0600-\u06FF\s\.\-]+$/
    return regex.test(full_name)
}
/**
 * validate postal code
 * This function verifies that the entered postal code is ten digits and valid.
 * @param {string} $postalCode - The postal code must be a ten-digit number.
 * @returns {boolean} - returns true if the postal code is valid, false otherwise.
 */
function validatePostalCode($postalCode){
    const regex = /^\d{10}$/
    return regex.test($postalCode)
}
/**
 * validate jalali date
 * @param {string} inputDate - jalali date to validate
 * @returns {boolean} - returns true if input date is valid
 */
function validateJalali(inputDate) {
    let parts = inputDate.split("/");
    if (parts.length !== 3 || parts[0] == "" || parts[1] == "" || parts[2] == "") {
        return false;
    }
    //console.log(typeof parts[0])
    const year = parseInt(parts[0]); //number
    //console.log(typeof year)
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return false;
    }
    if (!(year >= 1000 && year <= 9999)) {
        return false;
    }
    if (!(month >= 1 && month <= 12)) {
        return flase;
    }
    if (!(day >= 1 && day <= 31)) {
        return false;
    }
    console.log({month,day})
    if(month>6){ //شش ماهه دوم سال
        if(day>30) return false
    }
    return true;
}

/**
 * validate url string
 * Takes a url from the input and returns true if it is valid, false otherwise.
 * @param {string} url -the url to validate
 * @returns {boolean} -returns true if the url is valid, false otherwise.
 */
function validateUrl(url){
   try{
    new URL(url)
    return true
   }
   catch(err){
    console.log(err)
   }
   return false;
}
/**
 * Receives a username and checks that the received username contains at least one letter,one number, and one underscore.
 * Username can only contain letters, numbers, and underscores.
 * @param {string} username : the username to validate
 * @returns {boolean} :Returns true if the username is valid, false otherwise.
 */
function validateUsernameRe(username) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/;
    return regex.test(username);
}



