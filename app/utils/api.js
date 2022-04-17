const id = "95ffe61de6ec5e54cd2a"
const secret ="66b75710fceeda50bc8c823baf65627447c3e577"
const params = `?client_id=${id}&client_secret=${secret}`

function getErrorMessage (message, username) {
    if (message === 'Not Found') {
        return `${username} doesn't exist`
    }
    return message
}

function getProfile (username) {
    return fetch(`https://api.github.com/users/${username}${params}`)
            .then((res) => res.json())
            .then((profile) => {
                if(profile.message) {
                    throw Error(getErrorMessage(profile.message, username))
                }
                return profile
            })
}

function getRepos (username) {
    return fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
            .then((res) => res.json())
            .then((repos) => {
                if (repos.message) {
                    throw new Error(getErrorMessage(repos.message, username))
                }
                return repos
            })
}

function getStarCount (repos) {
    return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0)
}

function calculateScore(followers, repos) {
    return (followers * 3) + getStarCount(repos)
}

function getUserData (player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([ profile, repos]) => ({
        profile,
        score: calculateScore(profile.followers, repos)
    }))
}

function sortPlayers (players) {
    return players.sort((a, b) => b.score - a.score)
}

export function battle(players) {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1])
    ]).then((results) => sortPlayers(results)) // returns array with winner object at 0th index and loser at 1th index
}

export function fetchPopularRepos (language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                if (!data.items) {
                    throw new Error(data.message) // if rate limited
                }
                
                return data.items // returns array of repos
            })

}