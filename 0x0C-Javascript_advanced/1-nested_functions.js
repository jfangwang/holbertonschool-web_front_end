  /*
* outer - prints out the full name of a user
* Return: does not return any values
*/

globalVariable = "Welcome";

function outer() {
    let course = "Holberton";
    alert(globalVariable);
    function inner() {
        let exclamation = '!';
        alert(globalVariable + ' ' + course);
        function inception() {
            alert (globalVariable + ' ' + course + exclamation)

        }
        inception()
    }
    inner();
}

outer();
