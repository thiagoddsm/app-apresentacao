// O CONTEÚDO DA SUA APRESENTAÇÃO VAI AQUI!
// Você só precisa editar esta parte.
const slides = [
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Boas-vindas e Oração (3 min)</h3>
                <p><strong>Nota para o Palestrante:</strong> Seja caloroso e genuíno. A sua energia inicial definirá o tom do workshop. Na oração, seja específico ao pedir que Deus quebre barreiras e abra mentes e corações.</p>
            </div>
        `,
        espectador: `
            <div class="slide slide-title-bg active" style="display: flex;">
                <header>
                    <h1 class="text-8xl font-extrabold text-white leading-tight">Workshop</h1>
                    <p class="text-4xl text-indigo-200 mt-4">Como ser um Membro de GC Abençoador</p>
                </header>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Quebra-Gelo Conetivo (5 min)</h3>
                <p><strong>Instrução:</strong> "Pensem por um instante numa pessoa que, só por estar no vosso GC, o torna um lugar melhor. Não precisam de dizer o nome. Agora, partilhem com a pessoa ao vosso lado: Que característica ou atitude essa pessoa tem que abençoa tanto o grupo?"</p>
                <p><strong>Nota para o Palestrante:</strong> Enquanto eles partilham, circule pela sala. Ouça as conversas. Isso dar-lhe-á uma noção do "clima" da sala. Ao pedir que 2-3 pessoas partilhem, valide as respostas dizendo coisas como "Exato, a gentileza é uma bênção poderosa" ou "Que incrível, a presença constante faz toda a diferença".</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Quebra-Gelo Conetivo</h2>
                     <div class="bg-white p-10 rounded-2xl shadow-md text-left text-2xl space-y-4 text-slate-700">
                        <p><b class="font-semibold">Instrução:</b> "Pensem por um instante numa pessoa que, só por estar no vosso GC, o torna um lugar melhor."</p>
                        <p><b class="font-semibold">Partilhem ao lado:</b> "Que característica ou atitude essa pessoa tem que abençoa tanto o grupo?"</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Construindo o Alicerce (12 min)</h3>
                <p>"Para entendermos como ser um membro abençoador, primeiro precisamos ter clareza sobre o que cada palavra significa, sobre quem nós somos."</p>
                <p>Este slide serve como introdução para as três definições seguintes. Prepare o terreno para a importância de definirmos a nossa identidade.</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                    <h2 class="text-6xl font-bold text-slate-800 mb-8">O Alicerce: Quem Nós Somos</h2>
                    <p class="text-3xl text-slate-600">O nosso alvo hoje é entender como um <b class="text-indigo-600">MEMBRO</b> pode ser <b class="text-indigo-600">ABENÇOADOR</b> dentro de um <b class="text-indigo-600">GC</b>.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Definindo "MEMBRO"</h3>
                <p>Leia Romanos 12:4-5 com convicção.</p>
                <p><strong>Nota para o Palestrante:</strong> Use a analogia de uma equipa desportiva ou uma orquestra. Uma peça fora do lugar ou desafinada compromete todo o conjunto. Enfatize a palavra "interdependente".</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">MEMBRO</h3>
                    <p class="text-3xl text-slate-700 mb-8">Parte interdependente de um corpo.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Pois, assim como em um corpo temos muitos membros... assim também nós, embora muitos, somos um só corpo em Cristo, e cada membro está ligado a todos os outros." (Romanos 12:4-5)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Definindo "ABENÇOADOR"</h3>
                <p>Leia Gênesis 12:2.</p>
                <p><strong>Nota para o Palestrante:</strong> Faça uma pausa dramática aqui. "Deus não disse 'Eu vou abençoar-te E tu vais ser abençoado'. Ele disse 'Eu vou abençoar-te, E TU SERÁS uma bênção'. A bênção não termina em nós; ela nos transforma no próprio veículo da bênção."</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">ABENÇOADOR</h3>
                    <p class="text-3xl text-slate-700 mb-8">Um transmissor da bênção de Deus.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Farei de você um grande povo, e o abençoarei. Tornarei famoso o seu nome, e você será uma bênção." (Gênesis 12:2)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Definindo "GC"</h3>
                <p>Leia Atos 2:42.</p>
                <p><strong>Nota para o Palestrante:</strong> Destaque a palavra "perseveravam". Não era algo casual. Havia intencionalidade e compromisso com a comunhão.</p>
                <p class="font-bold mt-4">A Conexão: "NOSSO OBJETIVO HOJE É CRIAR UMA RELAÇÃO PODEROSA ENTRE ESSAS PALAVRAS. COMO UM MEMBRO PODE SER ABENÇOADOR EM UM GC."</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">GC</h3>
                    <p class="text-3xl text-slate-700 mb-8">Um grupo que persevera em comunhão e cuidado mútuo.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Eles perseveravam na doutrina dos apóstolos e na comunhão [koinonia], no partir do pão e nas orações." (Atos 2:42)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Pilar 1: A Fonte da Bênção (25 min)</h3>
                <h4>A Fonte vs. o Canal (10 min)</h4>
                <p>Leia Tiago 1:17.</p>
                <p><strong>Nota para o Palestrante:</strong> Use uma linguagem muito clara aqui. "Se tentarmos abençoar com o nosso próprio esforço, o que entregamos é limitado, falho e exaustivo. Mas quando somos um canal, o que flui através de nós é ilimitado, perfeito e vem de uma fonte que nunca se esgota." Seja apaixonado por esta verdade.</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                     <h2 class="text-6xl font-bold text-slate-800 mb-8">Pilar 1: A Fonte da Bênção</h2>
                     <p class="text-3xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Não somos a fonte da bênção, somos o canal. Só podemos transmitir aquilo que já recebemos de Deus.</p>
                     <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600 mt-10">
                        "Toda boa dádiva e todo dom perfeito vêm do alto..." (Tiago 1:17)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Dinâmica do Copo de Água (15 min)</h3>
                <p><strong>Nota para o Palestrante:</strong> Execute a dinâmica com calma. O impacto está na aplicação, não na dinâmica em si. Ao fazer o debriefing, olhe nos olhos das pessoas. "Muitos de nós vivemos as nossas vidas espirituais como este copo vazio, ou talvez com apenas algumas gotas no fundo. E perguntamo-nos por que não estamos a impactar ninguém." Conecte diretamente a falta de impacto com a falta de "enchimento". Termine com uma pergunta retórica: "Quão cheio está o seu copo hoje?".</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Dinâmica: O Transbordar</h2>
                    <div class="bg-white p-10 rounded-2xl shadow-md text-2xl space-y-4 text-slate-700">
                        <p>Quando nos enchemos de Deus, que é a fonte de toda a bênção, o resultado natural é <b class="font-semibold">transbordar</b> sobre as pessoas ao nosso redor.</p>
                        <p class="mt-4 font-bold">Quer ser uma bênção? Encha-se de Deus.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Pilar 2: A Atitude da Bênção (25 min)</h3>
                <h4>Renovando a Mente (8 min)</h4>
                <p>Leia Romanos 12:2.</p>
                <p><strong>Nota para o Palestrante:</strong> Seja ousado aqui. "Vamos ser honestos. Quantos de nós já saímos de uma reunião de GC a pensar: 'Hoje não foi muito bom para mim'? Esta pergunta revela um coração de consumidor." Contraste fortemente as perguntas do consumidor ("O que eu ganho?") com as do catalisador ("Como posso servir?").</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                 <div class="max-w-4xl">
                     <h2 class="text-6xl font-bold text-slate-800 mb-8">Pilar 2: A Atitude da Bênção</h2>
                     <p class="text-3xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Somos chamados a renovar a nossa mente, trocando a atitude de <b class="text-red-500">Consumidor</b> pela de <b class="text-green-500">Catalisador</b>.</p>
                     <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600 mt-10">
                        "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente..." (Romanos 12:2)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                 <h3>As Duas Mentalidades</h3>
                 <p>Use este slide visual para reforçar o contraste entre as duas atitudes. Dê tempo para que as pessoas leiam e internalizem as duas perguntas. Pergunte: "Qual destas duas perguntas tem sido mais frequente no seu coração ao ir para o GC?".</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                 <div class="max-w-5xl w-full grid grid-cols-2 gap-10">
                    <div class="bg-red-100 border-2 border-red-300 p-8 rounded-2xl">
                        <h3 class="text-3xl font-bold text-red-700">Consumidor</h3>
                        <p class="text-2xl text-red-600 mt-4">"O que este GC pode fazer por mim?"</p>
                    </div>
                    <div class="bg-green-100 border-2 border-green-300 p-8 rounded-2xl">
                        <h3 class="text-3xl font-bold text-green-700">Catalisador</h3>
                        <p class="text-2xl text-green-600 mt-4">"Quem posso abençoar neste GC?"</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>As 4 Fases do Crescimento no GC (7 min)</h3>
                <p><strong>Nota para o Palestrante:</strong> Apresente as fases sem julgamento. "Não há nada de errado em ser um Receptor. Todos nós começamos aí. O problema é montar acampamento na Fase 1 ou 2." Desafie-os amorosamente a autoavaliar-se e a desejar o crescimento.</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-semibold text-slate-700 mb-10">As 4 Fases do Crescimento:<br>Onde me vejo hoje?</h3>
                    <div class="space-y-4 text-2xl text-left text-slate-600 bg-white p-8 rounded-xl shadow-md">
                        <p><b class="text-indigo-500">1. O Receptor:</b> "Eu sou cuidado."</p>
                        <p><b class="text-indigo-500">2. O Acomodado:</b> "Eu participo."</p>
                        <p><b class="text-indigo-500">3. O Canal de Bênção:</b> "Eu cuido dos outros."</p>
                        <p><b class="text-indigo-500">4. O Multiplicador:</b> "Eu ajudo a formar novos catalisadores."</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Atividade: Consumidor vs. Catalisador (10 min)</h3>
                <p><strong>Nota para o Palestrante:</strong> Ao ouvir as conclusões dos grupos, reforce o ponto principal: a diferença não está na complexidade da ação, mas na iniciativa do coração. O catalisador age primeiro porque a sua mente já está sintonizada na frequência do serviço.</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Atividade: Consumidor vs. Catalisador</h2>
                    <div class="text-2xl space-y-6">
                        <p class="bg-white p-6 rounded-xl shadow-md"><b>Cenário 1:</b> Chega um visitante no GC, tímido e desconfortável.</p>
                        <p class="bg-white p-6 rounded-xl shadow-md"><b>Cenário 2:</b> Um membro partilha sobre uma dificuldade que tem enfrentado.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                 <h3>Pilar 3: A Prática da Bênção (10 min)</h3>
                 <p><strong>Nota para o Palestrante:</strong> Este é o momento de tornar tudo extremamente prático. Use exemplos concretos. "Antes: não é apenas orar, é mandar uma mensagem no grupo a dizer 'Estou a orar por nossa reunião de hoje!'. Durante: não é só partilhar, é ver aquele membro mais quieto e perguntar 'E tu, o que pensas sobre isto?'. Depois: não é só pensar 'foi bom', é mandar uma mensagem para o anfitrião a agradecer pelo espaço e pelo lanche." Conecte estas ações ao conceito de ser um "bom administrador" (oikonomos).</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <div class="max-w-4xl">
                     <h2 class="text-6xl font-bold text-slate-800 mb-8">Pilar 3: A Prática da Bênção</h2>
                     <p class="text-3xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> O GC é um corpo que vive 24/7. A bênção acontece <b class="text-indigo-600">antes, durante e depois</b> da reunião.</p>
                     <ul class="list-none space-y-4 text-2xl text-slate-600 mt-10 text-center mx-auto max-w-4xl grid grid-cols-3 gap-6">
                        <li class="bg-white p-6 rounded-xl shadow-md"><b class="block text-3xl font-bold text-indigo-500 mb-2">ANTES</b>Orar e preparar o coração para servir.</li>
                        <li class="bg-white p-6 rounded-xl shadow-md"><b class="block text-3xl font-bold text-indigo-500 mb-2">DURANTE</b>Estar presente, engajado e usar os dons.</li>
                        <li class="bg-white p-6 rounded-xl shadow-md"><b class="block text-3xl font-bold text-indigo-500 mb-2">DEPOIS</b>Cuidar, orar e manter o contacto.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Conclusão e Comissionamento (10 min)</h3>
                <h4>O Desafio da Semana: A Missão de Um (4 min)</h4>
                <p><strong>Nota para o Palestrante:</strong> Apresente este desafio não como um "trabalho de casa", mas como uma oportunidade emocionante de colocar a fé em ação. "Não se trata de fazer algo grandioso. Trata-se de um ato intencional de amor que pode mudar a semana de alguém."</p>
            </div>
        `,
        espectador: `
            <div class="slide slide-title-bg text-white" style="display: flex;">
                <div class="max-w-3xl">
                     <h2 class="text-6xl font-bold mb-6">Meu Compromisso</h2>
                     <p class="text-4xl text-indigo-200">A Missão de Um</p>
                     <p class="text-2xl text-indigo-200 bg-indigo-800/50 p-6 rounded-xl mt-10">Escolher **UMA** pessoa do meu GC para abençoar intencionalmente esta semana.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="prose lg:prose-xl">
                <h3>Encerramento e Oração Final</h3>
                <h4>A Grande Recapitulação (3 min)</h4>
                <p><strong>Nota para o Palestrante:</strong> Recapitule os 3 pilares de forma enérgica e memorável. Use as palavras-chave: IDENTIDADE, CANAL, CATALISADOR.</p>
                <h4>Oração Final de Comissionamento (3 min)</h4>
                <p><strong>Nota para o Palestrante:</strong> Este não é um encerramento, é um envio. Ore com autoridade. Peça ao Espírito Santo que transforme a informação em revelação e a revelação em ação. Comissione-os a saírem daquela sala não como participantes de um workshop, mas como agentes de bênção comissionados por Deus.</p>
            </div>
        `,
        espectador: `
            <div class="slide" style="display: flex;">
                <h2 class="text-7xl font-bold text-indigo-600">Obrigado!</h2>
                <p class="text-2xl text-slate-500 mt-6">&copy; 2025 | Workshop GC Abençoador</p>
            </div>
        `
    }
];

// O resto do código (que você não precisa mexer) irá usar esta variável 'slides'.

