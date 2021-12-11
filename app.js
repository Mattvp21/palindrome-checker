var txtInput = document.getElementById("word");

function checkPalindrome() {
    let newTxtInput = txtInput.value.toUpperCase().split("").reverse("").join("");
  
    
    if(txtInput.value.toUpperCase() === newTxtInput) {
        document.querySelector(".answer").innerHTML = "Yes";
        document.querySelector(".answer").style.color = "green"
    } else {
        document.querySelector(".answer").innerHTML = "No"
        document.querySelector(".answer").style.color = "red"
    }
}

document.getElementById("check").addEventListener("click", () => {
    checkPalindrome();
})



