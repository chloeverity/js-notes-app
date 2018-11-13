describe('A note list view', function () {
  it('can show an empty notes list', function () {
    var noteList = new NoteList
    var noteListView = new NoteListView(noteList)
    expect(noteListView.listNotes()).isEqualTo('<ul></ul>')
  })

  it('can show a populated notes list', function () {
    var noteList = new NoteList
    var noteListView = new NoteListView(noteList)
    noteList.addNote('My first note')
    noteList.addNote('My second note')
    expect(noteListView.listNotes()).isEqualTo('<ul><li><div>My first note</div></li><li><div>My second note</div></li></ul>')
  })
})
