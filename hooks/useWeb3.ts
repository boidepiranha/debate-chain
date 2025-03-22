import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';

export const useWeb3 = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!isConnected || !address) return;
      
      try {
        setLoading(true);
        // Aqui seria a lógica para buscar o saldo real de tokens DTC
        // Por enquanto, retornamos um valor simulado
        setBalance('500');
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [address, isConnected]);

  const sendTransaction = async (to: string, amount: string) => {
    if (!isConnected) throw new Error('Carteira não conectada');
    
    try {
      setLoading(true);
      // Aqui seria a lógica real para enviar tokens DTC
      // Esta é apenas uma simulação
      console.log(`Enviando ${amount} DTC para ${to}`);
      return true;
    } catch (error) {
      console.error('Erro ao enviar transação:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    address,
    isConnected,
    balance,
    loading,
    sendTransaction
  };
}; 