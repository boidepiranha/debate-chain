import React, { useState } from 'react';

interface Argument {
  text: string;
  time: string;
  duration: string;
  sources: number;
  side: 'blue' | 'red';
}

const DebateArena: React.FC = () => {
  const [debateArguments, setDebateArguments] = useState<Argument[]>([
    {
      text: 'A automação através da IA avançada possui potencial para substituir empregos em diversos setores, especialmente os que envolvem tarefas repetitivas como manufatura, transporte e atendimento ao cliente. Já estamos vendo os primeiros sinais dessa transição.',
      time: '14:23',
      duration: '1m 45s',
      sources: 2,
      side: 'blue'
    },
    {
      text: 'Historicamente, novas tecnologias eliminaram alguns trabalhos mas criaram outros. A IA será uma ferramenta de aumento de produtividade, não de substituição completa. Novos setores de trabalho irão emergir assim como ocorreu com revoluções anteriores.',
      time: '14:25',
      duration: '2m 10s',
      sources: 1,
      side: 'red'
    },
    {
      text: 'A diferença desta vez é a velocidade e o alcance da mudança. A IA já demonstra capacidade de realizar tarefas criativas e de tomada de decisões que anteriormente eram consideradas exclusivamente humanas.',
      time: '14:28',
      duration: '1m 22s',
      sources: 3,
      side: 'blue'
    }
  ]);

  const [newArgument, setNewArgument] = useState<string>('');

  const handleSubmit = () => {
    if (newArgument.trim()) {
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      setDebateArguments([
        ...debateArguments,
        {
          text: newArgument,
          time: timeStr,
          duration: '0m 05s',
          sources: 0,
          side: 'blue'
        }
      ]);
      
      setNewArgument('');
    }
  };

  return (
    <div className="debate-arena">
      <div className="debate-header">
        <div className="debate-topic">A Inteligência Artificial irá substituir a maioria dos empregos até 2040?</div>
      </div>
      
      <div className="debate-participants">
        <div className="participant participant-blue active">
          <div className="active-indicator"></div>
          <div className="participant-avatar avatar-blue">MC</div>
          <div className="participant-name">Maria Costa <span className="reputation-badge">94%</span></div>
          <div className="timer timer-blue">12:45</div>
          <div>Tempo restante</div>
        </div>
        
        <div className="participant participant-red">
          <div className="active-indicator"></div>
          <div className="participant-avatar avatar-red">JP</div>
          <div className="participant-name">João Pereira <span className="reputation-badge">88%</span></div>
          <div className="timer timer-red">14:12</div>
          <div>Tempo restante</div>
        </div>
      </div>
      
      <div className="debate-content">
        <div className="participant-arguments">
          {debateArguments.map((arg, index) => (
            <div key={index} className={`argument argument-${arg.side}`}>
              <p>{arg.text}</p>
              <div className="argument-meta">
                <span>{arg.time} - Tempo gasto: {arg.duration}</span>
                <span>Fontes: {arg.sources}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="debate-controls">
        <div>
          <button className="control-button button-blue">Adicionar Fonte</button>
          <button className="control-button button-neutral">Pausar Debate</button>
        </div>
        <div>
          <button className="control-button button-red">Encerrar Turno</button>
        </div>
      </div>
      
      <div className="debate-input">
        <textarea 
          className="argument-input" 
          placeholder="Digite seu argumento aqui..."
          value={newArgument}
          onChange={(e) => setNewArgument(e.target.value)}
        ></textarea>
        <button 
          className="send-button"
          onClick={handleSubmit}
        >Enviar</button>
      </div>
    </div>
  );
};

export default DebateArena; 