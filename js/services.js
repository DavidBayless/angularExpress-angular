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

app.service('deleteBookService', ['$http', '$q', deleteBookService]);

function deleteBookService($http, $q) {
  return function(bookId) {
    return $q(function(resolve, reject) {
      $http.delete('//localhost:3000/api/books/' + bookId)
      .then(function(response) {
        resolve(response);
      });
    });
  };
}
