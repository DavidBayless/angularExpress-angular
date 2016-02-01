app.service('bookService', ['$http', bookService]);

function bookService($http) {
  return function() {
    return $http.get('//localhost:3000/api/books/');
  };
}

app.service('postBookService', ['$http', '$q', postBookService]);

function postBookService($http, $q) {
  return function(newItem) {
    return $q(function(resolve, reject) {
      $http.post('//localhost:3000/api/books/', newItem)
      .then(function(response) {
        resolve(response);
      });
    });
  };
}
