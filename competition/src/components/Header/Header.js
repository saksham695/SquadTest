import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
        justifyContent: "space-around",
        // position: "-webkit-sticky",
        top: 0,
        alignItems: "center",
        zIndex: 100,
        position: "fixed",
        width: "100%",
        flex: 1,
      }}
    >
      <span>
        <li style={{ listStyleType: "none" }}>Heading A</li>
      </span>
      <span>
        <li style={{ listStyleType: "none" }}>Heading A</li>
      </span>
      <span>
        <li style={{ listStyleType: "none" }}>Heading A</li>
      </span>
      <span>
        <li style={{ listStyleType: "none" }}>Heading A</li>
      </span>
      <span>
        <li style={{ listStyleType: "none" }}>Heading A</li>
      </span>
    </div>
  );
}
