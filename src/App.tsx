import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSignMessage } from 'wagmi';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage() as any;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>INTMAX Wallet SDK + Rainbow Kit Library</h1>
      <div className="card">
        <ConnectButton />
      </div>

      <div className="card">
        <div className="button-container">
          <button disabled={isLoading} onClick={() => signMessage({
            message: 'gm wagmi frens',
          })}>
            Sign message
          </button>
          {isSuccess && <div>Signature: {data}</div>}
          {isError && <div>Error signing message, please connect wallet first!</div>}
        </div>
      </div>
    </>
  );
}

export default App;