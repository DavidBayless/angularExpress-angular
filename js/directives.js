app.directive('listBooks', [listBooks]);

function listBooks() {
  return {
    templateUrl: '../views/list.html'
  };
}
