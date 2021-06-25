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
   * @return  {void}          [return description]
   */
  succeedPosition(geoloc){
    console.log("geoloc:",geoloc, this.divTarget);
    
    
    this.mymap = L.map(this.divTarget).setView([geoloc.coords.longitude, geoloc.coords.latitude], 13);
  }

  failedPosition(){
    console.error("veuillez activer la géolocalisation")
  }
  
}