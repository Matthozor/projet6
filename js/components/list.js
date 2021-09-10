/* global dataManager */
class List{
  constructor(domTarget){
    this.DOM = domTarget;
    this.min = 0;
    this.max = 5;
  }

  /**
   * [update description]
   *
   * @param   {Array}  restaurants  [liste description]
   *
   * @return  {void}         [return description]
   */
  update(restaurants){
    this.clear();
    restaurants.forEach(element => {
      // this.restaurants.push(
        new Restaurant(this.DOM, element)
        // );
    });
  }

  clear(){
    this.DOM.innerHTML="<h2 class='restaurants__list'>Ma liste de restaurants</h2>";
    new Filter(this.min,this.max, this.changeFilter, this.DOM );
  }

  changeFilter(min,max){
    console.log(this,min,max);
  }
}