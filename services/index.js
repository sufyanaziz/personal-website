export const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};
