setTimeout((function(){var e=document.querySelectorAll("img.yt-core-image");e.length>0?(e.forEach((function(e){return function(e){try{var t=document.createElement("canvas"),i=t.getContext("2d"),l=.05;t.width=e.width,t.height=e.height,i.drawImage(e,0,0,e.width*l,e.height*l),i.drawImage(t,0,0,e.width*l,e.height*l,0,0,e.width,e.height),e.replaceWith(t)}catch(t){console.error("Pixelation failed, applying blur effect instead:",t),e.style.filter="blur(5px)"}}(e)})),console.log("All thumbnails pixelated.")):console.log("Images not found.")}),5e3);