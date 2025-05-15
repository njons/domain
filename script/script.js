const images = [
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/1*mImBXLZyWu5W6pRd8JsVQw.jpeg",
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/1*OZ8gvcvoA-yvJa8mlffccg.jpeg",
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/0*BqWa-aIr_0_S77hd.jpg",
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/0*tsICebERnSPzIJim.jpg",
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/0*hi68a1LJgNzM1X-A.jpg",
  "https://miro.medium.com/v2/resize:fit:2048/format:webp/0*CIKDQELcm-G631_-.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("hero-image");

  const randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
});
