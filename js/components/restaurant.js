class Restaurant{


  /**
   * @typedef {Object} evaluation
   * @property {Number} stars
   * @property {String} comment 
   */

  address;
  restaurantName;
  lat;
  long;
  
  /**
   * pointeur nous permetant de savoir si on affiche les commentaires ou non
   * @type {Boolean}
   */
  showComment = false;
  
  /**
   * liste des évaluations 
   * @type {Array.<evaluation>}
   */
  ratings;

  constructor(domTarget, props){
    this.DOM = document.createElement("restaurant");
    this.DOM.onclick = this.click.bind(this);
    domTarget.appendChild(this.DOM);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
    this.render();
  }

  render(){
    // this.DOM.className="bidule";
    let html = `
    <h2 class="title">${this.restaurantName}</h2><aside class="stars ${this.getStars()}"></aside>
  `;

    if (this.showComment){
      this.ratings.forEach(el => {
        html += this.templateComment(el);
      })
      
    }

    this.DOM.innerHTML = html;
  }

  /**
   * met en forme un commentaire
   *
   * @param   {evaluation}  comment  [comment description]
   *
   * @return  {String}           [return description]
   */
  templateComment(comment){
    return `
      <article>
        <aside class="stars ${this.StarQtyToText(comment.stars)}"></aside>
        <p>${comment.comment}</p>
      </article>
    `;
  }
  remove(){
    this.DOM.parentNode.removeChild(this.DOM);
  }

  /**
   * calcule la moyenne et retourne la bonne classe
   *
   * @return  {String}  une classe "oneStar" | "twoStars" | "threeStars" | "fourStars"| "fiveStars"
   */
  getStars(){
    let total = 0;
    this.ratings.forEach(el => {total+= el.stars});
    const average = Math.round(total / this.ratings.length);
    return this.StarQtyToText(average);
  }

  /**
   * [StarQtyToText description]
   *
   * @param   {Number}  qty  le nombre d'
   *
   * @return  {String}  une classe "oneStar" | "twoStars" | "threeStars" | "fourStars"| "fiveStars"
   */
  StarQtyToText(qty){
    const numberToText = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five"
    ];
    return numberToText[qty]+"Star"+ ( qty > 1 ? "s" : "" );

  }

  click(){
    this.showComment = ! this.showComment;
    this.render();
  }
}