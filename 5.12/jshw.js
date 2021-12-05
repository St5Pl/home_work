const productsArray = [
    { name: "carrot", qty: 3, isBought: false, price: 12, sum: 36 },
    { name: "apple", qty: 2, isBought: true, price: 20, sum: 40 },
    { name: "potato", qty: 1, isBought: false, price: 10, sum: 10 },
    { name: "grapes", qty: 1, isBought: true, price: 60, sum: 60 },
    { name: "plums", qty: 1, isBought: false, price: 35, sum: 35 },
    { name: "cabbage", qty: 2, isBought: true, price: 11, sum: 22 },
  ];

  function printProducts()
  {
      let sortedProducts = productsArray.sort(function (a, b) {
        if (a.isBought == false) 
            return -1;
        else 
            return 1;
     });

     console.log(sortedProducts);
  };

  printProducts();

  function buyProduct(name)
  {
    let prodToBuy = productsArray.find((item)=>item.name === name);
    if (prodToBuy != null)
        prodToBuy.isBought = true;
  }

  buyProduct("carrot");  
  printProducts();

  function listToBuy()
  {
    let prodToBuy = productsArray.filter((item)=>item.isBought === false);
    console.log(prodToBuy);
  }

  listToBuy();
