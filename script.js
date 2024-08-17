let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => 
{
    navbar.classList.remove('active');
    userinfo.classList.remove('active');
    // shoppingCart.classList.remove('active');
    shoppingCart.classList.toggle('active');
}

let userinfo = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => 
{
    navbar.classList.remove('active');
    // userinfo.classList.remove('active');
    shoppingCart.classList.remove('active');
    userinfo.classList.toggle('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => 
{
    // navbar.classList.remove('active');
    userinfo.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.toggle('active');
    
}

window.onscroll= () => 
{
    navbar.classList.remove('active');
    userinfo.classList.remove('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');

}


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // when click on add to cart (on product section)

  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn2'); // Select all "Add to Cart" buttons

    // Loop through each button and add event listener
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of the button click

            const shoppingCart = document.querySelector('.shopping-cart'); // Select the shopping cart element
            shoppingCart.classList.add('active'); // Add 'active' class to show the shopping cart
        });
    });
});

// when click on shop now on home page
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.btn1'); // Select all "Add to Cart" buttons

  // Loop through each button and add event listener
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default action of the button click

          const shoppingCart = document.querySelector('.shopping-cart'); // Select the shopping cart element
          shoppingCart.classList.add('active'); // Add 'active' class to show the shopping cart
      });
  });
});



// increment and decrement btn logic also trash btn 

document.addEventListener('DOMContentLoaded', function() {
  const incrementButtons = document.querySelectorAll('.increment-btn');
  const decrementButtons = document.querySelectorAll('.decrement-btn');
  const trashIcons = document.querySelectorAll('.fa-trash');

  // Add event listeners for increment buttons
  incrementButtons.forEach(button => {
      button.addEventListener('click', function() {
          updateQuantity(button, 1); // Pass the button and quantity change
      });
  });

  // Add event listeners for decrement buttons
  decrementButtons.forEach(button => {
      button.addEventListener('click', function() {
          updateQuantity(button, -1); // Pass the button and quantity change
      });
  });

  // Add event listeners for trash icons
  trashIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          const quantitySpan = icon.parentElement.querySelector('.quantity');
          quantitySpan.textContent = '0'; // Set quantity to 0
          updateTotalPrice(); // Update total price after changing quantity
      });
  });

  // Function to update quantity
  function updateQuantity(button, change) {
      const quantitySpan = button.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantitySpan.textContent);
      quantity += change; // Increment or decrement quantity
      quantitySpan.textContent = quantity;
      updateTotalPrice(); // Update total price after changing quantity
  }

  // Function to update total price
  function updateTotalPrice() {
      const boxes = document.querySelectorAll('.shopping-cart .box');
      let totalPrice = 0;

      boxes.forEach(box => {
          const price = parseFloat(box.querySelector('.price').textContent.replace('₹', ''));
          const quantity = parseInt(box.querySelector('.quantity').textContent);
          totalPrice += price * quantity;
      });

      document.querySelector('.total').textContent = `total : ₹${totalPrice.toFixed(2)}`;
  }
});

// create-now btn click 

document.addEventListener("DOMContentLoaded", function() {
    const createNowBtn = document.getElementById('create-now');

    createNowBtn.addEventListener('click', function() {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 0;
        setTimeout(function() {
            window.location.href = 'account.html'; // Change 'create.html' to your create page URL
        }, 1000); // 1000ms = 1s
    });
});


 // Get the button element orderButton 
 const orderButton = document.getElementById('orderButton');

 // Add click event listener to the button
 orderButton.addEventListener('click', function() {
     // Redirect to order.html
     window.location.href = 'order.html';
 });


