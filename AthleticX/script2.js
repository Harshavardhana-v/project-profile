let generatedCode = "";

function sendCode() {
    let email = document.getElementById("email").value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    // Generate a 6-digit verification code
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    alert("Your verification code: " + generatedCode); // Simulate sending the code

    document.getElementById("verificationSection").style.display = "block";
}

function verifyCode() {
    let enteredCode = document.getElementById("verificationCode").value;

    if (enteredCode === generatedCode) {
        document.getElementById("message").innerHTML = "✅ Verification successful!";
        document.getElementById("message").style.color = "green";
        window.location.href='yourIn.html';
    } else {
        document.getElementById("message").innerHTML = "❌ Invalid code. Try again!";
        document.getElementById("message").style.color = "red";
    }
}
