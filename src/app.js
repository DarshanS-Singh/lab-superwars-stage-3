const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

const initPlayers = (players) => {
    let detailedPlayers = '';
    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const createPlayers = (players, type) => {
    let fragment = '';
    return fragment;
}

const checkPlayers = (players) => {
    document.getElementById('heroes').innerHTML = createPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = createPlayers(players, 'villain');
}

window.onload = () => {
    checkPlayers(initPlayers(PLAYERS));
}
