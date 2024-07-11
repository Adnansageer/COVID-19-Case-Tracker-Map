function updateMap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
         console.log(rsp.data)
         rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases > 255 ){
                color="rgb(255,0,0)";
            }
            else{
                color="rgb(0,0,0)"
            }

            var circle = L.circle([latitude, longitude], {
                color: color,
                fillColor: color,
                fillOpacity: 0.5,
                radius: 500
            }).addTo(map);
         });
    })
}
updateMap();