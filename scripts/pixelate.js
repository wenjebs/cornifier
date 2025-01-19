setTimeout(() => {
  const images = document.querySelectorAll("img.yt-core-image");
  if (images.length > 0) {
    images.forEach((image) => pixelateImage(image));
    console.log("All thumbnails pixelated.");
  } else {
    console.log("Images not found.");
  }

  const shortsImages = document.querySelectorAll("img.yt-core-image shortsLockupViewModelHostThumbnail");
  if (shortsImages.length > 0) {
    shortsImagesimages.forEach((shortImage) => pixelateImage(shortImage));
    console.log("All thumbnails pixelated.");
  } else {
    console.log("Images not found.");
  }
}, 5000); // 5000 milliseconds = 5 seconds

function pixelateImage(image) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const scale = 0.05; // Adjust the scale value to change the pixelation effect

  canvas.width = image.width;
  canvas.height = image.height;

  // Draw the image at a smaller scale
  ctx.drawImage(image, 0, 0, image.width * scale, image.height * scale);

  // Draw the scaled image back at the original size
  ctx.drawImage(canvas, 0, 0, image.width * scale, image.height * scale, 0, 0, image.width, image.height);

  // Replace the original image with the canvas
  image.replaceWith(canvas);
}
