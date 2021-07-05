const database = new DataManager();
const carte = new LeafLetMap("map");
const liste = new List(document.getElementById("list"));


async function init(){
  const data = await database.getData();
  data.forEach(marker => {
    carte.addMarker(marker);
  });
  liste.update(data);
}

