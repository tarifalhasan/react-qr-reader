import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrCodeScanner = () => {
  const [data, setData] = useState('No result');
  const [facingMode, setFacingMode] = useState('environment');

  const handleToggleCamera = () => {
    setFacingMode(facingMode === 'environment' ? 'user' : 'environment');
  };

  return (
    <>
      <QrReader
        facingMode={facingMode}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <button
        className="my-10 z-50 bg-pink-500 text-lg"
        onClick={handleToggleCamera}
      >
        Toggle camera
      </button>
    </>
  );
};

export default QrCodeScanner;
