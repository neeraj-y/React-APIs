export const getData = (url) => {
    return fetch(url).then(response => response.json());
}

export const postData = (url, data) => {
    // The parameters we are gonna pass to the fetch function
    let fetchData = { 
        method: 'POST', 
        body: data,
        headers: new Headers()
    };

    return fetch(url, fetchData).then(response => response.json());
}