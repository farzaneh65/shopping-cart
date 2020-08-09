var objItems = [
  {
    id: "0",
    productName: "Fresh Avocados",
    image: "🥑",
    quantity: "4 ",
    price: "6.50"
  },
  {
    id: "1",
    productName: "Goat and Sheep Cheese",
    image: "🧀",
    quantity: "4",
    price: "5.00"
  },
  {
    id: 2,
    productName: "Apollo Broccoli",
    image: "🥦",
    quantity: "3",
    price: "5.50"
  },
  {
    id: 3,
    productName: "Baby Carrots",
    image: "🥕",
    quantity: "20",
    price: "3.00"
  },
  {
    id: 4,
    productName: "Sweet Corncobs",
    image: "🌽",
    quantity: "2",
    price: "2.00"
  }
];
$(function() {
  //console.log(objItems);
  showItems();
});

function showItems() {
  var itemInfo = "";
  var total = 0;
  itemInfo +=
    "<tr><td><h4>Item</h4></td><td><h4>Quantity</h4></td><td><h4>Price</h4></td><td><h4>Total</h4></td><td><h4>Delete</h4></td></tr>";
  $("#tableInfo").html(itemInfo);
  objItems.forEach(function(item, index) {
    var totalPrice = item.quantity * item.price;
    itemInfo += `<tr>
        <td>${item.productName} ${item.image}</td>
        <td><button type="button" class="btn btn-info" id=btnReduce${item.id} onclick=redQuantity(${item.id})>-</button>  ${item.quantity}  <button type="button" class="btn btn-info" id=btnAdd${item.id} onclick=addQuantity(${item.id})>+</button></td>
        <td>${item.price}</td>
        <td>${totalPrice}</td>
        <td><input type='image' style='width:30px' src='./Image/delete.png' id=btnDel${item.id} onclick=deleteItem(${item.id}) alt='Delete'></td>
        </tr>`;
    total += totalPrice;
  });
  itemInfo += `<tr><td><h3>Total Price : </h3></td><td></td><td></td><td><h3>${total}<h3></td><td><button type="button" class="btn btn-success">Check out</button></td></tr>`;
  $("#tableInfo").html(itemInfo);
}

function deleteItem(relatedItem) {
  objItems.splice(relatedItem, 1);
  showItems();
}

function redQuantity(relatedItem) {
  if (objItems[relatedItem].quantity > 1) {
    objItems[relatedItem].quantity--;
    showItems();
  }
}

function addQuantity(relatedItem) {
  objItems[relatedItem].quantity++;
  showItems();
}
