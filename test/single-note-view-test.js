describe("Single Note View", function() {
    it("has a note", function() {
      function Note() {
      }
      var note = new Note
      var singleNoteView = new SingleNoteView(note)
    expect(singleNoteView.note).isEqualTo(note)
    })

    it("outputs the conent of a note in html", function() {
      function Note(text) {
        this._text = text
      }
      var note = new Note("Favourite drink: seltzer")
      var singleNoteView = new SingleNoteView(note)
    expect(singleNoteView.renderNote()).isEqualTo("<div>Favourite drink: seltzer</div>")
    })

})
