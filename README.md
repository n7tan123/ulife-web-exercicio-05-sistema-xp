# 05. Sistema de pontuação

**Rascunho assistido para estudo.** Revise, execute e explique o código antes de usar em atividade acadêmica. Este exemplo não declara autoria independente do estudante. A publicação do código não equivale à entrega da atividade acadêmica.

## Executar
Abra `index.html` no navegador, mantendo os arquivos desta pasta juntos. Funciona offline; não exige instalação, servidor, dependências ou conta.

## Requisitos cobertos
- Botões com textos exatos “+10 XP” e “-5 XP”
- Pontuação atual em `output`
- Atualização imediata sem recarregar

## O que observar no código
- `let` permite modificar o estado
- `+=` soma e `-=` subtrai
- `renderScore` evita repetir a mesma atualização em cada botão

## Testes manuais
1. Comece em 0; clique +10 duas vezes: 20
2. Clique -5: 15; clique Zerar: 0
3. Clique -5 a partir de 0: -5
4. Recarregue a página: 0

## Alteração sugerida para aprender
Personalize nomes, cores e conteúdo; explique em suas palavras a função de cada elemento, seletor e evento usado. Teste novamente depois de alterar.

## Créditos e limites
Os exercícios 1 e 3 usam referências a obras existentes: Link (Nintendo) e The Mandalorian (Star Wars). Link e The Legend of Zelda pertencem à Nintendo; Star Wars e The Mandalorian pertencem à Lucasfilm/Disney. A representação SVG de Link foi desenhada para o exemplo e não é arte oficial. As demais artes e personagens Aurora são originais. Não há dados pessoais, rastreamento ou carregamento externo; links de referência só abrem quando clicados. Menções no quiz não usam imagens ou logos de franquias.

## Estado da verificação
Em 02/10/2026, o conjunto dos nove exercícios passou por 68 verificações de lógica em DOM simulado, verificações de sintaxe dos seis scripts e de estrutura e referências locais. Testes visuais e comportamentos nativos de navegador ainda não foram concluídos: o navegador de teste não iniciou e a prévia local não abriu. Os testes automatizados não substituem os testes manuais acima.
