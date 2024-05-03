let regexInput = document.querySelector("#regex-input")
let validationText = document.querySelector("#validation-text")

const REGULAR_EXPRESSION = new RegExp("\\w");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})