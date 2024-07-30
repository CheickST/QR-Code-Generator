let API_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById('imgBox');
let qrCodeImg = document.getElementById('qrCodeImg');
let qrCodeTxt = document.getElementById('qrCodeTxt');

function generateCode(){
    qrCodeImg.src = API_URL + qrCodeTxt.value.trim();
}

document.getElementById('generateButton').addEventListener('click', generateCode);
