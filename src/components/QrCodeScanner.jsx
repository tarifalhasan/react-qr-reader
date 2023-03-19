import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
const QrCodeScanner = () => {
  const [data, setData] = useState('No result');
  console.log(data);
  return (
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
        }

        if (!!error) {
          console.info(error);
        }
      }}
      style={{ width: '100%' }}
      facingMode={'environment'}
    />
  );
};

export default QrCodeScanner;
