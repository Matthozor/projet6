/** global L */

class LeafLetMap{

  /**
   * [constructor description]
   *
   * @param   {String}  target  [domTarget description]
   *
   * @constructor
   */
  constructor(target){
    this.divTarget = target;
    navigator.geolocation.getCurrentPosition((position)=>{this.succeedPosition(position)}, ()=>this.failedPosition());
  }

  /**
   * [succeedPosition description]
   *
   * @param   {GeolocationPosition}  geoloc  [geoloc description]
   *
   * @return  {Promise}          [return description]
   */
  async succeedPosition(geoloc){
    this.mymap = L.map(this.divTarget).setView([geoloc.coords.latitude, geoloc.coords.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mymap);
    
    const data = await database.getData();
    data.forEach(marker => {
      this.addMarker(marker);
    });
    liste.update(data);

  }

  failedPosition(){
    console.error("veuillez activer la géolocalisation")
  }

  /**
   * [addMarker description]
   *
   * @param   {Object}  marker                 [marker description]
   * @param   {String}  marker.restaurantName
   * @param   {String}  marker.address
   * @param   {Number}  marker.lat
   * @param   {Number}  marker.long
   * @param   {Array}   marker.ratings
   *
   * @return  {void}                           ajoute un marker sur la carte
   */
  addMarker(marker){
    L.marker([marker.lat, marker.long]).addTo(this.mymap)
    .bindPopup(`${marker.restaurantName}`)
    // .openPopup();
  }
  
}