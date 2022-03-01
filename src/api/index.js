
import data from './data.json'

const delay = (ms = 0) => new Promise((res, rej) => setTimeout(res, ms))


async function getAllGames() {
    await delay()
    return data.slice(0, 12);
}

async function getGamesByTag(tag) {
    await delay()
    return data.filter(game => game.tags.some(t => t === tag))
}

async function getAllTags() {
    let result = {};
    for (let i = 0; i < data.length; i++) {
        const game = data[i];
        game.tags.forEach(tag => result[tag] = true)
    }

    return Object.keys(result);
}


const API = { getAllGames, getAllTags, getGamesByTag };

export default API