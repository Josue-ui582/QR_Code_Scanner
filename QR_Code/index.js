// Acces to different class and Id of our html file

const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const input1 = document.querySelector(".form .texts");
const input2 = document.querySelector(".form .files");
const qrImage = document.querySelector(".QR-Code img");
const infoText = document.querySelector(".info_txt");
const infoText2 = document.querySelector(".info-txt")
const downloade = document.querySelector('.downlod');
const actives = document.querySelector(".actives");

// The function how will be executed when users clik on the generate button

generateBtn.addEventListener("click", () => {

    // Declarating different variables


    let qrValue = input1.value;
    let qrValue2 = input2.files[0];
    infoText.style.display = "block";
    infoText.style.color = "red";
    wrapper.style.height = "430px"
    if(!qrValue && !qrValue2) { 
        infoText.innerHTML = 'Please enter text, URL or file to generate QR Code ❗'
        return // Nothing is not return, the user should enter some input;
    }
    
    //Getting QR-Code for users
    if (qrValue) {
        qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=160x150&data=${qrValue}`
        infoText.style.display = "none";
        infoText2.style.display = "block"
        infoText2.style.color = "green";
        infoText2.innerHTML = 'Great ! your QR Code has been good generated 😊'
        applyHeight()
        downloade.style.display = "block";
        actives.style.height = "120vh"
    }else if (qrValue2){
        
        qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=160x150&data=${qrValue2}`
        infoText.style.color = "green";
        downloade.style.display = "block";
        infoText.innerHTML = 'Great ! your QR Code has been good generated 😊'
    }

    generateBtn.innerText = "Generating QR Code...";

    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });

    applyHeightes();
});

input1.addEventListener("keyup", () => {
    if(!input1.value && !input2.value) {
        wrapper.classList.remove("active");
        infoText.style.display = "none";
        infoText2.style.display = "none";
        wrapper.style.height = "330px"
        applyHeighte()
        downloade.style.display = "none";
    }
})

// Responsive height of our wrapper class when we are down of 700px width

function applyHeight() {
    window.matchMedia('(max-width: 700px)').matches
    ? wrapper.style.height = '690px'
    : wrapper.style.height = '650px'
    wrapper.style.margintop = '200px'
}

applyHeighte();

function applyHeighte() {
    window.matchMedia('(max-width: 700px)').matches
    ? wrapper.style.height = '330px' 
    : wrapper.style.height = '330px'
    wrapper.style.margintop = '200px'
}

function applyHeightes() {
    window.matchMedia('(min-width: 750px)').matches
    ? actives.style.height = '105vh'
    : actives.style.height = '120vh'
}

downloade.addEventListener('click', () => {
    const link  = document.createElement("a");
    link.href = qrImage.src;
    link.download = qrImage;
    link.click();
})