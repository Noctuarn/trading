export const fetchData = async (symbol) => {

  const TOKEN = "cir7vjhr01qjff7d28dgcir7vjhr01qjff7d28e0";
  const URL = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${TOKEN}`  

  try {
    const responce = await fetch(URL);
    if(responce.status !== 200) throw new Error("Помилка при отриманні даних")

    const data = await responce.json();
    return data;

  } catch (err) {
    console.error(err);
  }
};
