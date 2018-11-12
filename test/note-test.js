(function(exports) {
  function testNoteHasText() {
    text = 'My first note'
    var note = new Note(text)

    assert.isEqualTo(note.getText(), text)
  }
  testNoteHasText()
})(this)
