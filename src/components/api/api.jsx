import axios from 'axios';

export default function Pixabay(page, q) {
  const API_KEY = '29456964-f9d4d1660510bfc9fb16f8b0f';

  const BASE_URL = 'https://pixabay.com/api/';
  const urlSearchParams = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  });
  return axios.get(`${BASE_URL}/?${urlSearchParams}`);
}
