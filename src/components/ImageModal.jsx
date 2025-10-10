function ImageModal({ img, close }) {
  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <img
        src={img}
        alt="拡大画像"
        style={{ maxWidth: "90%", maxHeight: "90%" }}
      />
    </div>
  );
}

export default ImageModal;
