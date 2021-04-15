function getNode1(){
    var dbRefNodo1 = firebase.database().ref().child("Nodo1");
    var detecteddevices = 0;

    dbRefNodo1.once("value", function(snapshot){
        snapshot.forEach(function(child){
            var timestamp = child.child("timestamp").val();
            var count = child.child("count").val();
            var i;

            for(i=1; i<=count;i++){
            var device = child.child("device"+i);
            var Address = device.child("BLE_address").val();
            var Rssi = device.child("rssi").val();
            var name = device.child("Name").val();

            //console.log(child.key+": "+timestamp);
            //console.log(child.key+": "+count);

            detecteddevices += 1;

            $("#tabla").append("<tr id='entrada'><td>1</td><td>"+detecteddevices+"</td><td>"+timestamp+"</td><td>"+child.key+"</td><td>"+Address+"</td><td>"+Rssi+"dBm</td><td>"+name+"</td></tr>");
            }
      });
      alert("Se han encontrado "+detecteddevices+" dispositivos en el Nodo1");
    });
}

function getNode2(){
    var dbRefNodo2 = firebase.database().ref().child("Nodo2");
    var detecteddevices = 0;

    dbRefNodo2.once("value", function(snapshot){
      snapshot.forEach(function(child){
          var timestamp = child.child("timestamp").val();
          var count = child.child("count").val();
          var i;

          for(i=1; i<=count;i++){
          var device = child.child("device"+i);
          var Address = device.child("BLE_address").val();
          var Rssi = device.child("rssi").val();
          var name = device.child("Name").val();

          //console.log(child.key+": "+timestamp);
          //console.log(child.key+": "+count);

          detecteddevices += 1;

          $("#tabla").append("<tr id='entrada'><td>2</td><td>"+detecteddevices+"</td><td>"+timestamp+"</td><td>"+child.key+"</td><td>"+Address+"</td><td>"+Rssi+"dBm</td><td>"+name+"</td></tr>");
          }
    });
    alert("Se han encontrado "+detecteddevices+" dispositivos en el Nodo2");
  });
}


function getNode9(){
    var dbRefNodo9 = firebase.database().ref().child("Nodo9");
    var detecteddevices = 0;

    dbRefNodo9.once("value", function(snapshot){
      snapshot.forEach(function(child){
          var timestamp = child.child("timestamp").val();
          var count = child.child("count").val();
          var i;

          for(i=1; i<=count;i++){
          var device = child.child("device"+i);
          var Address = device.child("BLE_address").val();
          var Rssi = device.child("rssi").val();
          var name = device.child("Name").val();

          //console.log(child.key+": "+timestamp);
          //console.log(child.key+": "+count);

          detecteddevices += 1;

          $("#tabla").append("<tr id='entrada'><td>9</td><td>"+detecteddevices+"</td><td>"+timestamp+"</td><td>"+child.key+"</td><td>"+Address+"</td><td>"+Rssi+"dBm</td><td>"+name+"</td></tr>");
          }
    });
    alert("Se han encontrado "+detecteddevices+" dispositivos en el Nodo9");
  });
}


function limpiarTabla(){
  $("#tabla tr:not(:first)").remove();
}