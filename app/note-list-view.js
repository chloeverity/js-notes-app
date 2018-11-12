(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.listNotes = function () {
    list = this.noteList.notes.map(
      note => `<li><div>${note.getText()}</div></li>`
    ).join("")
    return `<ul>${list}</ul>`
  }
  exports.NoteListView = NoteListView
})(this)
