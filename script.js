// O CONTEÚDO DA SUA APRESENTAÇÃO VAI AQUI!
// Você só precisa editar esta parte.
const slides = [
    {
        apresentador: `
            <div class="slide slide-title active" style="display: flex;">
                <header>
                    <h1 class="text-8xl font-extrabold text-white leading-tight">Workshop</h1>
                    <p class="text-4xl text-indigo-200 mt-4">Como ser um Membro de GC Abençoador</p>
                </header>
            </div>
        `,
        espectador: `
            <div class="slide slide-title active" style="display: flex;">
                <header>
                    <h1 class="text-5xl font-extrabold text-white leading-tight">Workshop</h1>
                    <p class="text-2xl text-indigo-200 mt-2">Como ser um Membro de GC Abençoador</p>
                </header>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Quebra-Gelo Conetivo</h2>
                     <div class="bg-white p-10 rounded-2xl shadow-md text-left text-2xl space-y-4 text-slate-700">
                        <p><b class="font-semibold">Instrução:</b> "Pensem por um instante numa pessoa que, só por estar no vosso GC, o torna um lugar melhor."</p>
                        <p><b class="font-semibold">Partilhem ao lado:</b> "Que característica ou atitude essa pessoa tem que abençoa tanto o grupo?"</p>
                    </div>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Quebra-Gelo</h2>
                <p class="text-xl text-slate-600">Que característica ou atitude numa pessoa abençoa o seu grupo?</p>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-4xl">
                    <h2 class="text-6xl font-bold text-slate-800 mb-8">O Alicerce: Quem Nós Somos</h2>
                    <p class="text-3xl text-slate-600">O nosso alvo hoje é entender como um <b class="text-indigo-600">MEMBRO</b> pode ser <b class="text-indigo-600">ABENÇOADOR</b> dentro de um <b class="text-indigo-600">GC</b>.</p>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">O Alicerce: Quem Nós Somos</h2>
                <p class="text-xl text-slate-600">Como um <b class="text-indigo-600">MEMBRO</b> pode ser <b class="text-indigo-600">ABENÇOADOR</b> num <b class="text-indigo-600">GC</b>.</p>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">MEMBRO</h3>
                    <p class="text-3xl text-slate-700 mb-8">Parte interdependente de um corpo.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Pois, assim como em um corpo temos muitos membros... assim também nós, embora muitos, somos um só corpo em Cristo, e cada membro está ligado a todos os outros." (Romanos 12:4-5)
                    </blockquote>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                    <h3 class="text-2xl font-bold text-indigo-600 mb-4">MEMBRO</h3>
                    <p class="text-xl text-slate-700 mb-4">Parte interdependente de um corpo.</p>
                    <blockquote class="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                        "cada membro está ligado a todos os outros." (Romanos 12:4-5)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">ABENÇOADOR</h3>
                    <p class="text-3xl text-slate-700 mb-8">Um transmissor da bênção de Deus.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Farei de você um grande povo, e o abençoarei. Tornarei famoso o seu nome, e você será uma bênção." (Gênesis 12:2)
                    </blockquote>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                    <h3 class="text-2xl font-bold text-indigo-600 mb-4">ABENÇOADOR</h3>
                    <p class="text-xl text-slate-700 mb-4">Um transmissor da bênção de Deus.</p>
                    <blockquote class="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                        "e você será uma bênção." (Gênesis 12:2)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-3xl">
                    <h3 class="text-5xl font-bold text-indigo-600 mb-6">GC</h3>
                    <p class="text-3xl text-slate-700 mb-8">Um grupo que persevera em comunhão e cuidado mútuo.</p>
                    <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "Eles perseveravam na doutrina dos apóstolos e na comunhão [koinonia], no partir do pão e nas orações." (Atos 2:42)
                    </blockquote>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                    <h3 class="text-2xl font-bold text-indigo-600 mb-4">GC</h3>
                    <p class="text-xl text-slate-700 mb-4">Um grupo que persevera em comunhão e cuidado mútuo.</p>
                    <blockquote class="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                        "Eles perseveravam na ... comunhão [koinonia]..." (Atos 2:42)
                    </blockquote>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-4xl">
                     <h2 class="text-6xl font-bold text-slate-800 mb-8">Pilar 1: A Fonte da Bênção</h2>
                     <p class="text-3xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Não somos a fonte da bênção, somos o canal. Só podemos transmitir aquilo que já recebemos de Deus.</p>
                     <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600 mt-10">
                        "Toda boa dádiva e todo dom perfeito vêm do alto..." (Tiago 1:17)
                    </blockquote>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                     <h2 class="text-3xl font-bold text-slate-800 mb-6">Pilar 1: A Fonte da Bênção</h2>
                     <p class="text-xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Não somos a fonte, somos o canal.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Dinâmica: O Transbordar</h2>
                    <div class="bg-white p-10 rounded-2xl shadow-md text-2xl space-y-4 text-slate-700">
                        <p>Quando nos enchemos de Deus, que é a fonte de toda a bênção, o resultado natural é <b class="font-semibold">transbordar</b> sobre as pessoas ao nosso redor.</p>
                        <p class="mt-4 font-bold">Quer ser uma bênção? Encha-se de Deus.</p>
                    </div>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                 <h2 class="text-3xl font-bold text-slate-800 mb-6">Pilar 1: A Fonte da Bênção</h2>
                <p class="text-xl text-slate-600">Para transbordar, primeiro precisamos estar cheios.</p>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                 <div class="max-w-4xl">
                     <h2 class="text-6xl font-bold text-slate-800 mb-8">Pilar 2: A Atitude da Bênção</h2>
                     <p class="text-3xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Somos chamados a renovar a nossa mente, trocando a atitude de <b class="text-red-500">Consumidor</b> pela de <b class="text-green-500">Catalisador</b>.</p>
                     <blockquote class="text-2xl border-l-4 border-slate-300 pl-6 italic text-slate-600 mt-10">
                        "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente..." (Romanos 12:2)
                    </blockquote>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                 <div class="w-full max-w-md">
                     <h2 class="text-3xl font-bold text-slate-800 mb-6">Pilar 2: A Atitude da Bênção</h2>
                     <p class="text-xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> Mudar a nossa mentalidade de Consumidor para Catalisador.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
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
        `,
        espectador: `
            <div class="slide">
                 <div class="max-w-md w-full space-y-6">
                    <div class="bg-red-100 border border-red-200 p-4 rounded-xl">
                        <h3 class="text-2xl font-bold text-red-700">Consumidor</h3>
                        <p class="text-lg text-red-600 mt-1">"O que o GC faz por mim?"</p>
                    </div>
                    <div class="bg-green-100 border border-green-200 p-4 rounded-xl">
                        <h3 class="text-2xl font-bold text-green-700">Catalisador</h3>
                        <p class="text-lg text-green-600 mt-1">"Quem posso abençoar?"</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
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
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                    <h3 class="text-2xl font-semibold text-slate-700 mb-6">As 4 Fases do Crescimento</h3>
                    <div class="space-y-3 text-lg text-left text-slate-600 bg-white p-6 rounded-lg shadow-sm">
                        <p><b class="text-indigo-500">1. Receptor:</b> "Sou cuidado."</p>
                        <p><b class="text-indigo-500">2. Acomodado:</b> "Participo."</p>
                        <p><b class="text-indigo-500">3. Canal:</b> "Cuido dos outros."</p>
                        <p><b class="text-indigo-500">4. Multiplicador:</b> "Formo novos cuidadores."</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <div class="max-w-4xl">
                    <h2 class="text-5xl font-bold text-indigo-600 mb-8">Atividade: Consumidor vs. Catalisador</h2>
                    <div class="text-2xl space-y-6">
                        <p class="bg-white p-6 rounded-xl shadow-md"><b>Cenário 1:</b> Chega um visitante no GC, tímido e desconfortável.</p>
                        <p class="bg-white p-6 rounded-xl shadow-md"><b>Cenário 2:</b> Um membro partilha sobre uma dificuldade que tem enfrentado.</p>
                    </div>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide">
                <h2 class="text-3xl font-bold text-slate-800 mb-6">Atividade</h2>
                 <div class="text-lg space-y-4 w-full max-w-md">
                    <p class="bg-white p-4 rounded-lg shadow-sm"><b>Cenário 1:</b> Chega um visitante tímido.</p>
                    <p class="bg-white p-4 rounded-lg shadow-sm"><b>Cenário 2:</b> Um membro partilha uma dificuldade.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
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
        `,
        espectador: `
            <div class="slide">
                <div class="w-full max-w-md">
                     <h2 class="text-3xl font-bold text-slate-800 mb-6">Pilar 3: A Prática da Bênção</h2>
                     <p class="text-xl text-slate-600"><b class="text-indigo-600">Verdade Central:</b> O GC vive 24/7.</p>
                     <ul class="list-disc list-inside space-y-2 text-lg text-slate-600 mt-6 text-left">
                        <li><b class="font-semibold">Antes:</b> Orar para servir.</li>
                        <li><b class="font-semibold">Durante:</b> Estar presente.</li>
                        <li><b class="font-semibold">Depois:</b> Manter o contacto.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide bg-indigo-700 text-white">
                <div class="max-w-3xl">
                     <h2 class="text-6xl font-bold mb-6">Meu Compromisso</h2>
                     <p class="text-4xl text-indigo-200">A Missão de Um</p>
                     <p class="text-2xl text-indigo-200 bg-indigo-800/50 p-6 rounded-xl mt-10">Escolher **UMA** pessoa do meu GC para abençoar intencionalmente esta semana.</p>
                </div>
            </div>
        `,
        espectador: `
            <div class="slide bg-indigo-700 text-white">
                <div class="w-full max-w-md">
                     <h2 class="text-3xl font-bold mb-4">Meu Compromisso</h2>
                     <p class="text-xl text-indigo-200">A Missão de Um</p>
                     <p class="text-lg text-indigo-200 bg-indigo-800/50 p-4 rounded-lg mt-6">Escolher **UMA** pessoa do meu GC para abençoar intencionalmente esta semana.</p>
                </div>
            </div>
        `
    },
    {
        apresentador: `
            <div class="slide">
                <h2 class="text-7xl font-bold text-indigo-600">Obrigado!</h2>
                <p class="text-2xl text-slate-500 mt-6">&copy; 2025 | Workshop GC Abençoador</p>
            </div>
        `,
        espectador: `
            <div class="slide">
                <h2 class="text-4xl font-bold text-indigo-600">Obrigado!</h2>
                <p class="text-slate-500 mt-4">&copy; 2025 | Workshop GC Abençoador</p>
            </div>
        `
    }
];

// O resto do código (que você não precisa mexer) irá usar esta variável 'slides'.
