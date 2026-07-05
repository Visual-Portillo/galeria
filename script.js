//================ LOGIN =================//
function login(){

const email = document.getElementById("email").value.trim();
const msg = document.getElementById("msg");

msg.innerText="";

if(!email || !email.includes("@")){
msg.innerText="Ingresa un correo válido";
return;
}

// guardar en admin (localStorage)
let users = JSON.parse(localStorage.getItem("users")) || [];

users.push({
email: email,
time: new Date().toLocaleString()
});

localStorage.setItem("users", JSON.stringify(users));

// cambiar vista
document.getElementById("login").style.display="none";
document.getElementById("app").style.display="block";

// cargar galería
loadGallery();
}

//================ GALERÍA =================//
function loadGallery(){

const gallery = document.getElementById("gallery");

if(gallery.children.length > 0) return;

for(let i=1;i<=70;i++){

const card = document.createElement("div");
card.className = "photo-card";

card.innerHTML = `
<img src="images/${i}.jpg" loading="lazy" alt="Foto ${i}" onclick="openImage(this)">
`;

gallery.appendChild(card);
}
}

//================ LIGHTBOX =================//
function openImage(img){

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `<img src="${img.src}">`;

lightbox.onclick = () => lightbox.remove();

document.body.appendChild(lightbox);
}