class DataManager{
  constructor(){

  }

  async getData(){
    const data = await fetch("data.json");
    return await data.json();
  }
}