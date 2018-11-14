describe('A note controller', function () {
  it('can be instantiated', function () {
    var noteController = new NoteController(new NoteList)
    expect(noteController).isInstanceOf(NoteController)
  })

  it('can insert note HTML into a page', function () {
    var htmlMock = {
      innerHTML: 'a string'
    }
    document.getElementById = function(id) {
      return htmlMock;
    }
    var noteController = new NoteController(new NoteList)
    noteController.insertHTML()
    expect(htmlMock.innerHTML).isEqualTo('<ul><li><div>favourite drink: sel...</div></li></ul>')
  })
})
