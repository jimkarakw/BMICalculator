//SELECTORS
const formFields = {
  massField: document.querySelector(".mass-field"),
  heightField: document.querySelector(".height-field"),
  buttonResult: document.querySelector(".result-btn"),
  resetButton: document.querySelector(".reset-btn"),
  divResult: document.querySelector(".result-field"),
  theForm: document.querySelector("#bmi-form"),
};
//Block Result Field
formFields.divResult.classList.add("hide");
//EVENT LISTENERS
formFields.buttonResult.addEventListener("click", (event) => {
  // Prevent Form from Submitting
  event.preventDefault();
  const bmiResult =
    formFields.massField.value /
    (formFields.heightField.value * formFields.heightField.value);
  if (bmiResult > 0) {
    formFields.divResult.classList.remove("hide");
    formFields.divResult.classList.add("fade-in");
    formFields.theForm.classList.add("add-height");
    formFields.divResult.value = bmiResult * 10000;
  }
});
formFields.resetButton.addEventListener("click", (event) => {
  // Prevent Form from Submitting
  event.preventDefault();
  formFields.theForm.classList.add("remove-height");
  formFields.divResult.classList.add("hide");
  //CLEAR INPUT VALUES
  formFields.massField.value = "";
  formFields.heightField.value = "";
  formFields.divResult.value = "";
});
