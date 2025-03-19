function validateScientificNumber() {
    let input = document.getElementById("sciNumber").value;
    let sciNotationRegex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    let result = document.getElementById("result");
    
    if (sciNotationRegex.test(input)) {
        result.textContent = "Yes, it is a number";
        result.style.color = "#28a745";
        result.style.backgroundColor = "#d4edda";
        result.style.border = "2px solid #155724";
        result.style.padding = "10px";
        result.style.borderRadius = "5px";
    } else {
        result.textContent = "No, it is not a number";
        result.style.color = "#dc3545";
        result.style.backgroundColor = "#f8d7da";
        result.style.border = "2px solid #721c24";
        result.style.padding = "10px";
        result.style.borderRadius = "5px";
    }
}

function showAboutUs() {
    alert("About Us:\nTalitha Rondonuwu\nNIM: 231011060050");
}
