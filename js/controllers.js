app.controller('bookController', ['bookService', 'postBookService', 'deleteBookService', bookController]);
// Change Me

function bookController(bookService, postBookService, deleteBookService) {
  var vm = this;
  bookService().then(function(response) {
    vm.title=response;
    console.log(response);
  });

  vm.postBook = function(newBook) {
    postBookService(newBook).then(function(response) {
      console.log(response);
      bookService().then(function(resp) {
        vm.title=resp;
        console.log(resp);
      });
    });
  };

  vm.deleteBook = function(bookId) {
    deleteBookService(bookId).then(function(response) {
      console.log(response);
      bookService().then(function(resp) {
        vm.title=resp;
      });
    });
  };

  vm.

}
