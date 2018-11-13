(function (exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.renderNote = function() {
    return `<div>${this.note._text}</div>`
  }

  exports.SingleNoteView = SingleNoteView
})(this)
