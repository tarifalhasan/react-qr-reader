import './App.css';
import { useState } from 'react';
import QrCodeScanner from './components/QrCodeScanner';
import classNames from 'classnames';

function App() {
  const [isQrCode, setIsQrcode] = useState(false);
  const bodyClassNames = classNames({
    'bg-image-qr': isQrCode,
  });
  return (
    <div className={`-z-10 ${bodyClassNames}`}>
      <div className="content">
        <header className="flex justify-center py-16">
          <h2
            onClick={() => setIsQrcode(!isQrCode)}
            className="text-xl lg:text-4xl cursor-pointer text-[#28ABE2]  font-medium uppercase"
          >
            Suamarca
          </h2>
        </header>
        <main className="flex gap-y-8 flex-col items-center">
          <h2 className="text-lg lg:text-4xl font-bold text-white ">
            Confirme aqui seu pagamento
          </h2>
          <div className="w-[250px] relative qr-code-wrapper bg-white h-[230px] rounded-3xl">
            <div className="absolute inset-0">
              {isQrCode && <QrCodeScanner />}
            </div>
          </div>

          <p className="text-2xl font-semibold text-white">
            Aponte o QR Code de sua comanda para a camera
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
