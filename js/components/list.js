class List{

  restaurants = [];

  constructor(domTarget){
    this.DOM = domTarget;
  }

  /**
   * [update description]
   *
   * @param   {Array}  restaurants  [liste description]
   *
   * @return  {[type]}         [return description]
   */
  update(restaurants){
    this.clear();
    restaurants.forEach(element => {
      this.restaurants.push(new Restaurant(this.DOM, element));
    });
  }

  clear(){

  }
}