(function(exports) {
  function testCanStoreNotes() {
    var notelist = new NoteList()
    console.log(notelist.getNotes());
    assert.isInstanceOf(notelist.getNotes(), Array)
  }
  testCanStoreNotes()
})(this)
