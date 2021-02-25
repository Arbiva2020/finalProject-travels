
  const items = [
    {
      id: "111111",
      name: "2 pl tent",
      description: "High quality tent for two people",
      price: 250,
      avaliability: "Available",
      img: TentFor2,
      category: "tents",
      tentImg1: TentImg1,
      tentImg2: TentImg2
    },
    {
      id: "222222",
      name: "Pocket knife",
      description: "strong and reliable, a must have!",
      price: 300,
      avaliability: "Available",
      img: PocketKnife,
      category: "knives"
    },
      {
      id: "333333", 
      name: "Shoresh sandals",
      description: "the most convenient sandals for long walks",
      price: 270,
      avaliability: "Available",
      img: Sandals,
      category: "showes"
    },
      {
      id: "444444",
      name: "Hammock",
      description: "High quality fabric, ideal for a day out",
      price: 400,
      avaliability: "Available",
      img: Hammock,
      category: "leasure"
    },
      {
      id: "555555",
      name: "Hiking showes",
      description: "Stabel, flexible sole, greate for hiking everywhere",
      price: 500,
      avaliability: "Out of stock ",
      img: Shoe,
      category: "showes"
    },
      {
      id: "666666",
      name: "Coffee kit",
      description: "Convenient, compact and light weighted",
      price: 200,
      avaliability: "Available",
      img: Coffee,
      category: "leasure" 
    },
  ];

  function GetAllItems(){

  }

  function getCategory(){
      
  }

  function GetItemByCategory(props){
    items.filter( (item)=> item.category==="category");
    console.log(items);
  }