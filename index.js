let cards = document.querySelectorAll('.cards');
cardsArray = Array.from(cards);
for (let i = 0; i < cardsArray.length; i++) {
    element = cardsArray[i];
    element.style.cssText = `background-image:linear-gradient(180deg, rgba(0, 0, 0, 0) 61.05%, #000000 98.83%),url('Images/Cards/${i+1}.jpg');background-size:cover;`
}
cardsArray.forEach(element => {
    element.onmouseover =()=>{
        element.classList.add('cardHover')
    }
});
cardsArray.forEach(element => {
    element.onmouseout =()=>{
        element.classList.remove('cardHover')
    }
});

let gallery = document.querySelectorAll('.gallery')
galleryArray = Array.from(gallery)
for (let i = 0; i < galleryArray.length; i++) {
    let element = galleryArray[i];
    element.style.cssText = `background-image:url('Images/Gallery/Gallery${i+1}.jpg');background-size:cover;`
}

let destination = document.querySelectorAll('.destination')
destArray = Array.from(destination)
for (let i = 0; i < destArray.length; i++) {
    let element = destArray[i];
    element.style.cssText = `background-image:linear-gradient(180deg, rgba(0, 0, 0, 0) 61.05%, #000000 98.83%),url('Images/Destination/${i+1}.jpg');background-size:cover;`
}


function sendMail() {
    var link = "mailto:anasuya@morpheousplanners.com"
             + "?cc=soubhik@morpheousplanners.com"
             + "&subject=" + encodeURIComponent("Want to get in touch.")
             + "&body=" + encodeURIComponent(document.getElementById('text').value);
    
    window.location.href = link
}



