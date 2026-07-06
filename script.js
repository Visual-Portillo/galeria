// ================= GALERÍA DINÁMICA =================
const gallery = document.getElementById("gallery");

for(let i=1;i<=89;i++){
  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;
  img.loading = "lazy";
  img.onclick = () => openImage(img);
  gallery.appendChild(img);
}

// ================= LIGHTBOX =================
function openImage(img){
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  lightbox.innerHTML = `<img src="${img.src}">`;

  lightbox.onclick = () => lightbox.remove();

  document.body.appendChild(lightbox);
}