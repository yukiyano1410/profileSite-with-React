// src/components/NavBar.jsx
function NavBar({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("hobby")}>趣味</button>
      <button onClick={() => setPage("study")}>学んだこと</button>
      <button onClick={() => setPage("works")}>作ったもの</button>
    </nav>
  );
}

export default NavBar;
