let carInfo = {
  manufacturer: "mercedes",
  model: "gle250",
  gradYear: 2018,
  avgSpeed: 140,
  volumeFuelTank: 60,
  avgFuelConsumption: 8.2,
  // drivers: "Tymur",
  showCarInfo() {
    console.log(`Изготовитель: ${this.manufacturer};\n модель: ${this.model};\n год выпуска: ${this.gradYear};\n средняя скорость, км/ч: ${this.avgSpeed};\n объем бака, л: ${this.volumeFuelTank};\n средний расход топлива, л/100км: ${this.avgFuelConsumption};`);
    if (carInfo.drivers != undefined) {
      console.log(`водители: ${this.drivers};`);
    }
  }
};
// carInfo.drivers = "Tymur";
carInfo.drivers = "Anna";
carInfo.showCarInfo();

let travelCalc = {
    distance: 830,
    fuelToTravel() {
    console.log(`Расстояние: ${travelCalc.distance} км;\n 
      Необходимый объем топлива: ${Math.ceil(travelCalc.distance*carInfo.avgFuelConsumption/100)} л;\n 
      Пробег на одной заправке: ${Math.round((carInfo.volumeFuelTank/carInfo.avgFuelConsumption)*100)} км;`);
    if (travelCalc.distance > (carInfo.volumeFuelTank/carInfo.avgFuelConsumption*100)) {
      console.log(`Необходимая заправка: ${Math.ceil((travelCalc.distance*carInfo.avgFuelConsumption/100)-carInfo.volumeFuelTank)} л`);
    } 
  },
};
travelCalc.fuelToTravel();