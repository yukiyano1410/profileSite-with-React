function Hobby({ setModalImg }) {
  return (
    <div>
      <h2>趣味</h2>
      <p>ラノベ読んだりゲームしたりと娯楽を楽しんでいます。</p>
      <p>最近はWeb制作やReactの勉強も楽しいです。</p>

      <img
        src="src/image/hobby/monhan.jpg"
        alt="作品画像"
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => setModalImg("src/image/hobby/monhan.jpg")}
      />
    </div>
  );
}

export default Hobby;
