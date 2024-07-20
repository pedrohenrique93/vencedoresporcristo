// Função otimizada para calcular o índice baseado na data atual com cache
function calcularIndicePorData() {
    const today = new Date().toDateString();
    if (cachedData !== today) {
        const baseDate = new Date('2023-01-01');
        const difference = new Date() - baseDate;
        const oneDay = 24 * 60 * 60 * 1000;
        cachedIndice = Math.floor(difference / oneDay);
        cachedData = today;
    }
    return cachedIndice;
}

// Função para selecionar um versículo baseado no índice
function selecionarVersiculo(versiculos, indice) {
    return versiculos[indice % versiculos.length];
}

// Função otimizada para obter e exibir o versículo do dia
async function versiculoDoDia() {
    if (verses.length === 0) {
        console.log('Nenhum versículo disponível para exibição.');
        return;
    }
    const indice = calcularIndicePorData();
    const versiculo = selecionarVersiculo(verses, indice);
    const versiculoFormatado = `${versiculo.versiculo} (${versiculo.localizacao})`;

    if (!cachedElementoVersiculo) {
        cachedElementoVersiculo = document.getElementById('verse-of-the-day');
    }
    if (cachedElementoVersiculo) {
        cachedElementoVersiculo.textContent = versiculoFormatado;
    } else {
        console.error('Elemento para exibir o versículo do dia não encontrado.');
    }
}


// Array de versículos integrado diretamente
const verses = [
    {
        "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
        "localizacao": "2 Coríntios 9:7"
      },
      {
        "versiculo": "Pode um homem roubar de Deus? Contudo vocês estão me roubando. E ainda perguntam: 'Como é que te roubamos?' Nos dízimos e nas ofertas.",
        "localizacao": "Malaquias 3:8"
      },
      {
        "versiculo": "Há quem dê generosamente, e vê aumentar suas riquezas; outros retêm o que deveriam dar, e caem na pobreza.",
        "localizacao": "Provérbios 11:24"
      },
      {
        "versiculo": "Então, uma viúva pobre chegou-se e colocou duas pequeninas moedas de cobre, de muito pouco valor. Chamando a si os seus discípulos, Jesus declarou: \"Afirmo que esta viúva pobre colocou na caixa de ofertas mais do que todos os outros. Todos deram do que lhes sobrava; mas ela, da sua pobreza, deu tudo o que possuía para viver.\"",
        "localizacao": "Marcos 12:42-44"
      },
      {
        "versiculo": "Todos os dízimos da terra - seja dos cereais, seja das frutas - pertencem ao Senhor; são consagrados ao Senhor.",
        "localizacao": "Levítico 27:30"
      },
      {
        "versiculo": "Lembrem-se: aquele que semeia pouco também colherá pouco, e aquele que semeia com fartura também colherá fartamente. Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
        "localizacao": "2 Coríntios 9:6-7"
      },
      {
        "versiculo": "Deem e será dado a vocês: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem também será usada para medir vocês.",
        "localizacao": "Lucas 6:38"
      },
      {
        "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações; os seus celeiros ficarão plenamente cheios, e os seus barris transbordarão de vinho.",
        "localizacao": "Provérbios 3:9-10"
      },
      {
        "versiculo": "Em tudo o que fiz, mostrei a vocês que mediante trabalho árduo devemos ajudar os fracos, lembrando as palavras do próprio Senhor Jesus, que disse: 'Há maior felicidade em dar do que em receber'.",
        "localizacao": "Atos dos Apóstolos 20:35"
      },
      {
        "versiculo": "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
        "localizacao": "Mateus 6:33"
      },
      {
        "versiculo": "Separem o dízimo de tudo o que a terra produzir anualmente.",
        "localizacao": "Deuteronômio 14:22"
      },
      {
        "versiculo": "Pois onde estiver o seu tesouro, aí também estará o seu coração.",
        "localizacao": "Mateus 6:21"
      },
      {
        "versiculo": "Rendam graças ao Senhor, pois ele é bom; o seu amor dura para sempre.",
        "localizacao": "1 Crônicas 16:34"
      },
      {
        "versiculo": "Damos-te graças, ó Deus, damos-te graças, pois perto está o teu nome;todos falam dos teus feitos maravilhosos.",
        "localizacao": "Salmos 75:1"
      },
      {
        "versiculo": "Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",
        "localizacao": "Salmos 7:17"
      },
      {
        "versiculo": "Tudo isso é para o bem de vocês, para que a graça, que está alcançando um número cada vez maior de pessoas, faça que transbordem as ações de graças para a glória de Deus.",
        "localizacao": "2 Coríntios 4:15"
      },
      {
        "versiculo": "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
        "localizacao": "1 Tessalonicenses 5:18"
      },
      {
        "versiculo": "Ofereça a Deus em sacrifício a sua gratidão, cumpra os seus votos para com o Altíssimo,",
        "localizacao": "Salmos 50:14"
      },
      {
        "versiculo": "Ofereça a Deus em sacrifício a sua gratidão, cumpra os seus votos para com o Altíssimo",
        "localizacao": "Efésios 5:20"
      },
      {
        "versiculo": "Antes de tudo, recomendo que se façam súplicas, orações, intercessões e ações de graças por todos os homens;",
        "localizacao": "1 Timóteo 2:1"
      },
      {
        "versiculo": "Vocês serão enriquecidos de todas as formas, para que possam ser generosos em qualquer ocasião e, por nosso intermédio, a sua generosidade resulte em ação de graças a Deus.",
        "localizacao": "2 Coríntios 9:11"
      },
      {
        "versiculo": "Dou graças a Cristo Jesus, nosso Senhor, que me deu forças e me considerou fiel, designando-me para o ministério,",
        "localizacao": "1 Timóteo 1:12"
      },
      {
        "versiculo": "enraizados e edificados nele, firmados na fé, como foram ensinados, transbordando de gratidão.",
        "localizacao": "Colossenses 2:7"
      },
      {
        "versiculo": "dando graças ao Pai, que nos tornou dignos de participar da herança dos santos no reino da luz.",
        "localizacao": "Colossenses 1:12"
      },
      {
        "versiculo": "Deem graças ao Senhor, clamem pelo seu nome, divulguem entre as nações o que ele tem feito.",
        "localizacao": "1 Crônicas 16:8"
      },
      {
        "versiculo": "Não haja obscenidade, nem conversas tolas, nem gracejos imorais, que são inconvenientes, mas, ao invés disso, ações de graças.",
        "localizacao": "Efésios 5:4"
      },
      {
        "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
        "localizacao": "Filipenses 4:6"
      },
      {
        "versiculo": "Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças,",
        "localizacao": "1 Timóteo 4:4"
      },
      {
        "versiculo": "Então nós, o teu povo, as ovelhas das tuas pastagens, para sempre te louvaremos; de geração em geração cantaremos os teus louvores.",
        "localizacao": "Salmos 79:13"
      },
      {
        "versiculo": "dizendo: \"Graças te damos, Senhor Deus todo-poderoso, que és e que eras, porque assumiste o teu grande poder e começaste a reinar.",
        "localizacao": "Apocalipse 11:17"
      },
      {
        "versiculo": "Mudaste o meu pranto em dança, a minha veste de lamento em veste de alegria, para que o meu coração cante louvores a ti e não se cale. Senhor, meu Deus, eu te darei graças para sempre.",
        "localizacao": "Salmos 30:11-12"
      },
      {
        "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
        "localizacao": "Salmos 100:4"
      },
      {
        "versiculo": "Mas regozijem-se e alegrem-se em ti todos os que te buscam; digam sempre os que amam a tua salvação: \"Como Deus é grande!\"",
        "localizacao": "Salmos 70:4"
      },
      {
        "versiculo": "Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos.",
        "localizacao": "Colossenses 3:15"
      },
      {
        "versiculo": "Mas eu, com um cântico de gratidão, oferecerei sacrifício a ti. O que eu prometi cumprirei totalmente. A salvação vem do Senhor\".",
        "localizacao": "Jonas 2:9"
      },
      {
        "versiculo": "Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
        "localizacao": "1 Timóteo 4:4-5"
      },
      {
        "versiculo": "Louvarei o nome de Deus com cânticos e proclamarei sua grandeza com ações de graças;",
        "localizacao": "Salmos 69:30"
      },
      {
        "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
        "localizacao": "Deuteronômio 31:6"
      },
      {
        "versiculo": "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
        "localizacao": "Josué 1:9"
      },
      {
        "versiculo": "Espere no Senhor. Seja forte! Coragem! Espere no Senhor.",
        "localizacao": "Salmos 27:14"
      },
      {
        "versiculo": "Não tenha medo, pois eu estou com você, do oriente trarei seus filhos e do ocidente ajuntarei você.",
        "localizacao": "Isaías 43:5"
      },
      {
        "versiculo": "E acrescentou: \"Seja forte e corajoso! Mãos ao trabalho! Não tenha medo nem desanime, pois Deus, o Senhor, o meu Deus, está com você. Ele não o deixará nem o abandonará até que se termine toda a construção do templo do Senhor.",
        "localizacao": "1 Crônicas 28:20"
      },
      {
        "versiculo": "O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?",
        "localizacao": "Salmos 27:1"
      },
      {
        "versiculo": "Mas eu, quando estiver com medo, confiarei em ti. Em Deus, cuja palavra eu louvo, em Deus eu confio e não temerei. Que poderá fazer-me o simples mortal?",
        "localizacao": "Salmos 56:3-4"
      },
      {
        "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
        "localizacao": "Isaías 41:10"
      },
      {
        "versiculo": "Não tenha medo; você não sofrerá vergonha. Não tema o constrangimento; você não será humilhada. Você esquecerá a vergonha de sua juventude e não se lembrará mais da humilhação de sua viuvez.",
        "localizacao": "Isaías 54:4"
      },
      {
        "versiculo": "Não tenham medo dos que matam o corpo, mas não podem matar a alma. Antes, tenham medo daquele que pode destruir tanto a alma como o corpo no inferno.",
        "localizacao": "Mateus 10:28"
      },
      {
        "versiculo": "Pois vocês não receberam um espírito que os escravize para novamente temerem, mas receberam o Espírito que os torna filhos por adoção, por meio do qual clamamos: \"Aba, Pai\".",
        "localizacao": "Romanos 8:15"
      },
      {
        "versiculo": "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
        "localizacao": "1 Coríntios 16:13"
      },
      {
        "versiculo": "Mas temos esse tesouro em vasos de barro, para mostrar que o poder que a tudo excede provém de Deus, e não de nós. De todos os lados somos pressionados, mas não desanimados; ficamos perplexos, mas não desesperados; somos perseguidos, mas não abandonados; abatidos, mas não destruídos. Trazemos sempre em nosso corpo o morrer de Jesus, para que a vida de Jesus também seja revelada em nosso corpo. Pois nós, que estamos vivos, somos sempre entregues à morte por amor a Jesus, para que a sua vida também se manifeste em nosso corpo mortal.",
        "localizacao": "2 Coríntios 4:7-11"
      },
      {
        "versiculo": "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
        "localizacao": "2 Timóteo 1:7"
      },
      {
        "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\". Podemos, pois, dizer com confiança: \"O Senhor é o meu ajudador, não temerei. O que me podem fazer os homens?\"",
        "localizacao": "Hebreus 13:5-6"
      },
      {
        "versiculo": "Quem há de maltratá-los, se vocês forem zelosos na prática do bem? Todavia, mesmo que venham a sofrer porque praticam a justiça, vocês serão felizes. \"Não temam aquilo que eles temem, não fiquem amedrontados.\"",
        "localizacao": "1 Pedro 3:13-14"
      },
      {
        "versiculo": "No amor não há medo; ao contrário o perfeito amor expulsa o medo, porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor.",
        "localizacao": "1 João 4:18"
      },
      {
        "versiculo": "Consequentemente, a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.",
        "localizacao": "Romanos 10:17"
      },
      {
        "versiculo": "Porque vivemos por fé, e não pelo que vemos.",
        "localizacao": "2 Coríntios 5:7"
      },
      {
        "versiculo": "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus; não por obras, para que ninguém se glorie.",
        "localizacao": "Efésios 2:8-9"
      },
      {
        "versiculo": "Todavia, àquele que não trabalha, mas confia em Deus, que justifica o ímpio, sua fé lhe é creditada como justiça.",
        "localizacao": "Romanos 4:5"
      },
      {
        "versiculo": "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
        "localizacao": "Hebreus 11:1"
      },
      {
        "versiculo": "Ele respondeu: \"Porque a fé que vocês têm é pequena. Eu asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda, poderão dizer a este monte: 'Vá daqui para lá', e ele irá. Nada será impossível para vocês.",
        "localizacao": "Mateus 17:20"
      },
      {
        "versiculo": "Jesus respondeu: \"Eu asseguro que, se vocês tiverem fé e não duvidarem, poderão fazer não somente o que foi feito à figueira, mas também dizer a este monte: 'Levante-se e atire-se no mar', e assim será feito.",
        "localizacao": "Mateus 21:21"
      },
      {
        "versiculo": "Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.",
        "localizacao": "Hebreus 11:6"
      },
      {
        "versiculo": "Jesus respondeu: \"Mulher, grande é a sua fé! Seja conforme você deseja\". E, naquele mesmo instante, a sua filha foi curada.",
        "localizacao": "Mateus 15:28"
      },
      {
        "versiculo": "Alguns homens trouxeram-lhe um paralítico, deitado em sua maca. Vendo a fé que eles tinham, Jesus disse ao paralítico: \"Tenha bom ânimo, filho; os seus pecados estão perdoados\".",
        "localizacao": "Mateus 9:2"
      },
      {
        "versiculo": "fé e conhecimento que se fundamentam na esperança da vida eterna, a qual o Deus que não mente prometeu antes dos tempos eternos.",
        "localizacao": "Tito 1:2"
      },
      {
        "versiculo": "pois vocês estão alcançando o alvo da sua fé, a salvação das suas almas.",
        "localizacao": "1 Pedro 1:9"
      },
      {
        "versiculo": "O que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé.",
        "localizacao": "1 João 5:4"
      },
      {
        "versiculo": "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
        "localizacao": "1 Coríntios 16:13"
      },
      {
        "versiculo": "Você, porém, homem de Deus, fuja de tudo isso e busque a justiça, a piedade, a fé, o amor, a perseverança e a mansidão.",
        "localizacao": "1 Timóteo 6:11"
      },
      {
        "versiculo": "Resistam-lhe, permanecendo firmes na fé, sabendo que os irmãos que vocês têm em todo o mundo estão passando pelos mesmos sofrimentos.",
        "localizacao": "1 Pedro 5:9"
      },
      {
        "versiculo": "Lembramos continuamente, diante de nosso Deus e Pai, o que vocês têm demonstrado: o trabalho que resulta da fé, o esforço motivado pelo amor e a perseverança proveniente da esperança em nosso Senhor Jesus Cristo.",
        "localizacao": "1 Tessalonicenses 1:3"
      },
      {
        "versiculo": "para que a fé que vocês têm não se baseasse na sabedoria humana, mas no poder de Deus.",
        "localizacao": "1 Coríntios 2:5"
      },
      {
        "versiculo": "Por isso, irmãos, em toda a nossa necessidade e tribulação ficamos animados quando soubemos da sua fé;",
        "localizacao": "1 Tessalonicenses 3:7"
      },
      {
        "versiculo": "Combati o bom combate, terminei a corrida, guardei a fé.",
        "localizacao": "2 Timóteo 4:7"
      },
      {
        "versiculo": "Além disso, usem o escudo da fé, com o qual vocês poderão apagar todas as setas inflamadas do Maligno.",
        "localizacao": "Efésios 6:16"
      },
      {
        "versiculo": "Pois é mediante o Espírito que nós aguardamos pela fé a justiça, que é a nossa esperança.",
        "localizacao": "Gálatas 5:5"
      },
      {
        "versiculo": "pois vocês sabem que a prova da sua fé produz perseverança.",
        "localizacao": "Tiago 1:3"
      },
      {
        "versiculo": "Fui crucificado com Cristo. Assim, já não sou eu quem vive, mas Cristo vive em mim. A vida que agora vivo no corpo, vivo-a pela fé no filho de Deus, que me amou e se entregou por mim.",
        "localizacao": "Gálatas 2:20"
      },
      {
        "versiculo": "Quem crê no Filho tem a vida eterna; já quem rejeita o Filho não verá a vida, mas a ira de Deus permanece sobre ele\".",
        "localizacao": "João 3:36"
      },
      {
        "versiculo": "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas.",
        "localizacao": "Mateus 11:28-29"
      },
      {
        "versiculo": "O Espírito do Soberano, o Senhor, está sobre mim, porque o Senhor ungiu-me para levar boas notícias aos pobres. Enviou-me para cuidar dos que estão com o coração quebrantado, anunciar liberdade aos cativos e libertação das trevas aos prisioneiros, ",
        "localizacao": "Isaías 61:1"
      },
      {
        "versiculo": "O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não desanime!\"",
        "localizacao": "Deuteronômio 31:8"
      },
      {
        "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, Pai das misericórdias e Deus de toda consolação, que nos consola em todas as nossas tribulações, para que, com a consolação que recebemos de Deus, possamos consolar os que estão passando por tribulações.",
        "localizacao": "2 Coríntios 1:3-4"
      },
      {
        "versiculo": "Pois assim como os sofrimentos de Cristo transbordam sobre nós, também por meio de Cristo transborda a nossa consolação. Se somos atribulados, é para consolação e salvação de vocês; se somos consolados, é para consolação de vocês, a qual dá paciência para suportarem os mesmos sofrimentos que nós estamos padecendo.",
        "localizacao": "2 Coríntios 1:5-6"
      },
      {
        "versiculo": "Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",
        "localizacao": "Salmos 30:5"
      },
      {
        "versiculo": "Deixo a paz a vocês; a minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.",
        "localizacao": "João 14:27"
      },
      {
        "versiculo": "Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair.",
        "localizacao": "Salmos 55:22"
      },
      {
        "versiculo": "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
        "localizacao": "Salmos 34:18"
      },
      {
        "versiculo": "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo\".",
        "localizacao": "João 16:33"
      },
      {
        "versiculo": "E eu pedirei ao Pai, e ele dará a vocês outro Conselheiro para estar com vocês para sempre, o Espírito da verdade. O mundo não pode recebê-lo, porque não o vê nem o conhece. Mas vocês o conhecem, pois ele vive com vocês e estará em vocês. Não os deixarei órfãos; voltarei para vocês.",
        "localizacao": "João 14:16-18"
      },
      {
        "versiculo": "Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem.",
        "localizacao": "Salmos 23:4"
      },
      {
        "versiculo": "O Senhor é refúgio para os oprimidos, uma torre segura na hora da adversidade.",
        "localizacao": "Salmos 9:9"
      },
      {
        "versiculo": "E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",
        "localizacao": "Filipenses 4:7"
      },
      {
        "versiculo": "O Senhor, o seu Deus, está em seu meio, poderoso para salvar. Ele se regozijará em você; com o seu amor a renovará, ele se regozijará em você com brados de alegria\".",
        "localizacao": "Sofonias 3:17"
      },
      {
        "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
        "localizacao": "Isaías 41:10"
      },
      {
        "versiculo": "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
        "localizacao": "Romanos 15:13"
      },
      {
        "versiculo": "Uma coisa pedi ao Senhor e a procuro: que eu possa viver na casa do Senhor todos os dias da minha vida, para contemplar a bondade do Senhor e buscar sua orientação no seu templo. Pois no dia da adversidade ele me guardará protegido em sua habitação; no seu tabernáculo me esconderá e me porá em segurança sobre um rochedo.",
        "localizacao": "Salmos 27:4-5"
      },
      {
        "versiculo": "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.",
        "localizacao": "Salmos 46:1"
      },
      {
        "versiculo": "Portanto, humilhem-se debaixo da poderosa mão de Deus, para que ele os exalte no tempo devido. Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
        "localizacao": "1 Pedro 5:6-7"
      },
      {
        "versiculo": "Pois não menosprezou nem repudiou o sofrimento do aflito; não escondeu dele o rosto, mas ouviu o seu grito de socorro.",
        "localizacao": "Salmos 22:24"
      },
      {
        "versiculo": "Registra, tu mesmo, o meu lamento; recolhe as minhas lágrimas em teu odre; acaso não estão anotadas em teu livro?",
        "localizacao": "Salmos 56:8"
      },
      {
        "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
        "localizacao": "Jeremias 29:11"
      },
      {
        "versiculo": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam,",
        "localizacao": "Naum 1:7"
      },
      {
        "versiculo": "Assim acontece com vocês: agora é hora de tristeza para vocês, mas eu os verei outra vez, e vocês se alegrarão, e ninguém tirará essa alegria de vocês.",
        "localizacao": "João 16:22"
      },
      {
        "versiculo": "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
        "localizacao": "2 Coríntios 5:17"
      },
      {
        "versiculo": "Aquele que estava assentado no trono disse: \"Estou fazendo novas todas as coisas!\" E acrescentou: \"Escreva isto, pois estas palavras são verdadeiras e dignas de confiança\".",
        "localizacao": "Apocalipse 21:5"
      },
      {
        "versiculo": "Assim como uma mãe consola seu filho, também eu os consolarei; em Jerusalém vocês serão consolados\".",
        "localizacao": "Isaías 66:13"
      },
      {
        "versiculo": "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.",
        "localizacao": "Salmos 18:2"
      },
      {
        "versiculo": "Senhor, tem misericórdia de nós; pois em ti esperamos! Sê tu a nossa força cada manhã, nossa salvação na hora do perigo.",
        "localizacao": "Isaías 33:2"
      },
      {
        "versiculo": "Satisfaze-nos pela manhã com o teu amor leal, e todos os nossos dias cantaremos felizes.",
        "localizacao": "Salmos 90:14"
      },
      {
        "versiculo": "Quanto a mim, feita a justiça, verei a tua face; quando despertar, ficarei satisfeito ao ver a tua semelhança.",
        "localizacao": "Salmos 17:15"
      },
      {
        "versiculo": "Graças ao grande amor do Senhor é que não somos consumidos, pois as suas misericórdias são inesgotáveis. Renovam-se cada manhã; grande é a sua fidelidade! Digo a mim mesmo: A minha porção é o Senhor; portanto, nele porei a minha esperança.",
        "localizacao": "Lamentações 3:22-24"
      },
      {
        "versiculo": "Deus viu que a luz era boa, e separou a luz das trevas. Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.",
        "localizacao": "Gênesis 1:4-5"
      },
      {
        "versiculo": "Acorde, minha alma! Acordem, harpa e lira! Vou despertar a alvorada!",
        "localizacao": "Salmos 57:8"
      },
      {
        "versiculo": "Como é bom render graças ao Senhor e cantar louvores ao teu nome, ó Altíssimo; anunciar de manhã o teu amor leal e de noite a tua fidelidade,",
        "localizacao": "Salmos 92:1-2"
      },
      {
        "versiculo": "Faze-me ouvir do teu amor leal pela manhã, pois em ti confio. Mostra-me o caminho que devo seguir, pois a ti elevo a minha alma.",
        "localizacao": "Salmos 143:8"
      },
      {
        "versiculo": "De manhã ouves, Senhor, o meu clamor; de manhã te apresento a minha oração e aguardo com esperança.",
        "localizacao": "Salmos 5:3"
      },
      {
        "versiculo": "Plante de manhã a sua semente, e mesmo ao entardecer não deixe as suas mãos ficarem à toa, pois você não sabe o que acontecerá, se esta ou aquela produzirá, ou se as duas serão igualmente boas.",
        "localizacao": "Eclesiastes 11:6"
      },
      {
        "versiculo": "Mas eu cantarei louvores à tua força; de manhã louvarei a tua fidelidade, pois tu és o meu alto refúgio, abrigo seguro nos tempos difíceis.",
        "localizacao": "Salmos 59:16"
      },
      {
        "versiculo": "Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",
        "localizacao": "Salmos 30:5"
      },
      {
        "versiculo": "O Soberano, o Senhor, deu-me uma língua instruída, para conhecer a palavra que sustém o exausto. Ele me acorda manhã após manhã, desperta meu ouvido para escutar como alguém que está sendo ensinado.",
        "localizacao": "Isaías 50:4"
      },
      {
        "versiculo": "Mas eu, Senhor, a ti clamo por socorro; já de manhã a minha oração chega à tua presença.",
        "localizacao": "Salmos 88:13"
      },
      {
        "versiculo": "Não ame o sono, senão você acabará ficando pobre; fique desperto, e terá alimento de sobra.",
        "localizacao": "Provérbios 20:13"
      },
      {
        "versiculo": "Ele morreu por nós para que, quer estejamos acordados quer dormindo, vivamos unidos a ele.",
        "localizacao": "1 Tessalonicenses 5:10"
      },
      {
        "versiculo": "Antes de clarear o dia ela se levanta, prepara comida para todos os de casa e dá tarefas às suas servas.",
        "localizacao": "Provérbios 31:15"
      },
      {
        "versiculo": "Tremem os habitantes das terras distantes diante das tuas maravilhas; do nascente ao poente despertas canções de alegria.",
        "localizacao": "Salmos 65:8"
      },
      {
        "versiculo": "Assim, temos ainda mais firme a palavra dos profetas, e vocês farão bem se a ela prestarem atenção, como a uma candeia que brilha em lugar escuro, até que o dia clareie e a estrela da alva nasça no coração de vocês.",
        "localizacao": "2 Pedro 1:19"
      },
      {
        "versiculo": "Com a costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele. Disse então o homem: \"Esta, sim, é osso dos meus ossos e carne da minha carne! Ela será chamada mulher, porque do homem foi tirada\". Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne.",
        "localizacao": "Gênesis 2:22-24"
      },
      {
        "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
        "localizacao": "Mateus 19:6"
      },
      {
        "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
        "localizacao": "1 Coríntios 13:4-7"
      },
      {
        "versiculo": "Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo. Além do mais, ninguém jamais odiou o seu próprio corpo, antes o alimenta e dele cuida, como também Cristo faz com a igreja,",
        "localizacao": "Efésios 5:28-29"
      },
      {
        "versiculo": "Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito.",
        "localizacao": "Efésios 5:33"
      },
      {
        "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
        "localizacao": "Colossenses 3:14"
      },
      {
        "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
        "localizacao": "Provérbios 18:22"
      },
      {
        "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se! E, se dois dormirem juntos, vão manter-se aquecidos. Como, porém, manter-se aquecido sozinho? Um homem sozinho pode ser vencido, mas dois conseguem defender-se. Um cordão de três dobras não se rompe com facilidade.",
        "localizacao": "Eclesiastes 4:9-12"
      },
      {
        "versiculo": "Se um homem tiver se casado recentemente, não será enviado à guerra, nem assumirá nenhum compromisso público. Durante um ano estará livre para ficar em casa e fazer feliz a mulher com quem se casou.",
        "localizacao": "Deuteronômio 24:5"
      },
      {
        "versiculo": "Ah, se ele me beijasse, se a sua boca me cobrisse de beijos... Sim, as suas carícias são mais agradáveis que o vinho. A fragrância dos seus perfumes é suave; o seu nome é como perfume derramado. Não é à toa que as jovens o amam!",
        "localizacao": "Cânticos 1:2-3"
      },
      {
        "versiculo": "Como você é linda, minha querida! Ah, como é linda! Seus olhos são pombas. Como você é belo, meu amado! Ah, como é encantador! Verdejante é o nosso leito.",
        "localizacao": "Cânticos 1:15-16"
      },
      {
        "versiculo": "Seja bendita a sua fonte! Alegre-se com a esposa da sua juventude. Gazela amorosa, corça graciosa; que os seios de sua esposa sempre o fartem de prazer, e sempre o embriaguem os carinhos dela. Por que, meu filho, ser desencaminhado pela mulher imoral? Por que abraçar o seio de uma leviana?",
        "localizacao": "Provérbios 5:18-20"
      },
      {
        "versiculo": "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade.",
        "localizacao": "Malaquias 2:15"
      },
      {
        "versiculo": "Você fez disparar o meu coração, minha irmã, minha noiva; fez disparar o meu coração com um simples olhar, com uma simples joia dos seus colares.",
        "localizacao": "Cânticos 4:9"
      },
      {
        "versiculo": "Ponha-me como um selo sobre o seu coração; como um selo sobre o seu braço; pois o amor é tão forte quanto a morte e o ciúme é tão inflexível quanto a sepultura. Suas brasas são fogo ardente, são labaredas do Senhor. Nem muitas águas conseguem apagar o amor; os rios não conseguem levá-lo na correnteza. Se alguém oferecesse todas as riquezas da sua casa para adquirir o amor, seria totalmente desprezado.",
        "localizacao": "Cânticos 8:6-7"
      },
      {
        "versiculo": "O amigo ama em todos os momentos; é um irmão na adversidade.",
        "localizacao": "Provérbios 17:17"
      },
      {
        "versiculo": "Aquele que anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal.",
        "localizacao": "Provérbios 13:20"
      },
      {
        "versiculo": "Melhor é a repreensão feita abertamente do que o amor oculto. Quem fere por amor mostra lealdade, mas o inimigo multiplica beijos.",
        "localizacao": "Provérbios 27:5-6"
      },
      {
        "versiculo": "Já não os chamo servos, porque o servo não sabe o que o seu senhor faz. Em vez disso, eu os tenho chamado amigos, porque tudo o que ouvi de meu Pai eu tornei conhecido a vocês.",
        "localizacao": "João 15:15"
      },
      {
        "versiculo": "Perfume e incenso trazem alegria ao coração; do conselho sincero do homem nasce uma bela amizade. Não abandone o seu amigo nem o amigo de seu pai; quando for atingido pela adversidade não vá para a casa de seu irmão; melhor é o vizinho próximo do que o irmão distante.",
        "localizacao": "Provérbios 27:9-10"
      },
      {
        "versiculo": "Quem tem muitos amigos pode chegar à ruína, mas existe amigo mais apegado que um irmão.",
        "localizacao": "Provérbios 18:24"
      },
      {
        "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
        "localizacao": "Eclesiastes 4:9-10"
      },
      {
        "versiculo": "Não se deixem enganar: \"As más companhias corrompem os bons costumes\".",
        "localizacao": "1 Coríntios 15:33"
      },
      {
        "versiculo": "Dediquem-se uns aos outros com amor fraternal. Prefiram dar honra aos outros mais do que a vocês.",
        "localizacao": "Romanos 12:10"
      },
      {
        "versiculo": "Depois dessa conversa de Davi com Saul, surgiu tão grande amizade entre Jônatas e Davi que Jônatas tornou-se o seu melhor amigo. Daquele dia em diante, Saul manteve Davi consigo e não o deixou voltar à casa de seu pai. E Jônatas fez um acordo de amizade com Davi, pois se tornara o seu melhor amigo.",
        "localizacao": "1 Samuel 18:1-3"
      },
      {
        "versiculo": "Não se associe com quem vive de mau humor, nem ande em companhia de quem facilmente se ira; do contrário você acabará imitando essa conduta e cairá em armadilha mortal.",
        "localizacao": "Provérbios 22:24-25"
      },
      {
        "versiculo": "Rute, porém, respondeu: \"Não insistas comigo que te deixe e que não mais te acompanhe. Aonde fores irei, onde ficares ficarei! O teu povo será o meu povo e o teu Deus será o meu Deus!",
        "localizacao": "Rute 1:16"
      },
      {
        "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
        "localizacao": "Mateus 19:6"
      },
      {
        "versiculo": "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne. O homem e sua mulher viviam nus, e não sentiam vergonha.",
        "localizacao": "Gênesis 2:24-25"
      },
      {
        "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
        "localizacao": "1 Coríntios 13:4-7"
      },
      {
        "versiculo": "Deus os abençoou e lhes disse: \"Sejam férteis e multipliquem-se! Encham e subjuguem a terra! Dominem sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se movem pela terra\".",
        "localizacao": "Gênesis 1:28"
      },
      {
        "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
        "localizacao": "Provérbios 18:22"
      },
      {
        "versiculo": "O casamento deve ser honrado por todos; o leito conjugal, conservado puro; pois Deus julgará os imorais e os adúlteros.",
        "localizacao": "Hebreus 13:4"
      },
      {
        "versiculo": "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade. \"Eu odeio o divórcio\", diz o Senhor, o Deus de Israel, \"e também odeio homem que se cobre de violência como se cobre de roupas\", diz o Senhor dos Exércitos. Por isso, tenham bom senso; não sejam infiéis.",
        "localizacao": "Malaquias 2:15-16"
      },
      {
        "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos.",
        "localizacao": "Colossenses 3:14-15"
      },
      {
        "versiculo": "Tenham cuidado para que ninguém retribua o mal com o mal, mas sejam sempre bondosos uns para com os outros e para com todos.",
        "localizacao": "1 Tessalonicenses 5:15"
      },
      {
        "versiculo": "Não se ponham em jugo desigual com descrentes. Pois o que têm em comum a justiça e a maldade? Ou que comunhão pode ter a luz com as trevas?",
        "localizacao": "2 Coríntios 6:14"
      },
      {
        "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
        "localizacao": "Provérbios 12:4"
      },
      {
        "versiculo": "Mulheres, sujeite-se cada uma a seu marido, como ao Senhor, pois o marido é o cabeça da mulher, como também Cristo é o cabeça da igreja, que é o seu corpo, do qual ele é o Salvador. Assim como a igreja está sujeita a Cristo, também as mulheres estejam em tudo sujeitas a seus maridos.",
        "localizacao": "Efésios 5:22-24"
      },
      {
        "versiculo": "Maridos, ame cada um a sua mulher, assim como Cristo amou a igreja e entregou-se por ela; Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo.",
        "localizacao": "Efésios 5:25;28"
      },
      {
        "versiculo": "Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito.",
        "localizacao": "Efésios 5:33"
      },
      {
        "versiculo": "O marido deve cumprir os seus deveres conjugais para com a sua mulher, e da mesma forma a mulher para com o seu marido. A mulher não tem autoridade sobre o seu próprio corpo, mas sim o marido. Da mesma forma, o marido não tem autoridade sobre o seu próprio corpo, mas sim a mulher.",
        "localizacao": "1 Coríntios 7:3-4"
      },
      {
        "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
        "localizacao": "Eclesiastes 4:9-10"
      },
      {
        "versiculo": "Ponha-me como um selo sobre o seu coração; como um selo sobre o seu braço; pois o amor é tão forte quanto a morte e o ciúme é tão inflexível quanto a sepultura. Suas brasas são fogo ardente, são labaredas do Senhor.",
        "localizacao": "Cânticos 8:6"
      },
      {
        "versiculo": "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
        "localizacao": "Josué 1:9"
      },
      {
        "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
        "localizacao": "Isaías 41:10"
      },
      {
        "versiculo": "ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
        "localizacao": "Mateus 28:20"
      },
      {
        "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\".",
        "localizacao": "Hebreus 13:5"
      },
      {
        "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
        "localizacao": "Deuteronômio 31:6"
      },
      {
        "versiculo": "Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
        "localizacao": "Romanos 8:38-39"
      },
      {
        "versiculo": "Vocês não sabem que são santuário de Deus e que o Espírito de Deus habita em vocês?",
        "localizacao": "1 Coríntios 3:16"
      },
      {
        "versiculo": "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo.",
        "localizacao": "Apocalipse 3:20"
      },
      {
        "versiculo": "Eu farei de você uma muralha de bronze fortificada diante deste povo; lutarão contra você, mas não o vencerão, pois estou com você para resgatá-lo e salvá-lo\", declara o Senhor.",
        "localizacao": "Jeremias 15:20"
      },
      {
        "versiculo": "para que Cristo habite no coração de vocês mediante a fé; e oro para que, estando arraigados e alicerçados em amor,",
        "localizacao": "Efésios 3:17"
      },
      {
        "versiculo": "Ninguém conseguirá resistir a você todos os dias da sua vida. Assim como estive com Moisés, estarei com você; nunca o deixarei, nunca o abandonarei. \"Seja forte e corajoso, porque você conduzirá este povo para herdar a terra que prometi sob juramento aos seus antepassados.",
        "localizacao": "Josué 1:5-6"
      },
      {
        "versiculo": "Então o Anjo do Senhor apareceu a Gideão e lhe disse: \"O Senhor está com você, poderoso guerreiro\".",
        "localizacao": "Juízes 6:12"
      },
      {
        "versiculo": "Tal é a confiança que temos diante de Deus, por meio de Cristo. Não que possamos reivindicar qualquer coisa com base em nossos próprios méritos, mas a nossa capacidade vem de Deus. Ele nos capacitou para sermos ministros de uma nova aliança, não da letra, mas do Espírito; pois a letra mata, mas o Espírito vivifica.",
        "localizacao": "2 Coríntios 3:4-6"
      },
      {
        "versiculo": "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.",
        "localizacao": "Salmos 18:2"
      },
      {
        "versiculo": "pode dizer ao Senhor: \"Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio\".",
        "localizacao": "Salmos 91:2"
      },
      {
        "versiculo": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam,",
        "localizacao": "Naum 1:7"
      },
      {
        "versiculo": "Ó Senhor dos Exércitos, como é feliz aquele que em ti confia!",
        "localizacao": "Salmos 84:12"
      },
      {
        "versiculo": "Este é o Deus cujo caminho é perfeito; a palavra do Senhor é comprovadamente genuína. Ele é escudo para todos os que nele se refugiam.",
        "localizacao": "2 Samuel 22:31"
      },
      {
        "versiculo": "Deus é a minha salvação; terei confiança e não temerei. O Senhor, sim, o Senhor é a minha força e o meu cântico; ele é a minha salvação!",
        "localizacao": "Isaías 12:2"
      },
      {
        "versiculo": "Embora ele me mate, ainda assim esperarei nele; certo é que defenderei os meus caminhos diante dele.",
        "localizacao": "Jó 13:15"
      },
      {
        "versiculo": "Senhor, meu Deus, em ti me refugio; salva-me e livra-me de todos os que me perseguem,",
        "localizacao": "Salmos 7:1"
      },
      {
        "versiculo": "Cada palavra de Deus é comprovadamente pura; ele é um escudo para quem nele se refugia.",
        "localizacao": "Provérbios 30:5"
      },
      {
        "versiculo": "Os que conhecem o teu nome confiam em ti, pois tu, Senhor, jamais abandonas os que te buscam.",
        "localizacao": "Salmos 9:10"
      },
      {
        "versiculo": "Em ti os nossos antepassados puseram a sua confiança; confiaram, e os livraste.",
        "localizacao": "Salmos 22:4"
      },
      {
        "versiculo": "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento;",
        "localizacao": "Provérbios 3:5"
      },
      {
        "versiculo": "Entregue o seu caminho ao Senhor; confie nele, e ele agirá:",
        "localizacao": "Salmos 37:5"
      },
      {
        "versiculo": "Mas eu, quando estiver com medo, confiarei em ti.",
        "localizacao": "Salmos 56:3"
      },
      {
        "versiculo": "Pois tu és a minha esperança, ó Soberano Senhor, em ti está a minha confiança desde a juventude.",
        "localizacao": "Salmos 71:5"
      },
      {
        "versiculo": "Tu, Senhor, guardarás em perfeita paz aquele cujo propósito está firme, porque em ti confia.",
        "localizacao": "Isaías 26:3"
      },
      {
        "versiculo": "Se trabalhamos e lutamos é porque temos depositado a nossa esperança no Deus vivo, o Salvador de todos os homens, especialmente dos que creem.",
        "localizacao": "1 Timóteo 4:10"
      },
      {
        "versiculo": "Alguns confiam em carros e outros em cavalos, mas nós confiamos no nome do Senhor, o nosso Deus.",
        "localizacao": "Salmos 20:7"
      },
      {
        "versiculo": "Muitas são as dores dos ímpios, mas a bondade do Senhor protege quem nele confia.",
        "localizacao": "Salmos 32:10"
      },
      {
        "versiculo": "É melhor buscar refúgio no Senhor do que confiar nos homens.",
        "localizacao": "Salmos 118:8"
      },
      {
        "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
        "localizacao": "Provérbios 12:4"
      },
      {
        "versiculo": "A mulher bondosa conquista o respeito, mas os homens cruéis só conquistam riquezas.",
        "localizacao": "Provérbios 11:16"
      },
      {
        "versiculo": "As mulheres igualmente sejam dignas, não caluniadoras, mas sóbrias e confiáveis em tudo.",
        "localizacao": "1 Timóteo 3:11"
      },
      {
        "versiculo": "Casas e riquezas herdam-se dos pais, mas a esposa prudente vem do Senhor.",
        "localizacao": "Provérbios 19:14"
      },
      {
        "versiculo": "A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.",
        "localizacao": "Provérbios 14:1"
      },
      {
        "versiculo": "Semelhantemente, ensine as mulheres mais velhas a serem reverentes na sua maneira de viver, a não serem caluniadoras nem escravizadas a muito vinho, mas a serem capazes de ensinar o que é bom. Assim, poderão orientar as mulheres mais jovens a amarem seus maridos e seus filhos,",
        "localizacao": "Tito 2:3-4"
      },
      {
        "versiculo": "Agora, minha filha, não tenha medo; farei por você tudo o que me pedir. Todos os meus concidadãos sabem que você é mulher virtuosa.",
        "localizacao": "Rute 3:11"
      },
      {
        "versiculo": "Melhor é viver no deserto do que com uma mulher briguenta e amargurada.",
        "localizacao": "Provérbios 21:19"
      },
      {
        "versiculo": "A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada.",
        "localizacao": "Provérbios 31:30"
      },
      {
        "versiculo": "Com a costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele. Disse então o homem: \"Esta, sim, é osso dos meus ossos e carne da minha carne! Ela será chamada mulher, porque do homem foi tirada\".",
        "localizacao": "Gênesis 2:22-23"
      },
      {
        "versiculo": "Do mesmo modo, mulheres, sujeite-se cada uma a seu marido, a fim de que, se ele não obedece à palavra, seja ganho sem palavras, pelo procedimento de sua mulher,",
        "localizacao": "1 Pedro 3:1"
      },
      {
        "versiculo": "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens,",
        "localizacao": "Colossenses 3:23"
      },
      {
        "versiculo": "O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria.",
        "localizacao": "Eclesiastes 9:10"
      },
      {
        "versiculo": "Tudo posso naquele que me fortalece.",
        "localizacao": "Filipenses 4:13"
      },
      {
        "versiculo": "Portanto, também nós, uma vez que estamos rodeados por tão grande nuvem de testemunhas, livremo-nos de tudo o que nos atrapalha e do pecado que nos envolve e corramos com perseverança a corrida que nos é proposta, tendo os olhos fitos em Jesus, autor e consumador da nossa fé. Ele, pela alegria que lhe fora proposta, suportou a cruz, desprezando a vergonha, e assentou-se à direita do trono de Deus. Pensem bem naquele que suportou tal oposição dos pecadores contra si mesmo, para que vocês não se cansem nem desanimem.",
        "localizacao": "Hebreus 12:1-3"
      },
      {
        "versiculo": "Irmãos, não penso que eu mesmo já o tenha alcançado, mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante, prossigo para o alvo, a fim de ganhar o prêmio do chamado celestial de Deus em Cristo Jesus.",
        "localizacao": "Filipenses 3:13-14"
      },
      {
        "versiculo": "pois é Deus quem efetua em vocês tanto o querer quanto o realizar, de acordo com a boa vontade dele.",
        "localizacao": "Filipenses 2:13"
      },
      {
        "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
        "localizacao": "Jeremias 29:11"
      },
      {
        "versiculo": "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá.",
        "localizacao": "Salmos 91:7"
      },
      {
        "versiculo": "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
        "localizacao": "Mateus 28:19-20"
      },
      {
        "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
        "localizacao": "Deuteronômio 31:6"
      },
      {
        "versiculo": "Ele fortalece o cansado e dá grande vigor ao que está sem forças. Até os jovens se cansam e ficam exaustos, e os moços tropeçam e caem; mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
        "localizacao": "Isaías 40:29-31"
      },
      {
        "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei.",
        "localizacao": "João 14:13-14"
      },
      {
        "versiculo": "Vocês não sabem que, de todos os que correm no estádio, apenas um ganha o prêmio? Corram de tal modo que alcancem o prêmio. Todos os que competem nos jogos se submetem a um treinamento rigoroso, para obter uma coroa que logo perece; mas nós o fazemos para ganhar uma coroa que dura para sempre.",
        "localizacao": "1 Coríntios 9:24-25"
      },
      {
        "versiculo": "Não busquem ansiosamente o que comer ou beber; não se preocupem com isso. Pois o mundo pagão é que corre atrás dessas coisas; mas o Pai sabe que vocês precisam delas.",
        "localizacao": "Lucas 12:29-30"
      },
      {
        "versiculo": "Quando ainda estávamos com vocês, nós ordenamos isto: Se alguém não quiser trabalhar, também não coma. Pois ouvimos que alguns de vocês estão ociosos; não trabalham, mas andam se intrometendo na vida alheia. A tais pessoas ordenamos e exortamos no Senhor Jesus Cristo que trabalhem tranquilamente e comam o seu próprio pão. Quanto a vocês, irmãos, nunca se cansem de fazer o bem.",
        "localizacao": "2 Tessalonicenses 3:10-13"
      },
      {
        "versiculo": "É grande o meu prazer no Senhor! Regozija-se a minha alma em meu Deus! Pois ele me vestiu com as vestes da salvação e sobre mim pôs o manto da justiça, qual noivo que adorna a cabeça como um sacerdote, qual noiva que se enfeita com joias.",
        "localizacao": "Isaías 61:10"
      },
      {
        "versiculo": "Tu és bondoso e perdoador, Senhor, rico em graça para com todos os que te invocam.",
        "localizacao": "Salmos 86:5"
      },
      {
        "versiculo": "Então Pedro aproximou-se de Jesus e perguntou: \"Senhor, quantas vezes deverei perdoar a meu irmão quando ele pecar contra mim? Até sete vezes?\" Jesus respondeu: \"Eu digo a você: Não até sete, mas até setenta vezes sete.",
        "localizacao": "Mateus 18:21-22"
      },
      {
        "versiculo": "E, quando estiverem orando, se tiverem alguma coisa contra alguém, perdoem-no, para que também o Pai celestial perdoe os seus pecados. Mas, se vocês não perdoarem, também o seu Pai que está nos céus não perdoará os seus pecados\".",
        "localizacao": "Marcos 11:25-26"
      },
      {
        "versiculo": "Tomem cuidado. Se o seu irmão pecar, repreenda-o e, se ele se arrepender, perdoe-lhe. Se pecar contra você sete vezes no dia, e sete vezes voltar a você e disser: 'Estou arrependido', perdoe-lhe\".",
        "localizacao": "Lucas 17:3-4"
      },
      {
        "versiculo": "Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.",
        "localizacao": "Colossenses 3:13"
      },
      {
        "versiculo": "Se confessarmos os nossos pecados, ele é fiel e justo para perdoar os nossos pecados e nos purificar de toda injustiça.",
        "localizacao": "1 João 1:9"
      },
      {
        "versiculo": "Pois, se perdoarem as ofensas uns dos outros, o Pai celestial também perdoará vocês. Mas, se não perdoarem uns aos outros, o Pai celestial não perdoará as ofensas de vocês.",
        "localizacao": "Mateus 6:14-15"
      },
      {
        "versiculo": "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
        "localizacao": "Efésios 4:32"
      },
      {
        "versiculo": "Se um de vocês tem causado tristeza, não a tem causado apenas a mim, mas também, em parte, para eu não ser demasiadamente severo com todos vocês. A punição que foi imposta pela maioria é suficiente. Agora, ao contrário, vocês devem perdoar-lhe e consolá-lo, para que ele não seja dominado por excessiva tristeza. Portanto, eu recomendo que reafirmem o amor que têm por ele.",
        "localizacao": "2 Coríntios 2:5-8"
      },
      {
        "versiculo": "Não julguem e vocês não serão julgados. Não condenem e não serão condenados. Perdoem e serão perdoados.",
        "localizacao": "Lucas 6:37"
      },
      {
        "versiculo": "Sou eu, eu mesmo, aquele que apaga suas transgressões, por amor de mim, e que não se lembra mais de seus pecados.",
        "localizacao": "Isaías 43:25"
      },
      {
        "versiculo": "Nele temos a redenção por meio de seu sangue, o perdão dos pecados, de acordo com as riquezas da graça de Deus,",
        "localizacao": "Efésios 1:7"
      },
      {
        "versiculo": "Pois ele nos resgatou do domínio das trevas e nos transportou para o Reino do seu Filho amado, em quem temos a redenção, a saber, o perdão dos pecados.",
        "localizacao": "Colossenses 1:13-14"
      },
      {
        "versiculo": "Que o ímpio abandone o seu caminho; e o homem mau, os seus pensamentos. Volte-se ele para o Senhor, que terá misericórdia dele; volte-se para o nosso Deus, pois ele dá de bom grado o seu perdão.",
        "localizacao": "Isaías 55:7"
      },
      {
        "versiculo": "Saibam que o Senhor escolheu o piedoso; o Senhor ouvirá quando eu o invocar.",
        "localizacao": "Salmos 4:3"
      },
      {
        "versiculo": "Descanse no Senhor e aguarde por ele com paciência; não se aborreça com o sucesso dos outros nem com aqueles que maquinam o mal.",
        "localizacao": "Salmos 37:7"
      },
      {
        "versiculo": "Ó tu que ouves a oração, a ti virão todos os homens.",
        "localizacao": "Salmos 65:2"
      },
      {
        "versiculo": "Portanto, confessem os seus pecados uns aos outros e orem uns pelos outros para serem curados. A oração de um justo é poderosa e eficaz.",
        "localizacao": "Tiago 5:16"
      },
      {
        "versiculo": "Se eu acalentasse o pecado no coração, o Senhor não me ouviria;",
        "localizacao": "Salmos 66:18"
      },
      {
        "versiculo": "Se alguém se recusa a ouvir a lei, até suas orações serão detestáveis.",
        "localizacao": "Provérbios 28:9"
      },
      {
        "versiculo": "Antes de clamarem, eu responderei; ainda não estarão falando, e eu os ouvirei.",
        "localizacao": "Isaías 65:24"
      },
      {
        "versiculo": "E, quando orarem, não fiquem sempre repetindo a mesma coisa, como fazem os pagãos. Eles pensam que por muito falarem serão ouvidos. Não sejam iguais a eles, porque o seu Pai sabe do que vocês precisam, antes mesmo de o pedirem.",
        "localizacao": "Mateus 6:7-8"
      },
      {
        "versiculo": "Vocês, orem assim: \"Pai nosso, que estás nos céus! Santificado seja o teu nome. Venha o teu Reino; seja feita a tua vontade, assim na terra como no céu.",
        "localizacao": "Mateus 6:9-10"
      },
      {
        "versiculo": "Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai de vocês, que está nos céus, dará coisas boas aos que lhe pedirem!",
        "localizacao": "Mateus 7:11"
      },
      {
        "versiculo": "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta.",
        "localizacao": "Mateus 7:7-8"
      },
      {
        "versiculo": "E tudo o que pedirem em oração, se crerem, vocês receberão\".",
        "localizacao": "Mateus 21:22"
      },
      {
        "versiculo": "Ele disse: \"Em certa cidade havia um juiz que não temia a Deus nem se importava com os homens; E havia naquela cidade uma viúva que se dirigia continuamente a ele, suplicando-lhe: 'Faze-me justiça contra o meu adversário'.  esta viúva está me aborrecendo; vou fazer-lhe justiça para que ela não venha mais me importunar'. Acaso Deus não fará justiça aos seus escolhidos, que clamam a ele dia e noite? Continuará fazendo-os esperar?",
        "localizacao": "Lucas 18:2-3,5,7"
      },
      {
        "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei.",
        "localizacao": "João 14:13-14"
      },
      {
        "versiculo": "Portanto, eu digo: Tudo o que vocês pedirem em oração, creiam que já o receberam, e assim sucederá.",
        "localizacao": "Marcos 11:24"
      },
      {
        "versiculo": "Da mesma forma o Espírito nos ajuda em nossa fraqueza, pois não sabemos como orar, mas o próprio Espírito intercede por nós com gemidos inexprimíveis. E aquele que sonda os corações conhece a intenção do Espírito, porque o Espírito intercede pelos santos de acordo com a vontade de Deus.",
        "localizacao": "Romanos 8:26-27"
      },
      {
        "versiculo": "Três vezes roguei ao Senhor que o tirasse de mim. Mas ele me disse: \"Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza\". Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim.",
        "localizacao": "2 Coríntios 12:8-9"
      },
      {
        "versiculo": "Àquele que é capaz de fazer infinitamente mais do que tudo o que pedimos ou pensamos, de acordo com o seu poder que atua em nós,",
        "localizacao": "Efésios 3:20"
      },
      {
        "versiculo": "Orem no Espírito em todas as ocasiões, com toda oração e súplica; tendo isso em mente, estejam atentos e perseverem na oração por todos os santos.",
        "localizacao": "Efésios 6:18"
      },
      {
        "versiculo": "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.",
        "localizacao": "Filipenses 4:19"
      },
      {
        "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
        "localizacao": "Filipenses 4:6"
      },
      {
        "versiculo": "Orem continuamente.",
        "localizacao": "1 Tessalonicenses 5:17"
      },
      {
        "versiculo": "Quero, pois, que os homens orem em todo lugar, levantando mãos santas, sem ira e sem discussões.",
        "localizacao": "1 Timóteo 2:8"
      },
      {
        "versiculo": "Assim, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
        "localizacao": "Hebreus 4:16"
      },
      {
        "versiculo": "Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida. Peça-a, porém, com fé, sem duvidar, pois aquele que duvida é semelhante à onda do mar, levada e agitada pelo vento. Não pense tal pessoa que receberá coisa alguma do Senhor, pois tem mente dividida e é instável em tudo o que faz.",
        "localizacao": "Tiago 1:5-8"
      },
      {
        "versiculo": "Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças; contudo nós o consideramos castigado por Deus, por Deus atingido e afligido. Mas ele foi traspassado por causa das nossas transgressões, foi esmagado por causa de nossas iniquidades; o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados.",
        "localizacao": "Isaías 53:4-5"
      },
      {
        "versiculo": "Cura-me, Senhor, e serei curado; salva-me, e serei salvo, pois tu és aquele a quem eu louvo.",
        "localizacao": "Jeremias 17:14"
      },
      {
        "versiculo": "Ele enviou a sua palavra e os curou, e os livrou da morte.",
        "localizacao": "Salmos 107:20"
      },
      {
        "versiculo": "Curem os enfermos, ressuscitem os mortos, purifiquem os leprosos, expulsem os demônios. Vocês receberam de graça; deem também de graça.",
        "localizacao": "Mateus 10:8"
      },
      {
        "versiculo": "Ele mesmo levou em seu corpo os nossos pecados sobre o madeiro, a fim de que morrêssemos para os pecados e vivêssemos para a justiça; por suas feridas vocês foram curados.",
        "localizacao": "1 Pedro 2:24"
      },
      {
        "versiculo": "dizendo-lhes: \"Se vocês derem atenção ao Senhor, o seu Deus, e fizerem o que ele aprova, se derem ouvidos aos seus mandamentos e obedecerem a todos os seus decretos, não trarei sobre vocês nenhuma das doenças que eu trouxe sobre os egípcios, pois eu sou o Senhor que os cura\".",
        "localizacao": "Êxodo 15:26"
      },
      {
        "versiculo": "Senhor meu Deus, a ti clamei por socorro, e tu me curaste.",
        "localizacao": "Salmos 30:2"
      },
      {
        "versiculo": "Todavia, trarei restauração e cura para ela; curarei o meu povo e lhe darei muita prosperidade e segurança.",
        "localizacao": "Jeremias 33:6"
      },
      {
        "versiculo": "Entre vocês há alguém que está doente? Que ele mande chamar os presbíteros da igreja, para que estes orem sobre ele e o unjam com óleo, em nome do Senhor. A oração feita com fé curará o doente; o Senhor o levantará. E, se houver cometido pecados, ele será perdoado.",
        "localizacao": "Tiago 5:14-15"
      },
      {
        "versiculo": "Só ele cura os de coração quebrantado e cuida das suas feridas.",
        "localizacao": "Salmos 147:3"
      },
      {
        "versiculo": "É ele que perdoa todos os seus pecados e cura todas as suas doenças,",
        "localizacao": "Salmos 103:3"
      },
      {
        "versiculo": "Jesus ia passando por todas as cidades e povoados, ensinando nas sinagogas, pregando as boas-novas do Reino e curando todas as enfermidades e doenças.",
        "localizacao": "Mateus 9:35"
      },
      {
        "versiculo": "Jesus foi por toda a Galileia, ensinando nas sinagogas deles, pregando as boas-novas do Reino e curando todas as enfermidades e doenças entre o povo.",
        "localizacao": "Mateus 4:23"
      },
      {
        "versiculo": "Prestem culto ao Senhor, o Deus de vocês, e ele os abençoará, dando a vocês alimento e água. Tirarei a doença do meio de vocês.",
        "localizacao": "Êxodo 23:25"
      },
      {
        "versiculo": "Então ele lhe disse: \"Filha, a sua fé a curou! Vá em paz e fique livre do seu sofrimento\".",
        "localizacao": "Marcos 5:34"
      },
      {
        "versiculo": "O Senhor o susterá em seu leito de enfermidade, e da doença o restaurará.",
        "localizacao": "Salmos 41:3"
      },
      {
        "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.",
        "localizacao": "2 Timóteo 3:16-17"
      },
      {
        "versiculo": "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
        "localizacao": "Salmos 119:105"
      },
      {
        "versiculo": "Pois a palavra de Deus é viva e eficaz, e mais afiada que qualquer espada de dois gumes; ela penetra até o ponto de dividir alma e espírito, juntas e medulas, e julga os pensamentos e as intenções do coração.",
        "localizacao": "Hebreus 4:12"
      },
      {
        "versiculo": "Jesus respondeu: \"Está escrito: 'Nem só de pão viverá o homem, mas de toda palavra que procede da boca de Deus'\".",
        "localizacao": "Mateus 4:4"
      },
      {
        "versiculo": "Guardei no coração a tua palavra para não pecar contra ti.",
        "localizacao": "Salmos 119:11"
      },
      {
        "versiculo": "Santifica-os na verdade; a tua palavra é a verdade.",
        "localizacao": "João 17:17"
      },
      {
        "versiculo": "A tua palavra, Senhor, para sempre está firmada nos céus.",
        "localizacao": "Salmos 119:89"
      },
      {
        "versiculo": "Cada palavra de Deus é comprovadamente pura; ele é um escudo para quem nele se refugia.",
        "localizacao": "Provérbios 30:5"
      },
      {
        "versiculo": "Jesus respondeu: \"Está escrito: 'Nem só de pão viverá o homem'\".",
        "localizacao": "Lucas 4:4"
      },
      {
        "versiculo": "\"Não é a minha palavra como o fogo\", pergunta o Senhor, \"e como um martelo que despedaça a rocha?",
        "localizacao": "Jeremias 23:29"
      },
      {
        "versiculo": "Santifica-os na verdade; a tua palavra é a verdade.",
        "localizacao": "João 17:17"
      },
      {
        "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça,",
        "localizacao": "2 Timóteo 3:16"
      },
      {
        "versiculo": "Sejam praticantes da palavra, e não apenas ouvintes, enganando vocês mesmos.",
        "localizacao": "Tiago 1:22"
      },
      {
        "versiculo": "Não deixe de falar as palavras deste Livro da Lei e de meditar nelas de dia e de noite, para que você cumpra fielmente tudo o que nele está escrito. Só então os seus caminhos prosperarão e você será bem-sucedido.",
        "localizacao": "Josué 1:8"
      },
      {
        "versiculo": "Pois a palavra do Senhor é verdadeira; ele é fiel em tudo o que faz.",
        "localizacao": "Salmos 33:4"
      },
      {
        "versiculo": "Quando as tuas palavras foram encontradas, eu as comi; elas são a minha alegria e o meu júbilo, pois pertenço a ti, Senhor Deus dos Exércitos.",
        "localizacao": "Jeremias 15:16"
      },
      {
        "versiculo": "Usem o capacete da salvação e a espada do Espírito, que é a palavra de Deus.",
        "localizacao": "Efésios 6:17"
      },
      {
        "versiculo": "Uma esposa exemplar; feliz quem a encontrar! É muito mais valiosa que os rubis. Seu marido tem plena confiança nela e nunca lhe falta coisa alguma.",
        "localizacao": "Provérbios 31:10-11"
      },
      {
        "versiculo": "Agora, minha filha, não tenha medo; farei por você tudo o que me pedir. Todos os meus concidadãos sabem que você é mulher virtuosa.",
        "localizacao": "Rute 3:11"
      },
      {
        "versiculo": "A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada.",
        "localizacao": "Provérbios 31:30"
      },
      {
        "versiculo": "A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.",
        "localizacao": "Provérbios 14:1"
      },
      {
        "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
        "localizacao": "Provérbios 12:4"
      },
      {
        "versiculo": "Casas e riquezas herdam-se dos pais, mas a esposa prudente vem do Senhor.",
        "localizacao": "Provérbios 19:14"
      },
      {
        "versiculo": "Da mesma forma, quero que as mulheres se vistam modestamente, com decência e discrição, não se adornando com tranças e com ouro, nem com pérolas ou com roupas caras, mas com boas obras, como convém a mulheres que declaram adorar a Deus.",
        "localizacao": "1 Timóteo 2:9-10"
      },
      {
        "versiculo": "Semelhantemente, ensine as mulheres mais velhas a serem reverentes na sua maneira de viver, a não serem caluniadoras nem escravizadas a muito vinho, mas a serem capazes de ensinar o que é bom. Assim, poderão orientar as mulheres mais jovens a amarem seus maridos e seus filhos,",
        "localizacao": "Tito 2:3-4"
      },
      {
        "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
        "localizacao": "Salmos 100:4"
      },
      {
        "versiculo": "Deem ao Senhor a glória devida ao seu nome e entrem nos seus átrios trazendo ofertas. Adorem o Senhor no esplendor da sua santidade; tremam diante dele todos os habitantes da terra. Digam entre as nações: \"O Senhor reina!\" Por isso firme está o mundo e não se abalará, e ele julgará os povos com justiça.",
        "localizacao": "Salmos 96:8-10"
      },
      {
        "versiculo": "mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
        "localizacao": "Isaías 40:31"
      },
      {
        "versiculo": "Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
        "localizacao": "Hebreus 13:15"
      },
      {
        "versiculo": "No entanto, está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São estes os adoradores que o Pai procura. Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade\".",
        "localizacao": "João 4:23-24"
      },
      {
        "versiculo": "Aleluia! Louvem a Deus no seu santuário, louvem-no em seu magnífico firmamento. Louvem-no pelos seus feitos poderosos, louvem-no segundo a imensidão de sua grandeza! Tudo o que tem vida louve o Senhor! Aleluia!",
        "localizacao": "Salmos 150:1-2, 6"
      },
      {
        "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas. Pois o meu jugo é suave e o meu fardo é leve\".",
        "localizacao": "Mateus 11:28-30"
      },
      {
        "versiculo": "Venham! Cantemos ao Senhor com alegria! Aclamemos a Rocha da nossa salvação. Vamos à presença dele com ações de graças; vamos aclamá-lo com cânticos de louvor.",
        "localizacao": "Salmos 95:1-2"
      },
      {
        "versiculo": "Aleluia! Louvem o nome do Senhor; louvem-no, servos do Senhor, vocês, que servem na casa do Senhor, nos pátios da casa de nosso Deus. Louvem o Senhor, pois o Senhor é bom; cantem louvores ao seu nome, pois é nome amável.",
        "localizacao": "Salmos 135:1-3"
      },
      {
        "versiculo": "Venham! Adoremos prostrados e ajoelhemos diante do Senhor, o nosso Criador; pois ele é o nosso Deus, e nós somos o povo do seu pastoreio, o rebanho que ele conduz. Hoje, se vocês ouvirem a sua voz,",
        "localizacao": "Salmos 95:6-7"
      },
      {
        "versiculo": "Não deixemos de reunir-nos como igreja, segundo o costume de alguns, mas procuremos encorajar-nos uns aos outros, ainda mais quando vocês veem que se aproxima o Dia.",
        "localizacao": "Hebreus 10:25"
      },
      {
        "versiculo": "Todos os dias, continuavam a reunir-se no pátio do templo. Partiam o pão em casa e juntos participavam das refeições, com alegria e sinceridade de coração, louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava diariamente os que iam sendo salvos.",
        "localizacao": "Atos dos Apóstolos 2:46-47"
      },
      {
        "versiculo": "\"Venham, todos vocês que estão com sede, venham às águas; e vocês que não possuem dinheiro algum, venham, comprem e comam! Venham, comprem vinho e leite sem dinheiro e sem custo.",
        "localizacao": "Isaías 55:1"
      },
      {
        "versiculo": "Aleluia! Cantem ao Senhor uma nova canção, louvem-no na assembleia dos fiéis.",
        "localizacao": "Salmos 149:1"
      },
      {
        "versiculo": "Uma coisa pedi ao Senhor e a procuro: que eu possa viver na casa do Senhor todos os dias da minha vida, para contemplar a bondade do Senhor e buscar sua orientação no seu templo.",
        "localizacao": "Salmos 27:4"
      },
      {
        "versiculo": "Como são felizes aqueles que escolhes e trazes a ti para que vivam nos teus átrios! Transbordamos de bênçãos da tua casa, do teu santo templo!",
        "localizacao": "Salmos 65:4"
      },
      {
        "versiculo": "As tuas mãos me fizeram e me formaram; dá-me entendimento para aprender os teus mandamentos.",
        "localizacao": "Salmos 119:73"
      },
      {
        "versiculo": "Melhor é um dia nos teus átrios do que mil noutro lugar; prefiro ficar à porta da casa do meu Deus a habitar nas tendas dos ímpios.",
        "localizacao": "Salmos 84:10"
      },
      {
        "versiculo": "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
        "localizacao": "Salmos 119:105"
      },
      {
        "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.",
        "localizacao": "2 Timóteo 3:16-17"
      },
      {
        "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
        "localizacao": "Jeremias 29:11"
      },
      {
        "versiculo": "Por que você está assim tão triste, ó minha alma? Por que está assim tão perturbada dentro de mim?Ponha a sua esperança em Deus!  Pois ainda o louvarei; ele é o meu Salvador e o meu Deus.",
        "localizacao": "Salmos 42:11"
      },
      {
        "versiculo": "Como é feliz aquele cujo auxílio é o Deus de Jacó, cuja esperança está no Senhor, no seu Deus,",
        "localizacao": "Salmos 146:5"
      },
      {
        "versiculo": "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
        "localizacao": "Romanos 15:13"
      },
      {
        "versiculo": "Oro também para que os olhos do coração de vocês sejam iluminados, a fim de que vocês conheçam a esperança para a qual ele os chamou, as riquezas da gloriosa herança dele nos santos",
        "localizacao": "Efésios 1:18"
      },
      {
        "versiculo": "Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo, por meio de quem obtivemos acesso pela fé a esta graça na qual agora estamos firmes; e nos gloriamos na esperança da glória de Deus.",
        "localizacao": "Romanos 5:1-2"
      },
      {
        "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo! Conforme a sua grande misericórdia, ele nos regenerou para uma esperança viva, por meio da ressurreição de Jesus Cristo dentre os mortos,",
        "localizacao": "1 Pedro 1:3"
      },
      {
        "versiculo": "Ele o fez a fim de que, justificados por sua graça, nos tornemos seus herdeiros, tendo a esperança da vida eterna.",
        "localizacao": "Tito 3:7"
      },
      {
        "versiculo": "Irmãos, não queremos que vocês sejam ignorantes quanto aos que dormem, para que não se entristeçam como os outros que não têm esperança. Se cremos que Jesus morreu e ressurgiu, cremos também que Deus trará, mediante Jesus e com ele, aqueles que nele dormiram.",
        "localizacao": "1 Tessalonicenses 4:13-14"
      },
      {
        "versiculo": "Pois nessa esperança fomos salvos. Mas esperança que se vê não é esperança. Quem espera por aquilo que está vendo? Mas, se esperamos o que ainda não vemos, aguardamo-lo pacientemente.",
        "localizacao": "Romanos 8:24-25"
      },
      {
        "versiculo": "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.",
        "localizacao": "Romanos 12:12"
      },
      {
        "versiculo": "E a esperança não nos decepciona, porque Deus derramou seu amor em nossos corações, por meio do Espírito Santo que ele nos concedeu.",
        "localizacao": "Romanos 5:5"
      },
      {
        "versiculo": "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
        "localizacao": "Hebreus 11:1"
      },
      {
        "versiculo": "pois temos ouvido falar da fé que vocês têm em Cristo Jesus e do amor que têm por todos os santos, por causa da esperança que está reservada a vocês nos céus, a respeito da qual ouviram por meio da palavra da verdade, o evangelho",
        "localizacao": "Colossenses 1:4-5"
      },
      {
        "versiculo": "Portanto, visto que temos tal esperança, mostramos muita confiança.",
        "localizacao": "2 Coríntios 3:12"
      },
      {
        "versiculo": "De manhã ouves, Senhor, o meu clamor; de manhã te apresento a minha oração e aguardo com esperança.",
        "localizacao": "Salmos 5:3"
      },
      {
        "versiculo": "Mas os pobres nunca serão esquecidos, nem se frustrará a esperança dos necessitados.",
        "localizacao": "Salmos 9:18"
      },
      {
        "versiculo": "O cavalo é vã esperança de vitória; apesar da sua grande força, é incapaz de salvar. Mas o Senhor protege aqueles que o temem, aqueles que firmam a esperança no seu amor, para livrá-los da morte e garantir-lhes vida, mesmo em tempos de fome.",
        "localizacao": "Salmos 33:17-19"
      },
      {
        "versiculo": "Mas agora, Senhor, que hei de esperar? Minha esperança está em ti.",
        "localizacao": "Salmos 39:7"
      },
      {
        "versiculo": "Estou quase desfalecido, aguardando a tua salvação, mas na tua palavra depositei a minha esperança.",
        "localizacao": "Salmos 119:81"
      },
      {
        "versiculo": "A esperança que se retarda deixa o coração doente, mas o anseio satisfeito é árvore de vida.",
        "localizacao": "Provérbios 13:12"
      },
      {
        "versiculo": "Se trabalhamos e lutamos é porque temos depositado a nossa esperança no Deus vivo, o Salvador de todos os homens, especialmente dos que creem.",
        "localizacao": "1 Timóteo 4:10"
      },
      {
        "versiculo": "Ordene aos que são ricos no presente mundo que não sejam arrogantes, nem ponham sua esperança na incerteza da riqueza, mas em Deus, que de tudo nos provê ricamente, para a nossa satisfação.",
        "localizacao": "1 Timóteo 6:17"
      },
      {
        "versiculo": "Apeguemo-nos com firmeza à esperança que professamos, pois aquele que prometeu é fiel.",
        "localizacao": "Hebreus 10:23"
      },
      {
        "versiculo": "Antes, santifiquem Cristo como Senhor em seu coração. Estejam sempre preparados para responder a qualquer pessoa que pedir a razão da esperança que há em vocês.",
        "localizacao": "1 Pedro 3:15"
      },
      {
        "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
        "localizacao": "2 Coríntios 9:7"
      },
      {
        "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações; os seus celeiros ficarão plenamente cheios, e os seus barris transbordarão de vinho.",
        "localizacao": "Provérbios 3:9-10"
      },
      {
        "versiculo": "Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
        "localizacao": "Hebreus 13:15"
      },
      {
        "versiculo": "Portanto, irmãos, rogo pelas misericórdias de Deus que se ofereçam em sacrifício vivo, santo e agradável a Deus; este é o culto racional de vocês.",
        "localizacao": "Romanos 12:1"
      },
      {
        "versiculo": "Jesus olhou e viu os ricos colocando suas contribuições nas caixas de ofertas. Viu também uma viúva pobre colocar duas pequeninas moedas de cobre. E disse: \"Afirmo que esta viúva pobre colocou mais do que todos os outros. Todos esses deram do que lhes sobrava; mas ela, da sua pobreza, deu tudo o que possuía para viver\".",
        "localizacao": "Lucas 21:1-4"
      },
      {
        "versiculo": "Em tudo o que fiz, mostrei a vocês que mediante trabalho árduo devemos ajudar os fracos, lembrando as palavras do próprio Senhor Jesus, que disse: 'Há maior felicidade em dar do que em receber' \".",
        "localizacao": "Atos dos Apóstolos 20:35"
      },
      {
        "versiculo": "Ao entrarem na casa, viram o menino com Maria, sua mãe, e, prostrando-se, o adoraram. Então abriram os seus tesouros e lhe deram presentes: ouro, incenso e mirra.",
        "localizacao": "Mateus 2:11"
      },
      {
        "versiculo": "\"Diga aos israelitas que me tragam uma oferta. Receba-a de todo aquele cujo coração o compelir a dar.",
        "localizacao": "Êxodo 25:2"
      },
      {
        "versiculo": "Aceita, Senhor, a oferta de louvor dos meus lábios, e ensina-me as tuas ordenanças.",
        "localizacao": "Salmos 119:108"
      },
      {
        "versiculo": "Há quem dê generosamente, e vê aumentar suas riquezas; outros retêm o que deveriam dar, e caem na pobreza.",
        "localizacao": "Provérbios 11:24"
      }
];

// Variáveis de cache (garanta que estas variáveis sejam inicializadas corretamente no script)
let cachedData = null;
let cachedIndice = null;
let cachedElementoVersiculo = null;

// Exemplo de chamada da função
document.addEventListener('DOMContentLoaded', versiculoDoDia);

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + ' Vencedores por Cristo';
});