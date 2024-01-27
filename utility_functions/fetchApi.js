export function fetchApiRequest(url,method,data){
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const dataPromise =  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    return dataPromise;
  }