const API_KEY = '35194171-84f1d5f9b415a31c1af013b41';

export const fetchParams = (searchQuery, page = 1, perPage = 12) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json().then(data => data.hits);
  });
};
