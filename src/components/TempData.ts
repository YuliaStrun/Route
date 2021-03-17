const allRouteNet: any = [
    {
      title: "Ivanovo-Murnansk",
      distance: 1200,
      numberOfDaysOnTheWay: 2,
      price: 10000,
    },
    {
      title: "Moscow-St.Petersburg",
      distance: 1000,
      price: 5000,
    },
    {
      title: "Nizhny Novgorod-Yaroslavl",
      distance: 400,
      price: 3000,
    }
  ];

export const getData = () => {
    return allRouteNet;
}