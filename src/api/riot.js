var PROXY_URL = "https://cors-anywhere.herokuapp.com/"
var RIOT_BASE_URL = "https://euw1.api.riotgames.com/lol/"
var URL = PROXY_URL + RIOT_BASE_URL
var API_KEY = "RGAPI-2eade067-a13e-4cc7-9d5a-fb7aba81ef43"

let headers = new Headers()
headers.append("Accept", "application/json")
headers.append("Access-Control-Allow-Origin", "http://localhost:3000")
headers.append("Access-Control-Allow-Credentials", "true")

export async function fetchSummoner(name, region = "euw") {
  const response = await fetch(URL + "summoner/v4/summoners/by-name/" + name, {
    method: "GET",
    headers: {
      "X-Riot-Token": API_KEY,
    },
  })
  return response.json()
}
