import type { GiphyRandomResponse } from "../data/giphy.respone";

const API_KEY = 'Q0WcCszvvloMAJBuLAhXaK0UbKSzwlc4';

const createImageInsideDOM = (imageUrl: string) => {
  const img = document.createElement('img');
  img.src = imageUrl;
  document.body.appendChild(img);
};

const getRandomGifUrl = async (): Promise<string> => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

  const { data }: GiphyRandomResponse =
    await response.json();
  return data.images.original.url;
};

getRandomGifUrl()
  .then(createImageInsideDOM)
  .catch((error) => {
    console.error('Error fetching data:', error);
  });