let highlight_images = {
    "Download.jpg": {title:"ESY Weihnachtsfeier",link:""},
    "gaming_night.png": {title: "ESY Gaming Night",link:""},
    "grillen.jpg": {title:"ESY Clean-Up and Grill and Chill",link:""},
    "meet_and_chill.jpg": {title: "ESY Meet Up März",link:""},
    "meet_up.jpg": {title:"ESY Meet Up Oktober",link:""},
    "sommercamp.jpg":{title:"ESY Trai He 2024", link:"https://www.trai-he.com/?fbclid=PAZXh0bgNhZW0CMTEAAac7S8uN90BOeBIoAwMi-E7by8GXZgOMJUynOQ8-9eJWl5M-eBFnYFipwezKOQ_aem_dk1pONExVvoEaCR5O6wqfg"}
}

let galery_images = {
    "test1.png": {title:"ESY Weihnachtsfeier",link:""},
    "test2.png": {title: "ESY Gaming Night",link:""},
    "test3.png": {title:"ESY Clean-Up and Grill and Chill",link:""},
    "test4.png": {title:"test4",link:""},
    "test5.png": {title:"test5",link:""},
    "test6.png": {title:"test6",link:""},
}

const imageContainer = document.getElementById('highlight_beispiele');
const imageWidth = 300 + 15;
// Beispiel: 10 Bilder mit Namen highlight1.jpg, highlight2.jpg, ...
for (let filename in highlight_images) {
    const data = highlight_images[filename];  // hole das Objekt mit title + link

    let wrapper = document.createElement("div");
    wrapper.className = "slide";
    wrapper.style.backgroundImage = `url(highlight_images/${filename})`;
    wrapper.style.position = "relative";

    const caption = document.createElement('div');
    caption.textContent = data.title;
    caption.style.marginTop = "8px";
    caption.style.fontSize = "12px";
    caption.style.top = '70%';
    caption.style.color = "white";
    caption.style.fontSize = "32px";
    caption.style.fontWeight = "bold";
    caption.style.position = "absolute";

    wrapper.appendChild(caption);

    // Wenn ein Link vorhanden ist, erstelle ein <a> Element
    if (data.link && data.link !== "") {
        const linkElement = document.createElement("a");
        linkElement.href = data.link;
        linkElement.target = "_blank"; // optional: öffnet in neuem Tab
        linkElement.appendChild(wrapper);
        imageContainer.appendChild(linkElement);
    } else {
        imageContainer.appendChild(wrapper);
    }
}

function left() {
    imageContainer.scrollBy({ left: -imageWidth, behavior: 'smooth' });
}

function scrollRight() {
    imageContainer.scrollBy({ left: imageWidth, behavior: 'smooth' });
}


const galeryContainer = document.getElementById('galery_beispiele');
const galery_imageWidth = 300 + 15;
// Beispiel: 10 Bilder mit Namen highlight1.jpg, highlight2.jpg, ...
for (let filename in galery_images) {
    const data = galery_images[filename];  // hole das Objekt mit title + link

    let wrapper = document.createElement("div");
    wrapper.className = "slide_galery";
    wrapper.style.backgroundImage = `url(galery_images/${filename})`;
    wrapper.style.position = "relative";
    wrapper.style.borderRadius = "10px";

    const caption = document.createElement('div');
    caption.textContent = data.title;
    caption.style.marginTop = "8px";
    caption.style.fontSize = "12px";
    caption.style.top = '70%';
    caption.style.color = "white";
    caption.style.fontSize = "32px";
    caption.style.fontWeight = "bold";
    caption.style.position = "absolute";

    wrapper.appendChild(caption);

    // Wenn ein Link vorhanden ist, erstelle ein <a> Element
    if (data.link && data.link !== "") {
        const linkElement = document.createElement("a");
        linkElement.href = data.link;
        linkElement.target = "_blank"; // optional: öffnet in neuem Tab
        linkElement.appendChild(wrapper);
        imageContainer.appendChild(linkElement);
    } else {
        galeryContainer.appendChild(wrapper);
    }
}

function galery_left() {
    galeryContainer.scrollBy({ left: -galery_imageWidth, behavior: 'smooth' });
}

function galery_right() {
    galeryContainer.scrollBy({ left: galery_imageWidth, behavior: 'smooth' });
}


document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Formular wird nicht standardmäßig abgeschickt

    // Optional: E-Mail an Backend schicken (hier weggelassen)
    // fetch(...)

    // Dann zur Danke-Seite weiterleiten:
    window.location.href = "thank_you.html";
  });