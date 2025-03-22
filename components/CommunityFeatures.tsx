import React from 'react';

const CommunityFeatures: React.FC = () => {
  return (
    <div className="community-features">
      <div className="feature-card">
        <h3>Votação da Comunidade</h3>
        <p>Atual preferência: <b>Maria Costa (58%)</b></p>
        <p>Participantes votando: 47</p>
        <p>Término da votação: 14:45</p>
        <button className="control-button button-blue">Votar</button>
      </div>
      
      <div className="feature-card">
        <h3>Apostas</h3>
        <p>Total em apostas: 1250 DTC</p>
        <p>Odds atuais:</p>
        <p>Maria Costa: 1.8x | João Pereira: 2.1x</p>
        <button className="control-button button-blue">Apostar</button>
      </div>
      
      <div className="feature-card">
        <h3>DAO Governança</h3>
        <p>Propostas ativas: 3</p>
        <p>Próxima votação: "Revisão dos limites de tempo"</p>
        <button className="control-button button-blue">Participar</button>
      </div>
    </div>
  );
};

export default CommunityFeatures; 