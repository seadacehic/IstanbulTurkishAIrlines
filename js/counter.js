function counter() {
  var i = 0, j = 0, k = 0, l = 0;
  var populacije = document.getElementById("populacija");
  var hrane = document.getElementById("hrana");
  var dzamije = document.getElementById("dzamija");
  var turista = document.getElementById("turisti");

  var uvecaj = function () {
    populacije.innerHTML = `${i}`;
    hrane.innerHTML = `${k}`;
    dzamije.innerHTML = `${l}`;
    turista.innerHTML = `${j}`;


    
    if (i == 5500) {
      clearInterval(this);
    }
    else {
      i++;
    }
    
    if (j == 24) {
      clearInterval(this);
    }
    else {
      j++;
    }
    
    if (k ==195 ) {
      clearInterval(this);
    }
    else {
      k++;
    }
  
    if (l == 3000) {
      clearInterval(this);
    }
    else {
      l++;
    }
  };
  
  setInterval(uvecaj, 80);
  uvecaj();
} 

counter();