import ToggleItem from "../components/ToggleItem";

function Works() {
    
  // 動画をクリックしたら全画面にする関数
  const handleFullscreen = (e) => {
    const video = e.target;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Safari対応
    }
  };
  
  return (
    <div>
      <h2>作ったもの</h2>

      <ToggleItem title="家計簿アプリ">
        <p>自分の目標を設定して、少しずつ目標に近づいていけることを可視化できるアプリ。</p>
        <p>支出に対して満足度やムダだったかを設定して、「買ってよかった／ダメだった」を整理できます。</p>
      </ToggleItem>

      <h3>完成に至らなかったけど頑張ったもの</h3>

      <ToggleItem title="タワーディフェンス">
        <p>とあるサーバがウイルスの魔の手に落とされそうになっていた……</p>
        <p>あなたはセキュリティシステムとしてサーバを守る立場です。</p>
        {/* <p>作っていたものを画像や動画で紹介予定。開発の記録も残していきたい。</p> */}
        <video
        src="src/video/randomSpawn.mp4"
        controls
        width="480"
        poster="src/image/works/TD.png"
        style={{    width: "480px",
            aspectRatio: "16 / 9", // ✅ 比率固定（例：横16×縦9）
            objectFit: "cover",     // ✅ はみ出しをうまくトリミング
            backgroundColor: "black",
            cursor: "pointer"
        }}
        onClick={handleFullscreen}
      />
      </ToggleItem>
    </div>
  );
}

export default Works;
