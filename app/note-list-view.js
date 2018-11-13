(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
    this.MAX_NOTE_LENGTH = 20
  }

  NoteListView.prototype._formatNote = function(string) {
    if (string.length > this.MAX_NOTE_LENGTH) {
      return `${string.slice(0, this.MAX_NOTE_LENGTH)}...`
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
