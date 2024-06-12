let map;
let pin;

const btnPosition = document.getElementById('btnGetPosition');
let local = document.getElementById('local');
let result = document.getElementById('result');

function GetMap(){
    map = new Microsoft.Maps.Map('#myMap',{
        center: new Microsoft.Maps.Location(-23.502098271488702, -46.420680231192996),
         mapTypeId: Microsoft.Maps.MapTypeId.street,
         zoom: 20
    });

  

    btnPosition.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            map.setView({center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude), zoom: 40});
            let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(),null);
            
            map.entities.push(pushpin);

        });
    });

    
 
};

