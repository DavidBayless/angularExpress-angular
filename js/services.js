app.service('bookService', ['$http', bookService]);

function bookService($http) {
  return $http.get('//localhost:3000/api/books/');
}
