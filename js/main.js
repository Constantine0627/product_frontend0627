$(document).ready(function(){
// 	$(".add").click(function(){
// 		var lilar = $("li");

// 		if(lilar.length >=10) {
// 			alert("Your limit is over")
// 		}else{
// 			var li = $("<li><img src ='img/TUF_Red.png'/>" + (lilar.length + 1) + "</li>");
// 					$("ul").after(li);

// 		}
		
// 	});

// $(".remove").click(function(){
// 	var lilar = $("li")

// if (lilar.length <= 0) {

// 	alert("Your limit is over")

// }else{

// 	lilar[lilar.length - 1].remove();
// }


// 	})





products.forEach(function(tovar){
	var product =$(`<div class="product">
		<img alt="Keyboard" src="${tovar.image}">
		<p class="type">${tovar.type}</p>
		<h4><a href="#">${tovar.name}</a></h4>
		<label for="count">Tovar Soni</label>
		<input type="number" name="count">
		<p class="price">${tovar.price}</p>
		<p class="totalPrice">Umumiy narh:44.99$</p>
		<button class="btnAddCard">Add</button>
	</div>`)
$(".container").append(product);

})

});