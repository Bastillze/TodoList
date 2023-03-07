let notes =(function () {
  'use strict'

  this.notes="Things to Remember";

  function newNote(){
     //input for new notes goes here
  }
   return{

   /**
        * @returns {any}
        */
   get newNote(){
    return '${this.newNote}';
   }

   }

   function deleteNote(){
    this.note=()=>console.log('Do you want to delete this note?');
   }
 })();