(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.getNotes = function() {
    return this.notes
  }

  NoteList.prototype.addNote = function(string) {
    note = new Note(string)
    this.notes.push(note)
  }
  exports.NoteList = NoteList
})(this)
