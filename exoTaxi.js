let feuRouge=30;

let vieJohn=10;

function choisirMusique() {
  feuRouge--
    const musique = Math.floor(Math.random() * 5);
  
    
    if (musique === 1) {
      vieJohn--; 
      console.log('"Anissa de Wejdene" Un choix de mauvais goût, vous changez de taxi : '+ feuRouge + " feu rouge restant");
    } else if (musique === 2) {
        console.log('"Kaaris - Zoo" Un peu sauvage mais pourquoi pas : '+ feuRouge + " feu rouge restant");
    } else if (musique === 3) {
        console.log('"Freeze Corleone - MW2" Le nouvelle album, intéressant : '+ feuRouge + " feu rouge restant");
    } else if (musique === 4) {
        console.log('"Superbus - Radiosong" Je ne connais pas, une bonne découverte : '+ feuRouge + " feu rouge restant");
    } else if (musique === 5) {
        console.log('"Metallica - One" Un calssique, il a de bon goût ce taxi : '+ feuRouge + " feu rouge restant");
    } 
  }



while (vieJohn > 0 && feuRouge > 0) {
    const musique = choisirMusique();
    
  }


  if (vieJohn <= 0) {
    console.log("John n'a pas pu finir son trajet");
    console.log(`Il retait ${feuRouge} feu rouge`);
    alert("dommage")
  } else {
    console.log("John à reussi avec " + vieJohn+ " point de santé mental");
    alert("Bravo")
  }
  
