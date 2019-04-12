'use strict';

App.controller('BookController', ['$scope', 'BookService', function($scope, BookService) {
          var self = this;
          self.book={id:null,name:'',author:'',isbn:'',pages:''};
          self.books=[];
              
          self.fetchAllBooks = function(){
              BookService.fetchAllBooks()
                  .then(
      					       function(d) {
      						        self.books = d;
      					       },
            					function(errResponse){
            						console.error('Error while fetching books');
            					}
      			       );
          };
           
          self.createBook = function(book){
              BookService.createBook(book)
		              .then(
                      self.fetchAllBooks, 
				              function(errResponse){
					               console.error('Error while creating Book.');
				              }	
                  );
          };

         self.updateBook = function(book, id){
              BookService.updateBook(book, id)
		              .then(
				              self.fetchAllBooks, 
				              function(errResponse){
					               console.error('Error while updating Book.');
				              }	
                  );
          };

         self.deleteBook = function(id){
              BookService.deleteBook(id)
		              .then(
				              self.fetchAllBooks, 
				              function(errResponse){
					               console.error('Error while deleting Book.');
				              }	
                  );
          };

          self.fetchAllBooks();

          self.submit = function() {
              if(self.book.id==null){
                  console.log('Saving New Book', self.book);    
                  self.createBook(self.book);
              }else{
                  self.updateBook(self.book, self.book.id);
                  console.log('Book updated with id ', self.book.id);
              }
              self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.books.length; i++){
                  if(self.books[i].id == id) {
                     self.book = angular.copy(self.books[i]);
                     break;
                  }
              }
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.book.id === id) {//clean form if the book to be deleted is shown there.
                 self.reset();
              }
              self.deleteBook(id);
          };

          
          self.reset = function(){
              self.book={id:null,name:'',author:'',isbn:'',pages:''};
              $scope.myForm.$setPristine(); //reset Form
          };

      }]);
