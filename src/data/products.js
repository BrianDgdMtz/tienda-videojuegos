export const products = [
  {
    id: '1',
    title: 'Zelda: Tears of The Kingdom',
    price: 1499,
    image: '/img/portada-Zelda-TearsofTheKingdom.jpg',
    category: 'Nintendo Switch',
    featured: true,
    synopsis: 'Una aventura épica a través de la tierra y los cielos de Hyrule. Secuela directa de Breath of the Wild, donde Link debe dominar nuevas habilidades para salvar el reino de una amenaza primordial.',
    trailer: 'https://www.youtube.com/embed/uHGShqcAHlQ',
    screenshots: ['/img/slider-main/zelda-tears.jpg'],
    reviews: [
      { user: 'LinkHero99', rating: 5, comment: 'Obra maestra absoluta. Las mecánicas de construcción son increíbles y dan una libertad sin precedentes.' },
      { user: 'NintyFan', rating: 5, comment: 'Mejor que BotW, no puedo dejar de jugarlo. El mapa subterráneo es una locura.' },
      { user: 'GamerRetro89', rating: 4, comment: 'Muy bueno, pero a veces la tasa de frames baja en zonas muy cargadas.' },
      { user: 'ZeldaZelda', rating: 5, comment: 'La historia es mucho más profunda esta vez. Me sacó un par de lágrimas.' },
      { user: 'CasualPlayer', rating: 4, comment: 'Es un poco abrumador al principio con tanta libertad, pero te atrapa rápido.' },
      { user: 'ProBuilder', rating: 5, comment: 'Me la paso haciendo robots gigantes en lugar de salvar a la princesa. 10/10.' },
      { user: 'SwitchLover', rating: 5, comment: 'Visualmente hermoso para ser de Switch. La dirección de arte lo salva todo.' },
      { user: 'RPGfanatic', rating: 4, comment: 'Extraño las mazmorras clásicas, pero los templos de este juego no están nada mal.' }
    ]
  },
  {
    id: '2',
    title: 'God of War: Ragnarok',
    price: 999,
    image: '/img/portada-GOW-ragnarok-ps5.jpg',
    category: 'PlayStation',
    featured: true,
    synopsis: 'Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca de respuestas, mientras las fuerzas asgardianas se preparan para la batalla profetizada que supondrá el fin del mundo.',
    trailer: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    screenshots: [],
    reviews: [
      { user: 'SpartanX', rating: 5, comment: 'La historia es conmovedora y el combate brutal. Kratos en su mejor momento.' },
      { user: 'NorseMythGuy', rating: 5, comment: 'El diseño de Odin y Thor es espectacular. Un cierre épico para la saga nórdica.' },
      { user: 'ActionGamer', rating: 4, comment: 'El combate se siente muy similar al de 2018, pero más pulido y con más variedad de escudos.' },
      { user: 'AtreusFan', rating: 5, comment: 'El desarrollo de personaje de Atreus es lo mejor del juego. Te encariñas mucho.' },
      { user: 'TrophyHunter', rating: 4, comment: 'Conseguir el platino fue un reto divertido. Los Berserkers son una pesadilla (en el buen sentido).' },
      { user: 'PcGamerNowOnPS5', rating: 5, comment: 'Gráficamente es una bestia. Modo rendimiento a 60fps es mantequilla.' },
      { user: 'CinematicLover', rating: 5, comment: 'Parece una película interactiva. Las actuaciones de voz merecen todos los premios.' }
    ]
  },
  {
    id: '3',
    title: 'Resident Evil 4: Remake',
    price: 1399,
    image: '/img/resident-evil-4-remake-ps5.jpg',
    category: 'Multiplataforma',
    featured: false,
    synopsis: 'Seis años después del desastre biológico en Raccoon City, el agente Leon S. Kennedy es enviado a rescatar a la hija del presidente, que ha sido secuestrada.',
    trailer: 'https://www.youtube.com/embed/O75Ip4o1bs8',
    screenshots: ['/img/slider-main/resident-evil4.jpg'],
    reviews: [
      { user: 'HorrorFanatic', rating: 5, comment: 'Un remake que respeta el original pero lo moderniza maravillosamente. Perfecto.' },
      { user: 'LeonSK', rating: 5, comment: 'Sigue siendo el rey de los survival horror de acción.' },
      { user: 'AshleyDefender', rating: 4, comment: 'Mejoraron mucho la IA de Ashley, ya no es tan frustrante escoltarla.' },
      { user: 'CapcomLover', rating: 5, comment: 'El motor RE Engine hace que este juego luzca asquerosamente bien. Los detalles son viscerales.' },
      { user: 'ClassicGamer', rating: 4, comment: 'Extraño un par de líneas icónicas del original, pero en general es un 10/10.' },
      { user: 'MercenariesPro', rating: 5, comment: 'El modo mercenarios es pura adrenalina y diversión sin parar.' },
      { user: 'SurvivalNoob', rating: 4, comment: 'Me asustó bastante y me quedé sin munición varias veces. Gran experiencia.' },
      { user: 'GamerDad', rating: 5, comment: 'Nostalgia pura. Me hizo sentir como cuando jugué el original en GameCube.' }
    ]
  },
  {
    id: '4',
    title: 'EA Sports: FC24',
    price: 1499,
    image: '/img/portada-easports-fc24-xsx.jpg',
    category: 'Multiplataforma',
    featured: false,
    synopsis: 'El juego de todos ofrece la experiencia futbolística más fiel a la realidad con HyperMotionV, PlayStyles optimizados por Opta y un motor Frostbite mejorado.',
    trailer: 'https://www.youtube.com/embed/XhP3Xh4LMA8',
    screenshots: [],
    reviews: [
      { user: 'FutbolEAMax', rating: 3, comment: 'Buenos gráficos, pero el modo carrera necesita más profundidad y novedades.' },
      { user: 'FUTAddict', rating: 4, comment: 'Las nuevas animaciones se notan mucho. El gameplay es más lento pero más realista.' },
      { user: 'CasualKicker', rating: 4, comment: 'Ideal para jugar con amigos los fines de semana. Las físicas del balón están bien.' },
      { user: 'ProPlayer23', rating: 3, comment: 'Sigue habiendo algo de handicap en los partidos online, pero es el mejor simulador que hay.' },
      { user: 'ManagerMode', rating: 4, comment: 'Las mejoras tácticas en modo carrera se agradecen, aunque la interfaz sigue igual.' },
      { user: 'SundayLeague', rating: 5, comment: 'Me encanta que hayan incluido fútbol femenino en Ultimate Team, da más variedad.' },
      { user: 'OldSchoolFifa', rating: 3, comment: 'Extraño cuando se llamaba FIFA. Es un buen juego pero siento que es lo mismo del año pasado.' }
    ]
  },
  {
    id: '5',
    title: "Marvel's Spider-Man 2",
    price: 1499,
    image: '/img/portada-spider-man-2-ps5.jpg',
    category: 'PlayStation',
    featured: true,
    synopsis: 'Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba definitiva de fuerza dentro y fuera de la máscara para salvar la ciudad de Venom y la amenaza del simbionte.',
    trailer: 'https://www.youtube.com/embed/9fVYKsEmuRo',
    screenshots: [],
    reviews: [
      { user: 'WebShooter', rating: 5, comment: 'El desplazamiento por la ciudad es el mejor en la historia de los videojuegos.' },
      { user: 'VenomFan', rating: 5, comment: 'La historia de Venom es brutal. Mucho más oscuro y adulto que el primero.' },
      { user: 'MilesMoralesPR', rating: 5, comment: 'Poder cambiar entre Peter y Miles instantáneamente gracias al SSD de PS5 es mágico.' },
      { user: 'PlatinumHunter', rating: 4, comment: 'Muy divertido de platinar, aunque las misiones secundarias podrían ser mejores.' },
      { user: 'ComicNerd', rating: 5, comment: 'La cantidad de trajes y referencias a los cómics es increíble. Insomniac nunca decepciona.' },
      { user: 'ActionBro', rating: 4, comment: 'El combate es muy fluido, las nuevas habilidades del simbionte rompen el juego (para bien).' },
      { user: 'StoryLover', rating: 5, comment: 'El final me dejó sin palabras. Necesito la tercera parte ya mismo.' },
      { user: 'Speedrunner', rating: 5, comment: 'Las alitas de red cambian por completo cómo te mueves, es adictivo.' }
    ]
  },
  {
    id: '6',
    title: 'Pikmin 4',
    price: 1499,
    image: '/img/portada-pikmin-4.jpg',
    category: 'Nintendo Switch',
    featured: false,
    synopsis: 'Aterriza en un planeta desconocido y descubre, rescata e interactúa con los diminutos Pikmin. ¡Aprovecha sus habilidades únicas para superar obstáculos y explorar!',
    trailer: 'https://www.youtube.com/embed/And2H0NNpO4',
    screenshots: [],
    reviews: [
      { user: 'OlimarFan', rating: 5, comment: 'Divertido, relajante e increíblemente encantador. Oatchi (el perrito) es lo mejor.' },
      { user: 'DandoriMaster', rating: 5, comment: 'Las batallas Dandori son retadoras y añaden una gran capa estratégica al juego.' },
      { user: 'CozyGamer', rating: 4, comment: 'Perfecto para desconectar después del trabajo. Los escenarios son hermosos.' },
      { user: 'NintendoVeteran', rating: 5, comment: 'La mejor entrega de la saga sin dudarlo. Solucionaron casi todos los problemas de los anteriores.' },
      { user: 'Explorer101', rating: 4, comment: 'Explorar las cuevas me dio vibras de Pikmin 2, me gustó mucho volver a verlas.' },
      { user: 'NightRider', rating: 4, comment: 'Las misiones nocturnas estilo Tower Defense son un giro fresco y divertido.' },
      { user: 'StrategyFan', rating: 5, comment: 'Fácil de aprender, difícil de dominar. El diseño de niveles es de cátedra.' }
    ]
  }
];

export const heroSlides = [
  '/img/slider-main/AC-Mirage.png',
  '/img/slider-main/starfield.jpg',
  '/img/slider-main/zelda-tears.jpg',
  '/img/slider-main/resident-evil4.jpg',
  '/img/slider-main/star-wars-jedi-survivor.png',
  '/img/slider-main/SuperMarioBros-Wonder.jpg',
  '/img/slider-main/POP-thelostcrown.jpeg',
  '/img/slider-main/hogwarts-legacy.jpg'
];
