export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
  .then(response => response.json())
}

export const addUrl = (urlInfo) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(urlInfo)
  })
.then(response => response.json())
}
