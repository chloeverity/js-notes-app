describe('A note list', function () {
  it('can store notes', function () {
    var notelist = new NoteList()
    expect(notelist.getNotes()).isInstanceOf(Array)
  })

  it('can add notes', function () {
    var notelist = new NoteList()
    notelist.addNote("My first note!")
    expect(notelist.getNotes()[0].getText()).isEqualTo("My first note!")
  })
})
