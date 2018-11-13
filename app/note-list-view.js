(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype._formatNote = function(string) {
    if (string.length > 20) {
      return string.slice(0, 20) + "..."
    } else {
      return string
    }
  }

  NoteListView.prototype.listNotes = function () {
    list = this.noteList.notes.map(
      note => `<li><div>${this._formatNote(note.getText())}</div></li>`
    ).join("")
    return `<ul>${list}</ul>`
  }
  exports.NoteListView = NoteListView
})(this)
