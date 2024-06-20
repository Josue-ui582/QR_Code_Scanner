const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const input1 = document.querySelector(".form .texts");
const input2 = document.querySelector(".form .files");
const qrImage = document.querySelector(".QR-Code img");

generateBtn.addEventListener("click", () => {
    let qrValue = input1.value;
    let qrValue2 = input2.files[0];
    if(!qrValue && !qrValue2) return; // The input is empty...
    generateBtn.innerText = "Generating QR Code...";
    //Getting QR-Code for users
    if (qrValue) {
        qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    }else {
        qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue2}`
    }
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

input1.addEventListener("keyup", () => {
    if(!input1.value) {
        wrapper.classList.remove("active");
    }
})