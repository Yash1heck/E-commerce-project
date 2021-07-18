let hamburger=document.querySelector(".hamburger i")
let navlist=document.querySelector(".nav-list");
let navic=document.querySelector(".nav-icons")
hamburger.addEventListener("click",()=>{
    navlist.classList.toggle("open");
    navic.classList.toggle("open");

});
let pdetails=document.querySelectorAll(".product-item");
let cart=[],heart=[],search=[];
let row;
for(let i=0;i<pdetails.length;++i)
{ 
 icons=pdetails[i].querySelector(".icons");
cart.unshift(icons.querySelector(".bx-cart"));
heart.unshift(icons.querySelector(".bx-heart"));
search.unshift(icons.querySelector(".bx-search"));
}
for(let i of cart)
{
    i.addEventListener("click",addingtocart);
}


let cartdoc=document.querySelector("table");
console.log(cartdoc)


function addingtocart(e){
   
    
    let img=e.target.parentElement.parentElement.parentElement.querySelectorAll("img");
    console.log(img)
    let trow=document.createElement("tr");
    trow.innerHTML= `<td>
        <div class="cart-info">
       ${img[0]}
        <div>
        <p>Boy’s T-Shirt</p> 
        <span>Price: $50.00</span> <br />
        <a href="#">remove</a>
        </div>
        </div> 
        </td>
        <td>
        <input type="number" value="1" min="1" />
        </td>
        <td>$50.00</td>`
      
       
     
        

}
