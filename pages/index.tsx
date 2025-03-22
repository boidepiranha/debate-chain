import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import WalletSection from '@/components/WalletSection';
import DebateArena from '@/components/DebateArena';
import CommunityFeatures from '@/components/CommunityFeatures';

export default function Home() {
  return (
    <>
      <Head>
        <title>DebateChain - Plataforma de Debates Web3</title>
        <meta name="description" content="Plataforma de Debates Descentralizada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="container">
        <WalletSection balance="500" />
        
        <DebateArena />
        
        <CommunityFeatures />
      </main>
    </>
  );
} 