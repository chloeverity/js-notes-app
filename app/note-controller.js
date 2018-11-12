(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist
    this.noteListView = 'hello'
  }

  NoteController.prototype.addNote = function(text) {
    this.notelist.addNote(text)
  }

  NoteController.prototype.createView = function() {
    this.noteListView = new NoteListView(this.notelist)
  }

  NoteController.prototype.insertHTML = function() {
    html = this.noteListView.listNotes()
    document.getElementById('app').innerHTML = html
  }

  exports.NoteController = NoteController
})(this)
