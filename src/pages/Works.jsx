import ToggleItem from "../components/ToggleItem";

function Works({setModalImg}) {  
  return (
    <div>
      <h2>作ったもの</h2>

      <ToggleItem title="家計簿アプリ">
        <p>自分の目標を設定して、少しずつ目標に近づいていけることを可視化できるアプリ。</p>
        <p>支出に対して満足度やムダだったかを設定して、「買ってよかった／ダメだった」を整理できます。</p>
        <img src="src/image/hobby/monhan.jpg" alt="作品画像" style={{ width: "300px", cursor: "pointer" }}
          onClick={() => setModalImg("src/image/hobby/monhan.jpg")}
        />
      </ToggleItem>

      <h3>完成に至らなかったけど頑張ったもの</h3>

      <ToggleItem title="サーバデフェンス">
        <p>とあるサーバがウイルスの魔の手に落とされそうになっていた……</p>
        <p>セキュリティシステムとしてサーバを守るのがあなたのお仕事です</p>
        {/* <p>作っていたものを画像や動画で紹介予定。開発の記録も残していきたい。</p> */}
        <ToggleItem title="作るにあたって勉強したこと（動画付き）">
          <p>敵のランダムスポーンのためのもの 球がある部分からだけ敵が出てくるようになっている</p>
          <video src="src/video/works/randomSpawn.mp4"
          controls
            width="480"
            poster="src/image/works/TD.png" //サムネ
            style={{width: "480px",
                aspectRatio: "16 / 9", // ✅ 比率固定（例：横16×縦9）
                objectFit: "cover",     // ✅ はみ出しをうまくトリミング
                backgroundColor: "black",
                cursor: "pointer"
            }}
        />
        </ToggleItem>
      </ToggleItem>
    </div>
  );
}

export default Works;
