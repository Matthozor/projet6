/* global L, init */

class LeafLetMap{

  /**
   * nos icones
   */
  icons = {};

  /**
   * [constructor description]
   *
   * @param   {String}  target  [domTarget description]
   *
   * @constructor
   */
  constructor(target){
    this.divTarget = target;

    this.icons.greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    navigator.geolocation.getCurrentPosition((position)=>{this.succeedPosition(position)}, ()=>this.failedPosition());

  }

  /**
   * [succeedPosition description]
   *
   * @param   {GeolocationPosition}  geoloc  [geoloc description]
   *
   * @return  {void}                         affiche la carte de base
   */
  succeedPosition(geoloc){
    this.mymap = L.map(this.divTarget).setView([geoloc.coords.latitude, geoloc.coords.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mymap);
    L.marker([geoloc.coords.latitude, geoloc.coords.longitude], {icon: this.icons.greenIcon}).addTo(this.mymap)
    init();

  }

  failedPosition(){
    console.error("veuillez activer la géolocalisation");
    alert("pas de bras pas de chocolat")
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
    console.log(marker);
    L.marker([marker.lat, marker.long]).addTo(this.mymap)
    .bindPopup(`${marker.restaurantName}`)
    // .openPopup();
  }
  
}