import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const GalleryFullPage = () => {
  let data = [
    {
      id: 1,
      imgSrc: "images/Events/cdd.jpg",
    },
    {
      id: 2,
      imgSrc: "images/Events/cd7.jpg",
    },
    {
      id: 3,
      imgSrc: "images/Events/cd3.jpg",
    },
    {
      id: 4,
      imgSrc: "images/Events/sam3.jpg",
    },
    {
      id: 5,
      imgSrc: "images/Events/cdd2.jpg",
    },
    {
      id: 6,
      imgSrc: "images/Events/cd6.jpg",
    },
    {
      id: 7,
      imgSrc: "images/Events/cdd3.jpg",
    },
    {
      id: 8,
      imgSrc: "images/Events/sam4.jpg",
    },
    {
      id: 9,
      imgSrc: "images/Events/cd2.jpg",
    },
    {
      id: 10,
      imgSrc: "images/yoga.jpeg",
    },
    {
      id: 11,
      imgSrc: "images/Events/cd8.jpg",
    },
    {
      id: 12,
      imgSrc: "images/Events/precd.jpg",
    },
    {
      id: 13,
      imgSrc: "images/Events/sam1.jpg",
    },
    {
      id: 14,
      imgSrc: "images/Events/precd2.jpg",
    },
    {
      id: 15,
      imgSrc: "images/Events/cd.jpg",
    },
    {
      id: 16,
      imgSrc: "images/Events/precd4.jpg",
    },
    {
      id: 17,
      imgSrc: "images/sam2.jpg",
    },
    {
      id: 18,
      imgSrc: "images/Events/cd5.jpg",
    },
    {
      id: 19,
      imgSrc: "images/Events/sam13.jpg.jpg",
    },
    {
      id: 20,
      imgSrc: "images/Events/b7.jpg",
    },
    {
      id: 21,
      imgSrc: "images/Events/cd9.jpg",
    },
    {
      id: 22,
      imgSrc: "images/Events/sam5.jpg",
    },
    {
      id: 23,
      imgSrc: "images/Events/bd5.jpg",
    },
    {
      id: 24,
      imgSrc: "images/Events/sam7.jpg",
    },
    {
      id: 25,
      imgSrc: "images/Events/sam8.jpg",
    },
    {
      id: 26,
      imgSrc: "images/Events/sam9.jpg",
    },
    {
      id: 27,
      imgSrc: "images/Events/sam10.jpg",
    },
    {
      id: 28,
      imgSrc: "images/Events/sam11.jpg",
    },
    {
      id: 29,
      imgSrc: "images/Events/sam12.jpg",
    },
    {
      id: 30,
      imgSrc: "images/Events/bd1.jpg",
    },
    {
      id: 31,
      imgSrc: "images/Events/bd2.jpg",
    },
    {
      id: 32,
      imgSrc: "images/Events/bd3.jpg",
    },
    {
      id: 33,
      imgSrc: "images/Events/bd4.jpg",
    },
    {
      id: 34,
      imgSrc: "images/Events/b10.jpg",
    },
    {
      id: 35,
      imgSrc: "images/Events/bd6.jpg",
    },
    {
      id: 36,
      imgSrc: "images/Events/bd7.jpg",
    },
    {
      id: 37,
      imgSrc: "images/Events/b8.jpg",
    },
    {
      id: 38,
      imgSrc: "images/Events/bd9.jpg",
    },
    {
      id: 39,
      imgSrc: "images/Events/bd10.jpg",
    },
    {
      id: 40,
      imgSrc: "images/Events/bd11.jpg",
    },
    {
      id: 41,
      imgSrc: "images/Events/bd12.jpg",
    },
    {
      id: 42,
      imgSrc: "images/Events/bd13.jpg",
    },
    {
      id: 43,
      imgSrc: "images/Events/bd14.jpg",
    },
    {
      id: 44,
      imgSrc: "images/Events/b6.jpg",
    },
    {
      id: 45,
      imgSrc: "images/Events/bd16.jpg",
    },
    {
      id: 46,
      imgSrc: "images/Events/bd17.jpg",
    },
    {
      id: 47,
      imgSrc: "images/Events/bd18.jpg",
    },
    {
      id: 48,
      imgSrc: "images/Events/bd19.jpg",
    },
    {
      id: 49,
      imgSrc: "images/Events/bd20.jpg",
    },
    {
      id: 50,
      imgSrc: "images/Events/bd21.jpg",
    },
    {
      id: 51,
      imgSrc: "images/Events/b1.jpg",
    },
    {
      id: 52,
      imgSrc: "images/Events/b2.jpg",
    },
    {
      id: 53,
      imgSrc: "images/Events/b4.jpg",
    },
    {
      id: 54,
      imgSrc: "images/Events/cd4.jpg",
    },
    {
      id: 55,
      imgSrc: "images/Events/b9.jpg",
    },
    {
      id: 56,
      imgSrc: "images/Events/b3.jpg",
    },
    {
      id: 57,
      imgSrc: "images/Events/bd15.jpg",
    },
    {
      id: 58,
      imgSrc: "images/Events/b5.jpg",
    },
    {
      id: 59,
      imgSrc: "images/Events/bd8.jpg",
    },
    {
      id: 60,
      imgSrc: "images/Events/sam6.jpg",
    },
    {
      id: 61,
      imgSrc: "images/Events/b11.jpg",
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
