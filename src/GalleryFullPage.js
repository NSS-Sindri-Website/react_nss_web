import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const GalleryFullPage = () => {
  let data = [
    {
      id: 1,
      imgSrc: "images/img1.jpeg",
    },
    {
      id: 2,
      imgSrc: "images/Event_img8.jpg",
    },
    {
      id: 3,
      imgSrc: "images/Event_img9.jpg",
    },
    {
      id: 4,
      imgSrc: "images/Event_img10.jpg",
    },
    {
      id: 5,
      imgSrc: "images/shirt.webp",
    },
    {
      id: 6,
      imgSrc: "images/Event_img1.jpg",
    },
    {
      id: 7,
      imgSrc: "images/Event_img2.jpg",
    },
    {
      id: 8,
      imgSrc: "images/Event_img13.jpg",
    },
    {
      id: 9,
      imgSrc: "images/Event_img3.jpg",
    },
    {
      id: 10,
      imgSrc: "images/yoga.jpeg",
    },
    {
      id: 11,
      imgSrc: "images/Event_img4.jpg",
    },
    {
      id: 12,
      imgSrc: "images/img3.jpeg",
    },
    {
      id: 13,
      imgSrc: "images/mental.jpeg",
    },
    {
      id: 14,
      imgSrc: "images/img1.jpeg",
    },
    {
      id: 15,
      imgSrc: "images/Event_img6.jpg",
    },
    {
      id: 16,
      imgSrc: "images/wow.webp",
    },
    {
      id: 17,
      imgSrc: "images/Event_img7.jpg",
    },
    {
      id: 18,
      imgSrc: "images/img2.jpeg",
    },
    {
      id: 19,
      imgSrc: "images/Event_img12.jpg",
    },
    {
      id: 20,
      imgSrc: "images/rep.png",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon className="crossGal" onClick={() => setModel(false)} />
      </div>
      <div className="galEventHead">
        <h1 className="galleryHead" style={{ textAlign: "center" }}>
          Gallery
        </h1>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GalleryFullPage;
