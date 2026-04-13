// ════════════════════════════════════════════════════════════════
// BASE DE DATOS DE JUEGOS - DARKBOX
// ════════════════════════════════════════════════════════════════

const juegosDatabase = [
    {
        nombre: "HELLDIVERS™ 2",
        genero: "JcE/Acción/Cooperativo en línea",
        descripcion: "La última línea de ataque de la galaxia. Alístate en los Helldivers y únete a la lucha por la libertad en una galaxia hostil en un juego de disparos en tercera persona rápido, frenético y feroz.",
        precio: "$149.000",
        puntuacion: "4.5",
        imagen: "https://a.storyblok.com/f/178900/768x432/1c7b91c44a/helldivers-2.jpg/m/filters:quality(95)format(webp)",
        link: "juego-nsesion/juego-helldrivers2.html"
    },
    {
        nombre: "Resident Evil 3",
        genero: "Acción/Aventura/Zombie",
        descripcion: "Jill Valentine es una de las pocas personas que quedan en Raccoon City que han sido testigos de las atrocidades de Umbrella. Para detenerla, Umbrella decide usar su arma secreta definitiva: ¡Nemesis! También incluye Resident Evil Resistance, un nuevo modo multijugador online 1 contra 4.",
        precio: "$121.800",
        puntuacion: "4.0",
        imagen: "https://imagenes.hobbyconsolas.com/files/image_640_360/uploads/imagenes/2023/04/25/690227fe3b5ba.jpeg",
        link: "juego-nsesion/juego-resident-evil-3.html"
    },
    {
        nombre: "Terraria",
        genero: "Sandbox/Supervivencia mundo abierto",
        descripcion: "¡Cava, lucha, explora, construye! Con este juego de aventuras repleto de acción nada es imposible. ¡Pack de Cuatro también disponible!",
        precio: "$26.000",
        puntuacion: "5",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/capsule_616x353.jpg?t=1769844435",
        link: "juego-nsesion/juego-terraria.html"
    },
    {
        nombre: "Mortal Kombat 11",
        genero: "Lucha/Sangrientos/Multijugador",
        descripcion: "Mortal Kombat ha regresado mejor que nunca en esta entrega de la icónica saga.",
        precio: "$143.999",
        puntuacion: "4.2",
        imagen: "https://i0.wp.com/nerfeados.com/wp-content/uploads/2019/05/MK11_Portada.jpg?fit=1024%2C576&ssl=1",
        link: "juego-nsesion/juego-mortal-kombat-11.html"
    },
    {
        nombre: "PEAK",
        genero: "Multijugador/Cooperativo",
        descripcion: "PEAK es un juego cooperativo de escalada en el que un solo error puede ser fatal. Ya sea en solitario o en grupo, la única esperanza de salir de la misteriosa isla es subiendo hasta la cima de la montaña del centro. ¿Tenéis lo que hace falta para subir al PICO?",
        precio: "$19.000",
        puntuacion: "4.5",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oVEeG-Npltjzsc_XvP0d2D1O3BvZlBX_5Q&s",
        link: "juego-nsesion/juego-peak.html"
    },
    {
        nombre: "Deep Rock Galactic",
        genero: "Aventura/Cooperativo/FPS",
        descripcion: "Deep Rock Galactic es un FPS cooperativo para 1 a 4 jugadores. Juega con unos fornidos enanos espaciales en entornos 100 % destructibles, formados por cuevas generadas proceduralmente e interminables hordas de monstruos alienígenas.",
        precio: "$53.000",
        puntuacion: "4.8",
        imagen: "https://www.zonammorpg.com/wp-content/uploads/2020/04/deeprockgalacticpic04-1620x800.jpg",
        link: "juego-nsesion/juego-deep-rock-galactic.html"
    },
    {
        nombre: "Darkwood",
        genero: "Terror/Aventura",
        descripcion: "Darkwood - una nueva perspectiva en el género survival horror. Explora libremente durante el día un vasto mundo siempre cambiante, y luego atrinchérate en tu escondite al llegar la noche rezando para que llegue la luz de la mañana.",
        precio: "$29.900",
        puntuacion: "4.9",
        imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/2011/zvvEqRTkLYJlNEKLz4hjwbGz.jpg",
        link: "juego-nsesion/juego-darkwood.html"
    },
    {
        nombre: "DOOM Eternal",
        genero: "FPS/Accion/Sangrientos",
        descripcion: "Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones para detener la destrucción definitiva de la humanidad. No le tienen miedo a nada... salvo a ti.",
        precio: "$120.000",
        puntuacion: "4.8",
        imagen: "https://orgullogamers.com/wp-content/uploads/2020/05/doometernal.webp",
        link: "juego-nsesion/juego-doom-eternal.html"
    },
    {
        nombre: "Hunt: Showdown 1896",
        genero: "Acción/Shooter",
        descripcion: "Da caza a los corruptos en los remansos perdidos de la historia. Lucha contra un mal atemporal que te obligará a enfrentarte a monstruos retorcidos y otros cazadores desesperados, en solitario o en grupo, en este juego táctico de disparos en primera persona JcJcE de alto riesgo. Aquí no hay héroes.",
        precio: "$37.600",
        puntuacion: "3.8",
        imagen: "https://www.zonammorpg.com/wp-content/uploads/2024/08/huntshowdown1896-1620x800.jpg",
        link: "juego-nsesion/juego-hunt-showdown-1896.html"
    },
    {
        nombre: "DEATH STRANDING DIRECTOR'S CUT",
        genero: "Buena trama/Mundo abierto",
        descripcion: "El legendario Hideo Kojima nos ofrece una experiencia que desafía los géneros, ahora ampliada con este DIRECTOR'S CUT. Como Sam Bridges, tu misión será dar esperanza a la humanidad conectando a los últimos supervivientes de un país arrasado. ¿Podrás volver a unir, paso a paso, un mundo hecho añicos?",
        precio: "$45.465",
        puntuacion: "4.8",
        imagen: "https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S3_2560x1440-fe4e51f1801fba36e452aa3466625789",
        link: "juego-nsesion/juego-death-stranding.html"
    },
    {
        nombre: "ASTRONEER",
        genero: "Multijugador/Espacial",
        descripcion: "Interactúa con extraños mundos nuevos de una forma única y táctil, moldeando el entorno con tus manos como si fuera arcilla. Construye tu base, domina la gestión de recursos, automatiza tus líneas de producción y más a medida que descubres los misterios del universo a solas o con amigos.",
        precio: "$17.500",
        puntuacion: "4.6",
        imagen: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000037336/27b7c212e9900ebbf3fba4c6cb0d0d137e7d0be05f86ab5a954bb7d161e7fb64",
        link: "juego-nsesion/juego-astroner.html"
    },
    {
        nombre: "Palworld",
        genero: "Aventura/Exploración",
        descripcion: "Este es un juego multijugador de supervivencia en mundo abierto inmenso y original, en el que tendrás que hacerte con unas misteriosas criaturas llamadas Pals, capaces de combatir, construir, cultivar y trabajar en fábricas.",
        precio: "$52.500",
        puntuacion: "4.3",
        imagen: "https://phantom.estaticos-marca.com/9be94779ed15ddbde4016330d68fb500/resize/828/f/jpg/assets/multimedia/imagenes/2024/01/10/17048900622330.jpg",
        link: "juego-nsesion/juego-palworld.html"
    },
    {
        nombre: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
        genero: "FPS/Posapocaliptico",
        descripcion: "Descubre la Zona de Exclusión de Chornóbil, un lugar repleto de enemigos peligrosos, anomalías letales y poderosos artefactos. Descubre tu propia historia épica y ábrete paso hasta el corazón de Chornóbil. Elige tu camino sabiamente, ya que tu futuro y el de la humanidad dependerán de lo que elijas.",
        precio: "$139.230",
        puntuacion: "4.7",
        imagen: "https://locosxlosjuegos.com/wp-content/uploads/2026/01/S.T.A.L.K.E.R.-Heart-of-Chernobyl-Portada.jpg",
        link: "juego-nsesion/juego-stalker-2.html"
    },
    {
        nombre: "The Long Dark",
        genero: "Supervivencia",
        descripcion: "The Long Dark ofrece una experiencia de exploración y supervivencia que desafía a los jugadores a pensar por sí mismos en territorios fríos y salvajes tras las consecuencias de un desastre geomagnético. Aquí no hay zombis, solo tú, el frío y cualquier amenaza que la madre naturaleza pueda presentarte.",
        precio: "$8.100",
        puntuacion: "4.8",
        imagen: "https://cdn1.epicgames.com/58dfcd1952ee48c1a1fa31c6ace5fe3d/offer/EGS_TheLongDark_HinterlandStudioInc_S5-1920x1080-fcfdd407ac1990bec320b49101862585.jpg",
        link: "juego-nsesion/juego-the-long-dark.html"
    },
    {
        nombre: "Red Dead Redemption 2",
        genero: "Mundo abierto/Buena trama",
        descripcion: "Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y cazarrecompensas pisándoles los talones, la banda deberá atracar, robar y luchar para sobrevivir en su camino por el escabroso territorio.",
        precio: "$59.999",
        puntuacion: "5",
        imagen: "https://sm.ign.com/ign_latam/screenshot/default/rdr2_29y8.jpg",
        link: "juego-nsesion/juego-rdr-2.html"
    },
    {
        nombre: "The Outlast Trials",
        genero: "Terror/Multijugador",
        descripcion: "Red Barrels invites you to experience mind-numbing terror, this time with friends. Whether you go through the trials alone or in teams, if you survive long enough and complete the therapy, Murkoff will happily let you leave… but will you be the same?",
        precio: "$25.800",
        puntuacion: "4.5",
        imagen: "https://media.vandal.net/m/80035/the-outlast-trials-2022103118301040_9.jpg",
        link: "juego-nsesion/juego-outlast.html"
    },
    {
        nombre: "Dying Light",
        genero: "Acción/Aventura/Mundo abierto",
        descripcion: "En el mundo aquejado de Dying Light, una desenfrenada plaga de zombis ha apartado a la civilización de las manos de la humanidad. Convierte la noche en tu aliada.",
        precio: "$99.900",
        puntuacion: "4.5",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/239140/capsule_616x353.jpg?t=1702309324",
        link: "juego-nsesion/juego-dying-light.html"
    },
    {
        nombre: "Skyrim",
        genero: "RPG/Aventura/Mundo abierto",
        descripcion: "Conviértete en el Dovah, una criatura legendaria, y lucha en batallas épicas contra los malvados Dragones de Skyrim.",
        precio: "$59.999",
        puntuacion: "4.7",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/72850/capsule_616x353.jpg?t=1701098979",
        link: "juego-nsesion/juego-skyrim.html"
    },
    {
        nombre: "Brawlhalla",
        genero: "Lucha/Multijugador",
        descripcion: "Un juego de lucha clásico 2D con muchos personajes a elegir.",
        precio: "Gratis",
        puntuacion: "4.3",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/291550/capsule_616x353.jpg?t=1709914305",
        link: "juego-nsesion/juego-brawlhalla.html"
    },
    {
        nombre: "Borderlands 3",
        genero: "FPS/Acción/Aventura",
        descripcion: "Únete a los Cazadores de Bóvedas en una épica aventura que te llevará a través de mundos alienígenas contra peligrosas amenazas.",
        precio: "$99.900",
        puntuacion: "4.1",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/397540/capsule_616x353.jpg?t=1699564046",
        link: "juego-nsesion/juego-borderlands-3.html"
    },
    {
        nombre: "ULTRAKILL",
        genero: "FPS/Acción/Rápido",
        descripcion: "ULTRAKILL es un retorno a los tiempos de los FPS. Rediseñado, reinventado y recargado.",
        precio: "$66.000",
        puntuacion: "4.6",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/capsule_616x353.jpg?t=1710235289",
        link: "juego-nsesion/juego-ultrakill.html"
    },
    {
        nombre: "Lethal Company",
        genero: "Cooperativo/Terror/Multijugador",
        descripcion: "Un juego de horror multijugador donde trabajas como empleado expendable de una empresa de rescate.",
        precio: "$7.000",
        puntuacion: "4.5",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_616x353.jpg?t=1709923563",
        link: "juego-nsesion/juego-lethal-company.html"
    },
    {
        nombre: "Cloverpit",
        genero: "Acción/Aventura",
        descripcion: "Un emocionante juego de acción y aventura.",
        precio: "$45.000",
        puntuacion: "4.2",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-cloverpit.html"
    },
    {
        nombre: "Crysol",
        genero: "RPG/Aventura",
        descripcion: "Un juego RPG épico con un mundo vasto para explorar.",
        precio: "$55.000",
        puntuacion: "4.4",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-crysol.html"
    },
    {
        nombre: "Madness",
        genero: "Acción/Disparos",
        descripcion: "Un frenético juego de disparos.",
        precio: "$35.000",
        puntuacion: "4.0",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-madness.html"
    },
    {
        nombre: "ASTRONEER",
        genero: "Multijugador/Espacial/Exploración",
        descripcion: "Explora planetas alienígenas y construye bases.",
        precio: "$17.500",
        puntuacion: "4.6",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-astroner.html"
    },
    {
        nombre: "Ball X Pit",
        genero: "Puzzle/Casual",
        descripcion: "Un juego casual de puzzle.",
        precio: "$9.900",
        puntuacion: "3.8",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-ball-x-pit.html"
    },
    {
        nombre: "Look Outside",
        genero: "Aventura/Indie",
        descripcion: "Un juego de aventura indie único.",
        precio: "$14.000",
        puntuacion: "4.3",
        imagen: "https://via.placeholder.com/616x353",
        link: "juego-nsesion/juego-look-outside.html"
    }
];
