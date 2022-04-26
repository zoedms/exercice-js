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

export function array() {}

// Exo 4

export function ceasar() {}
