import React from "react";

const styles = {
  width: 40,
  height: 40,
  border: "1px solid #A08AF7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#B3B5BD",
};

const Cell = ({ data, flag, openCol }) => {
  const CellField = data.open ? (
    data.value
  ) : !data.open && data.flagged ? (
    <span> &#x2622;</span>
  ) : (
    ""
  );

  return (
    <div
      style={styles}
      onContextMenu={(e) => flag(e, data.x, data.y)}
      onClick={() => openCol(data.x, data.y)}
    >
      {CellField}
    </div>
  );
};

export default Cell;
