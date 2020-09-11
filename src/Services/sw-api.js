const baseUrl = "https://swapi.dev/api"

export function getStarshipList() {
    return fetch(`${baseUrl}/starships`)
    .then(res => res.json())
}

export function getDetails(apiUrl) {
    return fetch (`${apiUrl}`)
    .then(res => res.json())
}

export function getPilots(urls) {
    return urls.map(url => fetch(url)
    .then(res => res.json()));
}

