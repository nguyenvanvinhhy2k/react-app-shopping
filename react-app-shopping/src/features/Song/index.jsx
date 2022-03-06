import React from "react";

import Album from "./component/Album";

SongFeature.propTypes = {};

function SongFeature(props) {
  const songLists = [
    {
      id: 1,
      name: "Nhạc Mới Tết Này",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/e/f/b/defb50ebe2be08fd0eeae2a16ff497dc.jpg",
    },
    {
      id: 2,
      name: "Bộ 3 Kết Hợp",
      thumbnaiUrl:
        " https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/8/3/8/98386b8859140765c45221c400da09d1.jpg",
    },
    {
      id: 3,
      name: "Nhạc Mới Mỗi Ngày",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/9/9/5/89958cd466be0c02cc71d1f0579845a6.jpg",
    },
  ];
  return (
    <>
      <h1>Song List</h1>
      <Album songLists={songLists} />
    </>
  );
}

export default SongFeature;
