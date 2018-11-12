(function(exports) {
  function testCanStoreNotes() {
    var notelist = new NoteList(notes)
    assert.isEqualTo(notelist.getNotes(), [])
  }
  testCanStoreNotes()
})(this)
