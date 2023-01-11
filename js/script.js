let SearchButton = document.getElementById("search-btn")
let SearchForm = document.querySelector(".search-form")
let ShoppingCart = document.getElementById("cart-btn")
let CartItemsContainer =document.querySelector(".cart-items-container")

SearchButton.addEventListener("click" , () => {
    SearchForm.classList.toggle("active")
    CartItemsContainer.classList.remove("active")
})

ShoppingCart.addEventListener("click" , ()=>{
    CartItemsContainer.classList.toggle("active")
    SearchForm.classList.remove("active")
})