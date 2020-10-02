function weapon(name,type,price,discount){
	this.name=name;
	this.type=type;
	this.price=price;
	this.discount=discount;
	this.cost=function(){
		var totalCost = parseInt(this.price) - parseInt(this.discount);
		return "$" + totalCost;
	}
	this.message = function(){
		var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
		return discountPercent;
	}		
};


	var n=prompt("Enter the weapon name: ");
	var b=prompt("Enter the weapon type: ");
	var p=prompt("Enter the price: ");
	var d=prompt("Enter the discount: ");
	var firstweapon=new weapon(n,b,p,d);


	var secondWeapon = new weapon("Greta", "Mini-Nuke", 40000, 10000);


	var today = new Date();
    var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);	
	

	document.getElementById("weapName1").innerHTML = firstweapon.name;
	document.getElementById("weapType1").innerHTML = firstweapon.type;
	document.getElementById("weapRetail1").innerHTML = firstweapon.price;
	document.getElementById("weapDiscount1").innerHTML = firstweapon.discount;			
	document.getElementById("weapTotal1").innerHTML = firstweapon.cost();
	document.getElementById("discount1").innerHTML = firstweapon.message();	


	document.getElementById("weapName2").innerHTML = secondWeapon.name;
	document.getElementById("weapType2").innerHTML = secondWeapon.type;
	document.getElementById("weapRetail2").innerHTML = secondWeapon.price;
	document.getElementById("weapDiscount2").innerHTML = secondWeapon.discount;			
	document.getElementById("weapTotal2").innerHTML = secondWeapon.cost();
	document.getElementById("discount2").innerHTML = secondWeapon.message();	
	
// update the date in the footer element of the HTML file
	document.getElementById("date").innerHTML = weekFromToday;