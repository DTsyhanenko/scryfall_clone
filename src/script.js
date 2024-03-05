const API_URL = "https://api.scryfall.com/cards/random"

async function fetchData() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

fetchData()
