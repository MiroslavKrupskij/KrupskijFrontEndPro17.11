var codes = {
    "Польща": "6",
    "Україна": "38",
    "США": "1"
  };

  var order = ["Польща", "Україна", "США"];

  var orderedCodes = Object.fromEntries(Object.entries(codes).filter(([key, value]) => order.includes(key)));

  console.log(orderedCodes);