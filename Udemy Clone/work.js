let data = [
  "AddButton",
  {
    content: " Practical Web Development: 22 Courses in 1",
    image_src:"https://tse4.mm.bing.net/th?id=OIP.YFHVRFyHWxiOcb4avVXsWQHaD4&pid=Api&P=0&h=180",
    star: "4.1 ★★★★☆",
    rate: "₹549 "
    
  },
  {
    content: "Internet and Web Development Fundamentals",
    image_src:"https://www.danielhonrade.com/wp-content/uploads/2020/09/Web-development-1.jpg",
    star: "4.1 ★★★★☆ ",
    rate: "₹649"
  },
  {
    content: "Internet and Web Development Fundamentals",
    image_src:"https://tse2.mm.bing.net/th?id=OIP.utAMQuL2Mf1dmlsm72rG9gHaES&pid=Api&P=0&h=180",
    star: "4.1 ★★★★☆",
    rate: "₹469"
  },
  {
    content: "How the Internet Works & the Web Development Process",
    image_src:"https://tse3.mm.bing.net/th?id=OIP.MO8ig-u25-GFznUNN2smWwHaDe&pid=Api&P=0&h=180",
    star: "4.1 ★★★★☆",
    rate: "₹769"
  },
  {
    content: "Ultimate AWS Certified Developer Associate 2024 NEW DVA-C02",
    image_src:"https://tse4.mm.bing.net/th?id=OIP.CKabM3OPiPSNc37oz40_jAHaEK&pid=Api&P=0&h=180",
    star: "4.1 ★★★★☆",
    rate: "₹499"
  },
];
function searchBox() {
  let val = document.getElementById("search_text").value;
  let filtered_data = data.filter((item) => {
    if ( typeof(item)=="string") {
        return item
    } else if (item.content.indexOf(val) !== -1) {
      return item;
    }
  });
  drawCards(filtered_data);
}
function deleteExisting(index) {
  data.splice(index,1);
  drawCards(data);
}
function AddButton_template() {
  return (`<div class="addbox">
      <div onclick="addNew()" class="add">+</div>
    </div>`);
}
let card_parent = document.getElementById("card_parent");
function card(data,index) {
  return ( ` <div class="box">
  <div class="Delete">
<div onclick="deleteExisting(`+index+`)">X</div>
 </div>
      <div class="title">
      <img src="` + data.image_src +`">          
      </div>
      <div class="Boxcontent">
        <div class="topic">` + data.content +`</div>
        <div class="rating">` +data.star +`</div>
        <div class="price">` +data.rate +`</div>
        <div class="seller">Bestseller</div>
      </div>
    </div>`
  );
}
function drawCards(data) {
  let cards = "";
  let index = 0;
  for (let datas of data) {
    if (datas === "AddButton") {
      cards += AddButton_template();

    } else {
      cards += card(datas,index);
    }
    index++;
  }
  card_parent.innerHTML = cards;
}
drawCards(data);
function addNew() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  } else {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  }}
document.getElementById('popupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var imageSource = document.getElementById('imageSource').value;
  var content = document.getElementById('content').value;
  var price = document.getElementById('price').value;
  var rate = document.getElementById('star').value;
  data.push({
    content: content,
    image_src: imageSource,
    star: star,
    rate: price,
   });
  drawCards(data);
  addNew();
});

// for(let datas of data){
//   let num = datas.rate;
//  let price =num.replace("₹", "");
//   if(price<=500){
//     console.log("The courses lesser than 500");
    
//  console.log(datas.content + ' : ' + datas.rate);
//   }
// }