(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteList.addNote("favourite drink: seltzer")
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.insertHTML = function() {
    html = this.noteListView.listNotes()
    div = document.getElementById('app').innerHTML = html
  }

  exports.NoteController = NoteController
})(this)
