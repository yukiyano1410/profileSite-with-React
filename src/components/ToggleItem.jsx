import { useState } from "react";

function ToggleItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "1em" }}>
      <h4
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {title} {open ? "▲" : "▼"}
      </h4>

      {open && (
        <div style={{ marginLeft: "1em" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ToggleItem;
