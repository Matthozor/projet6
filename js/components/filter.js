class Filter {
  /**
   * [constructor description]
   *
   * @param   {Number}  min        [min description]
   * @param   {Number}  max        [max description]
   * @param   {Function}  callback   [callback description]
   * @param   {HTMLElement}  domTarget  [domTarget description]
   */
  constructor(min, max, callback, domTarget) {

    this.DOM = document.createElement("filter3");
    this.initComponent();
    domTarget.appendChild(this.DOM);
  }

  initComponent() {
    var range = this.DOM;

    noUiSlider.create(range, {

      start: [1, 5],
    connect: true,
    range: {
        'min': 1,
        'max': 5
    }
    });
  }
}