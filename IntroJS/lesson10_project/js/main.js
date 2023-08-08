/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 7/20/2023
*/

//Validate form input - Checks that all fields have a value
function formValidation(e) {

    //Form input variables
    let fullname = e.target.fullname.value;
    let streetAddr = e.target.street_address.value;
    let city = e.target.city.value;
    let state = e.target.state.value;
    let zipcode = e.target.zipcode.value;
    let formValues = [fullname, streetAddr, city, state, zipcode];

    let canSubmit = true;

    for (let i = 0; i < formValues.length; i++) {
        if (!formValues[i]) {
            canSubmit = false;
        }
    }

    return canSubmit;
}

//Submit Event Handler
form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let submit = formValidation(e);

    if (!submit) {
        alert('One or more values is missing from the form. Please ensure all fields are filled out and resubmit.');
    } else {
        alert('Form has been successfully submitted.');
        form.reset();
    }

});
