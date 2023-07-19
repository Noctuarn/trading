const TOKEN = "cir7vjhr01qjff7d28dgcir7vjhr01qjff7d28e0";
const BASE_URL = "https://finnhub.io/api/v1"

export const fetchData = async (symbol) => {
  const URL = `${BASE_URL}/quote?symbol=${symbol}&token=${TOKEN}`  

  try {
    const responce = await fetch(URL);
    if(responce.status !== 200) throw new Error("Помилка при отриманні даних")

    const data = await responce.json();
    return data;

  } catch (err) {
    console.error(err);
  }
};

//! Create one function which will replace both of these function

export const fetchSearchData = async (search) => {
  const URL = `${BASE_URL}/search?q=${search}&token=${TOKEN}`

  try {
    const responce = await fetch(URL);
    if(responce.status !== 200) throw new Error("Помилка при отриманні даних")

    const data = await responce.json();
    return data;

  } catch (err) {
    console.error(err);
  }
}
