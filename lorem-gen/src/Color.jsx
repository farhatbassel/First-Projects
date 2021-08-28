import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

export default function Color({ rgb, weight, index }) {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  const hex = rgbToHex(...rgb);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className={"alert"}>copied to clipboard</p>}
    </article>
  );
}
