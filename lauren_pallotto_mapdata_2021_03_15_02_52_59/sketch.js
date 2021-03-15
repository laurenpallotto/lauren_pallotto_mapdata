const key = 'pk.eyJ1IjoicmVuLXBhbGxvdHRvIiwiYSI6ImNrbTl3c3ozMTFtMnEyd3FsamFxMXUwZngifQ.5tvDYM0KmqhS9KUSfQREUg';

const options = {
  lat: 51.5074,
  lng: 0.1278,
  zoom: 8,
  style: 'mapbox://styles/ren-pallotto/ckm9xdlqb2qva17o7mgxz2evk',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
 placesivebeen = loadTable('placesivebeen','csv','header');
 
}





  for (let i = 0; i < placesivebeen.getRowCount(); i++) {
 
    const latitude = Number(placesivebeen.getString(i, 'reclat'));
    const longitude = Number(placesivebeen.getString(i, 'reclong'));
    const pos = myMap.latLngToPixel(latitude, longitude);

    const place = placesivebeen.getString(i,'name');
    
    let size = placesivebeen.getString(i, 'date');
    size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
    stroke(0);
    ellipse(pos.x, pos.y, size, size);
    
    if(dist(pos.x,pos.y,mouseX,mouseY) < size){
      textSize(32);
      text(place,pos.x,pos.y);
    }
  

  
  
 
}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); 
  }, 200);
});



