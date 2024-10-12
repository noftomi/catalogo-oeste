async function fetchAndProcessCSV() {
  try {
    const responseCSV = await fetch(
      "https://docs.google.com/spreadsheets/d/1CFjNITS2MatNET1wth1VaBTfVuTSUtkaMxlPurwdqa8/pub?gid=0&single=true&output=csv"
    ).then((response) => response.text());

    const response = responseCSV
      .split("\n")
      .slice(1)
      .map((row) => {
        const [id, productName, description, price, type, filter_brand] =
          row.split(",");
        return {
          id,
          productName,
          description,
          price: Number(price),
          type,
          filter_brand,
        };
      });

    return response;
  } catch (error) {
    console.error("Error fetching or processing CSV:", error);
  }
}
