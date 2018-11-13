function noteControllerInstantiation() {
  var noteController = new NoteController(new NoteList)
  assert.isInstanceOf(noteController, NoteController)
}
noteControllerInstantiation()

function testInsertInnerHTML() {
  var noteController = new NoteController(new NoteList)
  var element = document.createElement("div")
  element.id = "app";
  document.body.appendChild(element);
  noteController.insertHTML()
  assert.isEqualTo(element.innerHTML, '<ul><li><div>favourite drink: seltzer</div></li></ul>')
}
testInsertInnerHTML()
