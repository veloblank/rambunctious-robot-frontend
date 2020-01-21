class SearchesAdapter {
  constructor() {
    this.baseUrl = "https://localhost:3000/api/v1";
  }

  getSearches() {
    return fetch(this.baseUrl + "/searches").then(resp => resp.json());
  }

  createSearch(formData) {
    let data = formData;

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ text: data })
    };

    fetch(this.baseUrl + "/searches", options)
      .then(resp => resp.json())
      .then(data => console.log(data));
  }
}
