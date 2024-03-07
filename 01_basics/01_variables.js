const account_id = 175879
let account_email = "abc@xyz.com"
var account_password = "qwedrf"
account_city = "Bankura"
let account_state

// account_id = 2 // not allowed
account_email = "def@xyz.com"
account_password = "jhvhgc"
account_city = "Kolkata"

console.log(account_id);
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
console.table([account_id, account_email, account_password, account_city, account_state])