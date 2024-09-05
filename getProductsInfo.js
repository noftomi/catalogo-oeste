async function fetchAndProcessCSV() {
  try {
    const responseCSV = await fetch(
      'https://docs.google.com/spreadsheets/d/1CFjNITS2MatNET1wth1VaBTfVuTSUtkaMxlPurwdqa8/pub?gid=0&single=true&output=csv'
    ).then(response => response.text());

    const response = responseCSV
      .split('\n')
      .slice(1)
      .map(row => {
        const [id, productName, description, price] = row.split(',');
        console.log("🚀 ~ fetchAndProcessCSV ~ price:", id,productName,price)
        return { id, productName, description, price: Number(price) };
      });

    console.log('🚀 ~ fetchAndProcessCSV ~ response:', response);

    return response;
  } catch (error) {
    console.error('Error fetching or processing CSV:', error);
  }
}


