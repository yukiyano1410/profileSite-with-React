import { useState } from "react";
import NavBar from "./components/NavBar";
import Hobby from "./pages/Hobby";
import Study from "./pages/Study";
import Works from "./pages/Works";
import ImageModal from "./components/ImageModal";

function App() {
  const [page, setPage] = useState("hobby");
  const [modalImg, setModalImg] = useState(null); // モーダル画像状態

  return (
    <div>
      <h1>ようこそ、僕の始まりの場所へ</h1>
      <p>学びの軌跡を残す自己紹介サイト</p>

      <NavBar setPage={setPage} />

      {page === "hobby" && <Hobby setModalImg={setModalImg} />}
      {page === "study" && <Study />}
      {page === "works" && <Works />}

      {modalImg && (
        <ImageModal img={modalImg} close={() => setModalImg(null)} />
      )}
    </div>
  );
}

export default App;
