import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function App2() {
  const [data, setData] = useState(null);
  const qrcodeRef = useRef(null);

  useEffect(() => {
    const html5Qrcode = new Html5Qrcode('qrcode-reader');
    html5Qrcode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: 250 },
      qrCodeMessage => {
        console.log(`QR code detected: ${qrCodeMessage}`);
        setData(qrCodeMessage);
      },
      errorMessage => {
        console.log(`Error: ${errorMessage}`);
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div id="qrcode-reader" ref={qrcodeRef}></div>
      <h2>Code:{data}</h2>
    </div>
  );
}
