function testViewEmptyNotesList() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  assert.isEqualTo(noteListView.listNotes(), '<ul></ul>')
}
testViewEmptyNotesList()

function testViewPopulatedNotesList() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  noteList.addNote('My first note')
  noteList.addNote('My second note')
  assert.isEqualTo(noteListView.listNotes(), '<ul><li><div>My first note</div></li><li><div>My second note</div></li></ul>')
}
testViewPopulatedNotesList()
