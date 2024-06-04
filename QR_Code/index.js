const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const input = document.querySelector(".form input");
const qrImage = document.querySelector(".QR-Code img");

generateBtn.addEventListener("click", () => {
    let qrValue = input.value;
    if(!qrValue) return; // The input is empty...
    generateBtn.innerText = "Generating QR Code...";
    //Getting QR-Code for users
    qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

input.addEventListener("keyup", () => {
    if(!input.value) {
        wrapper.classList.remove("active");
    }
})