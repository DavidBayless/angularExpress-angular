app.controller('bookController', ['bookService', bookController]);
// Change Me

function bookController(bookService) {
  var vm = this;
  bookService.then(function(response) {
    vm.title=response;
    console.log(response);
  });

}
