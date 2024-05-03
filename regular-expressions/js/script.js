// MAIN CODE JANGAN DIGANGGU
regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

// Alwin Liufandy
let regexInputAlwin = document.querySelector("#alwinliufandy")
let validationTextAlwin = document.querySelector("#alwinliufandy-validation-text")

// break, whitespace, enter
const REGULAR_EXPRESSION_Alwin = new RegExp("/\byes\b/");

regexInputAlwin.addEventListener("input", function() {
    validationTextAlwin.innerHTML = REGULAR_EXPRESSION_Alwin.test(regexInputAlwin.value) ? "Valid" : "Invalid"
})

// JULYANT ANGGGARA
let bregexInput_109 = document.querySelector("#221402109-JulyantAnggara")
let validationText_109 = document.querySelector("#221402109-JulyantAnggara-validation-text")

const REGULAR_EXPRESSION_109 = new RegExp("\W");

regexInput.addEventListener("input", function() {
    validationText_109.innerHTML = REGULAR_EXPRESSION_109.test(regexInput_109.value) ? "Valid" : "Invalid"
});

// Jessindy Tanuwijaya
let regexInputJess = document.querySelector("#221402062-jessindy")
let validationTextJess = document.querySelector("#221402062-jessindy-validation-text");

const REGULAR_EXPRESSION_JESS = new RegExp("/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim");
regexInputJess.addEventListener("input", function() {
    validationTextJess.innerHTML = REGULAR_EXPRESSION_JESS.test(regexInputJess.value) ? "Valid" : "Invalid"
})

// Ruth Grace Manurung
let regexInputRuth = document.querySelector("#21402015-ruthgrace")
let validationTextRuth = document.querySelector("#21402015-ruthgrace-validation-text")

const RegExRuth = new RegExp("^ruthgrace.*", "i");

regexInputRuth.addEventListener("input", function() {
    validationTextRuth.innerHTML = RegExRuth.test(regexInputRuth.value) ? "Valid" : "Invalid"
})

// Ceycylia Dear Amizafatel
let regexInputceycylia = document.querySelector("#221402059-ceycyliadearamizafatel")
let validationTextceycylia = document.querySelector("#221402037-ceycyliadearamizafatel-validation-text")

const REGULAR_EXPRESSION_ceycylia = new RegExp("");

regexInput.addEventListener("input", function() {
    validationTextceycylia.innerHTML = REGULAR_EXPRESSION_ceycylia.test(regexInput.value) ? "Valid" : "Invalid"
})

// Serafim SItorus
let regexInputSerafim = document.querySelector("#221402133-serafimsitorus")
let validationTextSerafim = document.querySelector("#221402133-serafimsitorus-validation-text")

const REGULAR_EXPRESSION_SERAFIM = new RegExp("\b(Baik|Buruk)\b");

regexInput.addEventListener("input", function() {
    validationTextSerafim.innerHTML = REGULAR_EXPRESSION_SERAFIM.test(regexInputSerafim.value) ? "Valid" : "Invalid"
})

// Muhammad Luthfi
let regexInputLuthfi = document.querySelector("#221402050-MuhammadLuthfi-input")
let validationTextLuthfi = document.querySelector("#221402050-MuhammadLuthfi-validasi")

const REGULAR_EXPRESSION_LUTHFI = new RegExp("^P");

regexInputLuthfi.addEventListener("input", function() {
    validationTextLuthfi.innerHTML = REGULAR_EXPRESSION_LUTHFI.test(regexInputLuthfi.value) ? "Valid" : "Invalid"
});

// SINTONG JANGAN DIGANGGU
let regexInputSintong = document.querySelector("#221402076-sintong");
let validationTextSintong = document.querySelector("#221402076-sintong-validation-text");

const SINTONG_REGEX = new RegExp("^sintong.*", "i");

regexInputSintong.addEventListener("input", function() {
    validationTextSintong.innerHTML = SINTONG_REGEX.test(regexInputSintong.value) ? "Valid" : "Invalid";
});


// Yohana Marbun
let regexInputYomar = document.querySelector("#221402065-yohanamarbun")
let validationTextYomar = document.querySelector("#221402065-yohanamarbun-validation-text")

const REGULAR_EXPRESSION_YOMAR = new RegExp("^marbun.*","i");

regexInput.addEventListener("input", function() {
    validationTextYomar.innerHTML = REGULAR_EXPRESSION_YOMAR.test(regexInputYomar.value) ? "Valid" : "Invalid"
})

// Andy Septiawan Saragih
let regexInputAndy = document.querySelector("#221402053-AndySaragih")
let validationTextAndy = document.querySelector("#221402053-AndySaragih-validation-text")

const REGULAR_EXPRESSION_ANDY = new RegExp("(?!.*gmail)", "i");

regexInputAndy.addEventListener("input", function() {
    validationTextAndy.innerHTML = REGULAR_EXPRESSION_ANDY.test(regexInputAndy.value) ? "Valid" : "Invalid"
})


// Yeni Aulia Sinaga
let regexInputYeni = document.querySelector("#221402138-yeniauliasinaga")
let validationTextYeni = document.querySelector("#221402138-yeniauliasinaga-validation-text")

const REGULAR_EXPRESSION_YENI = new RegExp("^P");

// Yohana Septamia
let regexInputYohana = document.querySelector("#regex-input")
let validationTextYohana = document.querySelector("#validation-text")

const REGULAR_EXPRESSION_YOHANA = new RegExp("^P");

regexInputYohana.addEventListener("input", function() {
    validationTextYohana.innerHTML = REGULAR_EXPRESSION_YOHANA.test(regexInputYohana.value) ? "Valid" : "Invalid"
})

// Melia Purnamasari Sihombing
let regexInputMel = document.querySelector("#221402112-MeliaPurnamasariSihombing")
let validationTextMel = document.querySelector("221402112-MeliaPurnamasariSihombing-validation-text")

const REGULAR_EXPRESSIONMEL = new RegExp("^[0-9]*$");

// Wahyu Jhon Riadi Sianipar
// Remove the redeclaration of the variables
// let regexInput1 = document.querySelector("221402135-Wahyu J. R. Sianipar")
// let validationText1 = document.querySelector("#validation-text")
// const REGULAR_EXPRESSION1 = new RegExp("^P");

// Use the existing variables instead
regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

// GylbertChrismiguelSitorus
let regexInput = document.querySelector("#2402025-GylbertChrismiguelSitorus")
let validationText = document.querySelector("#221402025-GylbertChrismiguelSitorus-validation-text")

const REGULAR_EXPRESSION = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

CeyinAraeEDaily
let regexInput = document.querySelector("#221402037-alwinliufandy")
let validationText = document.querySelector("#221402037-alwinliufandy-validation-text")

const REGULAR_EXPRESSION = new RegExp("\byes\b");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})


// Keisya - 221402006G
Yosep21221402056-yohanaseptamiaYosep221402056-yohanaseptamia-validation-text_YosepYosepYosep_YosepYosep

// ivan
let regexInput = document.querySelector("#221402106-IvanTambunan")
let validationText = document.querySelector("#221402106-IvanTambunan-validation-text")

const REGULAR_EXPRESSION = new RegExp("ivan");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

// mars
let regexInput = document.querySelector("#2402071-MarsyaloanSiburian")
let validationText = document.querySelector("#221402071-MarsyaloanSiburian-validation-text")

const REGULAR_EXPRESSION = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
});luhtfiValiasi;REGEX_LUTHFIluhtfiValiasiREGEX_LUTHFIAndyAndyAndyAndyAndy
MelMelMelMelMellet regexInput = document.querySelector("#221402006-Keisya")
let validationText = document.querySelector("#validation-text")

const REGULAR_EXPRESSION = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

// Re
let regexInputRaihan = document.querySelector("#221402009-raihan")
let validationTextRaihan = document.querySelector("#221402009-raihan-validation-text")

const REGULAR_EXPRESSION = new RegExp("^\d\d*$");

regexInputRaihan.addEventListener("input", function() {
    validationTextRaihan.innerHTML = REGULAR_EXPRESSION.test(regexInputRaihan.value) ? "Valid" : "Invalid"
})

// FenayaCecilly
let regexInput = document.querySelector("#221402100FenayaCecilly")
let validationText = document.querySelector("#221402100-FenayaCecilly-validation-text")

const REGULAR_EXPRESSION = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})


//Diva Anggreini Harahap

//NajwaAmanda
let regexInputNajwa = document.querySelector("#221402068-NajwaAmanda")
let validationText_Najwa = document.querySelector("#221402068-NajwaAmanda-validation-text")

const REGULAR_EXPRESSION_NAJWA = new RegExp("^[0-9]+$");

regexInputNajwa.addEventListener("input", function() {
    validationText_Najwa.innerHTML = REGULAR_EXPRESSION_NAJWA.test(regexInputNajwa.value) ? "Valid" : "Invalid"
})

//Ghalbi Daffa Yustiawan
let regexInputgdaffay_123 = document.querySelector("#221402103-GhalbiDaffa")
let validationgdaffay_123 = document.querySelector("#221402103-GhalbiDaffa-validation-text")

const REGULAR_EXPRESSIONgdaffay_123 = new RegExp("^P");

regexInputgdaffay_123.addEventListener("input", function() {
    validationgdaffay_123.textContent = REGULAR_EXPRESSIONgdaffay_123.test(regexInputgdaffay_123.value) ? "Valid" : "Invalid";
})

// //Farhan Anfasa Maulana
// let regexInput = document.querySelector("#221402097-FarhanAnfasa")
// let validationText = document.querySelector("#221402097-FarhanAnfasa-validation-text")

// const REGULAR_EXPRESSION = new RegExp("^P");

// regexInput.addEventListener("input", function() {
//     validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
// })

//Rifqi Jabrah Rhae
let regexInput031 = document.querySelector("#221402031-rifqijabrahrhae")
let validationText031 = document.querySelector("#221402031-rifqijabrahrhae-validation-text")

const REGULAR_EXPRESSION031 = new RegExp("\d");

regexInput031.addEventListener("input", function() {
    validationText031.innerHTML = REGULAR_EXPRESSION031.test(regexInput031.value) ? "Valid" : "Invalid"
})


// Daniel Stephen Gultom
let regexInputDagul = document.querySelector("#221402047-danielStephenGultom")
let validationTextDagul = document.querySelector("#221402047-danielStephenGultom-validation-text")

const REGULAR_EXPRESSION_DAGUL = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationTextDagul.innerHTML = REGULAR_EXPRESSION_DAGUL.test(regexInputDagul.value) ? "Valid" : "Invalid"
})

// Sabrina Marisi Siahaan]

let regexInput1 = document.querySelector("#regex-input")
let validationText1 = document.querySelector("#validation-text")

const REGULAR_EXPRESSION1 = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

// Perwira Satria Taufik QD

let regexInput = document.querySelector("#regex-input")
let validationText1 = document.querySelector("#validation-text") 

const REAR_EXPRESSION = new RegExp("^P");

regexInput.addEventListener("input", fuction() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(rege)
}}

//Rizqi Siti Aulia
let regexInputRizqi = document.querySelector("#221402127-RizqiSitiAulia")
let validationTextRizqi = document.querySelector("#221402127-RizqiSitiAulia-validation-text")

const REGULAR_EXPRESSION1 = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})

//Denice Matthew Ronaldo Halomoan Sitohang
let regexInput = document.querySelector("#221402028-DeniceMatthew")
let validationText = document.querySelector("#221402028-DeniceMatthew-validation-text")

const REGULAR_EXPRESSION = new RegExp("^P");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInputDen.value) ? "Valid" : "Invalid"
_seraffim_seraffimlet regexInput = document.querySelector("#221402071-MarsyaloanSiburian")
let validationText = document.querySelector("#221402106-IvanTambunan-validation-text")

const REGULAR_EXPRESSION = new RegExp("mars");

regexInput.addEventListener("input", function() {
    validationText.innerHTML = REGULAR_EXPRESSION.test(regexInput.value) ? "Valid" : "Invalid"
})HTML
^p// Perwira Satria Taufik QDSabrina221402078-SabrinaMarisiSiahaanSabrina221402078-SabrinaMarisiSiahaan-_SabrinaSabrinaSabrina_SabrinaSabrina_KipaKipa_Kipa__RIZQIregexInputRizqi.addEventListener("input", function() {
    validationText_Najwa.innerHTML = REGULAR_EXPRESSION_NAJWA.test(regexInputNajwa.value) ? "Valid" : "Invalid"Seraf Seraf;avalidationTextDagul.innerHTML221402094-DivaAnggreiniHarahap221402094-DivaAnggreiniHarahap_D
regexInputMel.addEventListener("input", function() {
    validationTextMel.innerHTML = REGULAR_EXPRESSIONMEL.test(regexInputMel.value) ? "Valid" : "Invalid"
});



// Why    Why/[a-z]*[0-9]+[a-z]*/Famsszz.innerHTMLFamsszzFamsszz221402124-PerwiraSatria-inputvalidationTextSatria #221402124-PerwiraSatria-validasi_SATRIA    validationTextSatria