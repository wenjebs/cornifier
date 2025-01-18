setTimeout(() => {
  const images = document.querySelectorAll("img.yt-core-image");
  if (images.length > 0) {
    images.forEach((image) => pixelateImage(image));
    console.log("All thumbnails pixelated.");
  } else {
    console.log("Images not found.");
  }
}, 5000); // 5000 milliseconds = 5 seconds

function pixelateImage(image) {
  image.style.filter = "blur(5px)"; // Adjust the blur value to change the pixelation effect
}
