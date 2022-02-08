const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
 
// BUTTON = ALL
var btn1=document.createElement("button");

  btn1.setAttribute("id","btn1");
  btn1.setAttribute("onclick", "showAllMenu(menu);");
  btn1.setAttribute("class","btn btn-outline-dark btn-item");
  btn1.innerText="All";

// BUTTON = KOREA
var btn2=document.createElement("button");

  btn2.setAttribute("id","btn2");
  btn2.setAttribute("onclick", "showAllMenu(korea);");
  btn2.setAttribute("class","btn btn-outline-dark btn-item");
  btn2.innerText="Korea";
  
// BUTTON = JAPAN
var btn3=document.createElement("button");
            
  btn3.setAttribute("id","btn3");
  btn3.setAttribute("onclick", "showAllMenu(japan);");
  btn3.setAttribute("class","btn btn-outline-dark btn-item");
  btn3.innerText="Japan";

// BUTTON = CHİNA
var btn4=document.createElement("button");
            
  btn4.setAttribute("id","btn4");
  btn4.setAttribute("onclick", "showAllMenu(china);");
  btn4.setAttribute("class","btn btn-outline-dark btn-item");
  btn4.innerText="China";

// BTN CONTAİNER
var btnContainer=document.getElementById("myBtnContainer");
  btnContainer.appendChild(btn1);
  btnContainer.appendChild(btn2);
  btnContainer.appendChild(btn3);
  btnContainer.appendChild(btn4);

//MENULER
const korea = menu.filter(food => food.category =="Korea");
const japan = menu.filter(food => food.category == "Japan");
const china = menu.filter(food => food.category == "China");
var container=document.getElementById("dataContainer");

//DİV OLUSTURMA
var showAllMenu = function(menu) {
  container.innerHTML="";
  for(var i=0; i<menu.length; i++) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "menu-items col-lg-6 col-sm-12")

    var image = document.createElement("img");
    image.setAttribute("src", menu[i].img);
    image.setAttribute("alt", menu[i].title);
    image.setAttribute("class", "photo");

    mainDiv.appendChild(image);

    var menuInfo = document.createElement("div");
    menuInfo.setAttribute("class", "menu-info");

    var menuTitle = document.createElement("div");
    menuTitle.setAttribute("class", "menu-title");

    var title = document.createElement("h4");
    title.innerHTML = menu[i].title;

    var price = document.createElement("h4");
    price.innerHTML = menu[i].price;

    menuTitle.appendChild(title);
    menuTitle.appendChild(price);

    var menuText = document.createElement("div");
    menuText.setAttribute("class", "menu-text");
    menuText.innerHTML = menu[i].desc;

    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);

    mainDiv.appendChild(menuInfo);

    container.appendChild(mainDiv);
  }
}



