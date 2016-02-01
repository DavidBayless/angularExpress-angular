app.service('bookService', ['$http', bookService]);

function bookService($http) {
  return $http.get('//localhost:3000/api/books/');
}

app.service('postBookService', ['$http', postBookService]);

function postBookService($http) {
  return function(newItem) {
    return $http.post('//localhost:3000/api/books/', newItem);
  };
}
