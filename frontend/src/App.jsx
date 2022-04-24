import './App.css';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import Menu from './components/Menu';
import WalletAddress from './components/WalletAddress';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();
  console.log('Wallet status is ', status);
  console.log('Available connection types:', availableConnectTypes);

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect('EXTENSION')}
            className="connect-wallet-button cta-button"
          >
            Connect Wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>⚔ Goblin War ⚔</h1>
          <p>Join the fight!</p>
        </div>
        <WalletAddress />
      </header>

      {/* If not connected, show the goblin GIF! */}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src="https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif"
            alt="Goblin gif"
          />
        </div>
      )}

      {/* Show the menu after connection */}
      {status === WalletStatus.WALLET_CONNECTED && (
        <div className="game-menu-container">
          <Menu />
        </div>
      )}

      {renderConnectButton()}
    </main>
  );
}

export default App;
