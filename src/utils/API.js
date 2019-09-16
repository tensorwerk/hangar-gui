const baseurl = "http://0.0.0.0:8000";

const headers = {
  "Content-Type": "application/json"
};

export const get = url =>
  fetch(`${baseurl}${url}`, { method: "GET", headers })
    .then(res => res.json())
    .then(data => data.data);

export const post = (url, data) =>
  fetch(`${baseurl}${url}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => data.data);
