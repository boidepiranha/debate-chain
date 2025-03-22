# DebateChain - Plataforma de Debates Web3

DebateChain é uma plataforma de debates descentralizada que utiliza tecnologia blockchain para criar um ambiente transparente, confiável e engajante para discussões estruturadas.

## Funcionalidades

- **Debates Estruturados**: Arena de debates com cronômetro e turnos organizados
- **Integração Web3**: Conexão de carteiras e uso de tokens DTC
- **Sistema de Reputação**: Participantes possuem badges de reputação com base em seu histórico
- **Votação da Comunidade**: Participação ativa da audiência através de votação
- **Apostas Descentralizadas**: Sistema de apostas em resultados de debates
- **Governança DAO**: Decisões sobre a plataforma tomadas pela comunidade

## Tecnologias

- **Frontend**: Next.js, React, TypeScript
- **Web3**: ethers.js, Web3Modal
- **Deployment**: Vercel

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```
NEXT_PUBLIC_WC_PROJECT_ID=SEU_PROJECT_ID_AQUI
```

## Próximos Passos

- Desenvolvimento de smart contracts para tokens DTC
- Implementação do sistema de reputação na blockchain
- Mecanismo de apostas utilizando smart contracts
- Sistema de governança DAO 