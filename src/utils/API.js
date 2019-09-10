const baseApi = "http://0.0.0.0:8000";

const headers = {
  "Content-Type": "application/json"
};

export const get = api =>
  fetch(`${baseApi}${api}`, { method: "GET", headers })
    .then(res => res.json())
    .then(data => data.data);
