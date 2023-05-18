window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
   });

   function toggleMenu(){
       var menuToggle = document.querySelector('.menuToggle');
       var movement =  document.querySelector('.movement');
       menuToggle.classList.toggle('active');
       movement.classList.toggle('active');
    }


    let cartIcon = document.querySelector('#cart-icon');
    let cart = document.querySelector('.cart');
    let closeCart = document.querySelector('#close-cart');
    
    //open cart
    cartIcon.onclick = () =>{
        cart.classList.add("active");
    };
    
    //close cart
    closeCart.onclick = () =>{
        cart.classList.remove("active");
    };
    
    
    
    //Cart working js
    if (document.readyState =='loading'){
        document.addEventListener('DOMContentLoaded', ready);
    }else{
        ready();
    }
    
    //Marking Function
    function ready(){
        //for removing items from cart
        var removeCartButtons = document.getElementsByClassName('cart-remove');
        console.log(removeCartButtons);
        for (var i = 0; i < removeCartButtons.length; i++){
            var button = removeCartButtons[i];
            button.addEventListener("click", removeCartItem);
        }
        //Quantity Changes
    
        var quantityInputs = document.getElementsByClassName('cart-quantity');
        for (var i = 0; i < quantityInputs.length; i++){
            var input = quantityInputs[i];
            input.addEventListener("change", quantityChanged);
        }
    
        //Add to cart
    
        var addCart = document.getElementsByClassName("add-cart");
        for (var i = 0; i < addCart.length; i++){
            var button = addCart[i];
            button.addEventListener("click", addCartClicked);
        }
    
    }
    
    //To Remove Items from cart
    
    function  removeCartItem(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updatetotal();
    }
    
    //Quantity Changes
    
    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotal();
    }
    
    //Add to cart
    
    function addCartClicked(event) {
        var button = event.target;
        var shopProducts = button.parentElement;
        var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
        var price = shopProducts.getElementsByClassName("price")[0].innerText;
        var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
        addProductTocart(title, price, productImg);
        updatetotal()
    }
    
    
    function addProductTocart(title, price, productImg){
        var cartShopBox = document.createElement("div");
        // cartShopBox.classList.add('cart-box');
        var cartItems = document.getElementsByClassName("cart-content")[0];
        var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
        for (var i = 0; i < cartItemsNames.length; i++){
            alert("You have already added this item to cart")
        }
    }
    
    //Update Total
    function updatetotal() {
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName("cart-price")[0];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            var price = parseFloat(priceElement.innerText.replace("$",""));
            var quantity = quantityElement.Value;
            total = total + (price * quantity);
    
            //if price contains some kobo value
    
            total = Math.round(total * 100) / 100; 
    
    
            document.getElementsByClassName("total-price")[0].innerText = "$" + total;
        }
    }
    
