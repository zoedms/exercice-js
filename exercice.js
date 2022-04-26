// Exo 1

export function AirCircle(air) {
  return 2 * Math.PI * air;
}

// Exo 2

export function premierDimanche() {
  for (let annee = 2014; annee <= 2050; annee++) {
    let d = new Date(annee, 0, 1);
    if (d.getDay() === 0) {
      console.log("Le premier jour en " + annee + " est un dimanche");
    }
  }
}

// Exo 3

export function fibonnacci(array) {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;

  for (let i = 2; i <= array; i++) {
    somme = n1 + n2; //Somme des nombres
    n1 = n2;
    n2 = somme;
  }
  return array ? n2 : n1;
}

// Exo 4

export function ceasar(mot) {
    let array = [];

}
    
