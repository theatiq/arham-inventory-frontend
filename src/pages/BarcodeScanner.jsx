import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function BarcodeScanner({ onScan }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(
      (decodedText) => {
        try {
          const product = JSON.parse(decodedText); // decode JSON from barcode
          onScan(product);
        } catch (e) {
          console.log(e)
          alert("Invalid barcode data");
        }
      },
      (error) => {
        console.warn(error);
      }
    );
  }, [onScan]);

  return <div id="reader" className="w-full h-80 border"></div>;
}

export default BarcodeScanner;
