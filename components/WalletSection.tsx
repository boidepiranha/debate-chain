import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { modal } from '@/context';

interface WalletSectionProps {
  balance: string;
}

const WalletSection: React.FC<WalletSectionProps> = ({ balance }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // Formatação do endereço para exibição (abreviado)
  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '';
    return `${addr.substring(0, 4)}...${addr.substring(addr.length - 4)}`;
  };

  const handleConnect = async () => {
    if (isConnected) {
      disconnect();
    } else {
      modal.open();
    }
  };

  return (
    <div className="wallet-section">
      <div>
        {isConnected ? (
          <>
            <h3>Conectado: {formatAddress(address)}</h3>
            <p>Saldo: {balance} DTC</p>
          </>
        ) : (
          <h3>Carteira não conectada</h3>
        )}
      </div>
      <button 
        className="control-button button-blue" 
        onClick={handleConnect}
      >
        {isConnected ? 'Desconectar' : 'Conectar Carteira'}
      </button>
    </div>
  );
};

export default WalletSection; 