# Site Poesia - "Sempre Aqui" (Always Here)

## Design Approach

Este é um site dedicado a um texto poético profundo sobre amor, permanência e compromisso. O design deve refletir a intimidade, elegância e profundidade emocional do conteúdo.

### Design Movement
**Minimalismo Contemplativo com Tipografia Refinada** — inspirado em poesia visual, design editorial de luxo e espaços de meditação. A abordagem prioriza respiro visual, hierarquia tipográfica clara e um senso de calma sofisticada.

### Core Principles
1. **Respiro e Espaço**: Abundância de whitespace para criar uma sensação de contemplação e permitir que o texto respire
2. **Tipografia como Protagonista**: A escolha de fontes e sua hierarquia contam a história antes das palavras
3. **Elegância Discreta**: Detalhes sutis (sombras suaves, transições delicadas) em vez de elementos chamadores
4. **Fluxo Narrativo**: O layout guia o leitor através de uma jornada emocional, não apenas apresenta texto

### Color Philosophy
- **Paleta Principal**: Tons neutros e quentes (off-white, bege, cinza claro) com acentos em um tom profundo e contemplativo
- **Cor Assinatura**: Um tom de azul-acinzentado profundo (slate/stone blue) que evoca confiança, calma e profundidade
- **Intenção Emocional**: Criar uma atmosfera de segurança, intimidade e permanência — como um refúgio

### Layout Paradigm
- Estrutura assimétrica com blocos de texto de largura variável
- Seções separadas por espaço generoso (não linhas divisórias)
- Alinhamento à esquerda com margens amplas à direita para criar movimento visual
- Uso estratégico de pull-quotes em destaque para quebrar o fluxo

### Signature Elements
1. **Tipografia em Camadas**: Combinação de serif elegante (títulos) com sans-serif limpo (corpo)
2. **Linhas Decorativas Sutis**: Pequenas linhas horizontais em tom claro para separar seções
3. **Espaçamento Rítmico**: Padrão consistente de espaço branco que cria um ritmo visual

### Interaction Philosophy
- Transições suaves e lentas (300-400ms) que refletem contemplação
- Hover effects sutis (mudança de cor, leve elevação)
- Scroll revelador: conteúdo emerge gradualmente conforme o usuário lê
- Nenhuma animação agressiva — tudo é calmo e intencional

### Animation
- **Entrance**: Fade-in suave (300ms) para parágrafos conforme entram em viewport
- **Hover**: Mudança de cor do texto com transição suave (150ms)
- **Scroll**: Parallax muito suave (não mais que 10-15% de movimento) para criar profundidade
- Respeitar `prefers-reduced-motion` — sem animações obrigatórias

### Typography System
- **Display Font**: "Playfair Display" ou similar (serif elegante) para títulos principais
- **Body Font**: "Lora" ou "Crimson Text" (serif legível) para o corpo do texto — evita sans-serif fria
- **Hierarchy**:
  - Títulos: 48-56px, peso 700, espaçamento de letra generoso
  - Subtítulos: 24-28px, peso 400
  - Corpo: 18-20px, peso 400, line-height 1.8
  - Pull-quotes: 22px, weight 600, itálico

### Brand Essence
**Posicionamento**: Um manifesto de amor incondicional e permanência — para quem busca segurança emocional e deseja expressar compromisso profundo.

**Personalidade**: Contemplativo, sincero, reconfortante, profundo

### Brand Voice
- Intimidade sem sentimentalismo excessivo
- Afirmações diretas e poderosas ("Eu fico")
- Tom conversacional mas eloquente
- Exemplo: "Porque amar você não é só dizer 'eu te amo'. É permanecer."

### Wordmark & Logo
Um símbolo minimalista: duas linhas que se encontram formando um coração aberto ou um ponto de encontro — representando a permanência e a conexão. Pode ser um simples símbolo geométrico em tom azul-acinzentado.

### Signature Brand Color
**Azul-Acinzentado Profundo** (aproximadamente `oklch(0.45 0.08 260)`) — cor que evoca confiança, calma, profundidade e segurança emocional.

---

## Implementação

- Header minimalista com logo e navegação sutil
- Hero section com primeira estrofe em tipografia grande
- Seções de conteúdo com espaçamento generoso
- Pull-quotes destacadas em cor assinatura
- Footer discreto com informações de contato
- Totalmente responsivo, com tipografia que escala elegantemente em mobile
