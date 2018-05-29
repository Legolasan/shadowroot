var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0bd475d1aa464784891298baa6eacc55';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    