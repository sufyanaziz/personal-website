export const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
        mode: 'no-cors',
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
