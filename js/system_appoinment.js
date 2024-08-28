document.addEventListener('DOMContentLoaded', function () {
    const placeSelect = document.getElementById('placeSelect');
    const fieldsToEnable = [
        'branchSelect', 'mainSpecialtySelect', 'subSpecialtySelect',
        'doctorSelect', 'feesInput', 'appointmentSelect', 'visitTypeSelect',
        'fullNameInput', 'emailInput', 'phoneInput', 'dateInput', 'additionalInfoTextarea'
    ];
    const submitButton = document.querySelector('button[type="submit"]');

    // Enable or disable fields
    function setFieldsEnabled(enabled) {
        fieldsToEnable.forEach(function(id) {
            document.getElementById(id).disabled = !enabled;
        });
        submitButton.disabled = !enabled;
    }

    // Initially disable all fields except the first select
    setFieldsEnabled(false);

    // Enable fields when a valid place is selected
    placeSelect.addEventListener('change', function () {
        setFieldsEnabled(this.value !== "");
    });
});