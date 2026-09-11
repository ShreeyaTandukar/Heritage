import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export const QRCodeGenerator = () => {
  return (
    <>
      <QRCode value="http://localhost:5173/site/bagh-bhairav" />
      {/* document.getElementById("qr-code"), */}
    </>
  );
};
