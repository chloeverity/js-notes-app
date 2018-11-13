describe('A note controller', function () {
  it('can be instantiated', function () {
    var noteController = new NoteController(new NoteList)
    expect(noteController).isInstanceOf(NoteController)
  })

  it('can insert note HTML into a page', function () {
    var noteController = new NoteController(new NoteList)
    var element = document.createElement("div")
    element.id = 'app'
    element.style.display = 'none'
    document.body.appendChild(element)
    noteController.insertHTML()
    expect(element.innerHTML).isEqualTo('<ul><li><div>favourite drink: seltzer</div></li></ul>')
  })
})
