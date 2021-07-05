class Restaurant{

  restaurantName;
  address;
  lat;
  long;
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
    this.DOM.className="bidule";
    this.DOM.innerHTML = `
      <h2 class="title">${this.restaurantName}</h2>
    `;
  }
  remove(){
    this.DOM.parentNode.removeChild(this.DOM);


  }
  click(){
    alert(this.restaurantName);
  }
}