import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

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
    <div className="relative overflow-hidden">
      <div id="qrcode-reader" className="mx-auto " ref={qrcodeRef}></div>
      <div className=" absolute inset-0 text-center py-5">
        <img
          className="block w-[200px] lg:w-[320px] mx-auto object-cover "
          src="/logo.webp"
          alt=""
        />
        <h2 className="text-lg lg:pt-16 lg:text-4xl font-bold text-white ">
          Confirme aqui seu pagamento
        </h2>
      </div>
      <div className=" absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-[80%] top-[90%]">
        <h4 className="text-lg lg:text-2xl text-center  font-semibold text-white">
          Aponte o QR Code de sua comanda para a camera : {data}
        </h4>
      </div>
    </div>
  );
}
