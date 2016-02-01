app.controller('bookController', ['bookService', 'postBookService', bookController]);
// Change Me

function bookController(bookService, postBookService) {
  var vm = this;
  bookService.then(function(response) {
    vm.title=response;
    console.log(response);
  });

  vm.postBook = function(newBook) {
    postBookService(newBook).then(function(response) {
      // vm.title=response;
      bookService.then(function(response) {
        vm.title=response;
        console.log(response);
      });
    });
  };

}
