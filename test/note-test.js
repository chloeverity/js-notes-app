describe('A note', function () {
  it('has text', function () {
    text = 'My first note'
    var note = new Note(text)

    expect(note.getText()).isEqualTo(text)
  })
})
