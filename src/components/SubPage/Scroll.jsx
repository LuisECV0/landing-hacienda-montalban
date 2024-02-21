import React from "react";
import '../pages/Styles/Scroll.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Scroll() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600",
      thumbnail: "https://picsum.photos/id/1018/250/150",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600",
      thumbnail: "https://picsum.photos/id/1015/250/150",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600",
      thumbnail: "https://picsum.photos/id/1019/250/150",
    }
  
  ];

  return (
  <>
  <div className="container-scroll">
    <div className="text-scroll">
      <p>DESCANSO Y CONFORT</p>
      <h1>¡Disfruta en familia!</h1>
      <a>Ver Galería</a>
    </div>

    <div  className="scroll" style={{ width: '600px', height: '400px' }}>
      <ImageGallery 
      items={images} 
      showThumbnails={false} 
      showNav= {true}
      showBullets={true}

      />
    </div>
  </div>
  </>
  );

}

export default Scroll;
