document.addEventListener("DOMContentLoaded", function () {
  const searchResults = document.querySelectorAll(".t4s-frm-search__results")
  document.addEventListener("click", function (event) {
    const addClass = event.target.closest(".t4s-search-header__form-wrap");
    searchResults.forEach(el => el.classList.toggle("active", addClass))
  });
});

/* Free Sample */
if($("#orderSample").length) {
  
  $("#orderSample").on("click", function(e) {
    
    e.preventDefault();
    
    var sample = $(this).data("sample");
    
    var success = "";
    var html = "";
    

    jQuery.getJSON('/cart.js', function(cart) {

      var found = false;
      var count = 0;

      $.each(cart.items, function( index, item ) {
        if(item.handle == sample && false) {
          found = true;

          return;
        } else {
          $.each(item.properties, function( key, value ) {

            if(key == 'Sample') {
              count++; 
            }
          });
        }
      });

      if(found) {
        success = "error";
        html = "You already have sample this in your cart.";
        showFeedback(success, html);
      } else if (count >= 4) {
        success = "error";
        html = "You already have the maximum number of samples in your cart.";
        showFeedback(success, html);
      } else {
        addSampleToCart(sample);
      }
         
       
       
     });
    
    
    function addSampleToCart(sample) {
      
      if(sample) {
      
        jQuery.getJSON('/products/'+sample+'.js', function(product) {

          var data = {
            quantity: 1,
            id: product.variants[0].id,
            properties: {
              'Sample': 'True'
            }
          };

          $.ajax({
            type: 'POST', 
            url: '/cart/add.js',
            dataType: 'json', 
            data: data,
            success: function() {
              success = "success";
              html = "<span class='icon icon-check'></span> Added sample to cart!&nbsp;<a href='/cart'>View cart</a>";
              showFeedback(success, html);
            },
            error: function(e) {
              success = "error";
              html = "Unable to locate Sample";
              showFeedback(success, html);
            }
          });
        });

      } else {
        success = "error";
        html = "Unable to locate Sample";
        showFeedback(success, html);
      }
    }
    
    function showFeedback(success, html) {
      $('.ajaxified-cart-feedback').remove();
      var feedback = '<p class="ajaxified-cart-feedback ' + success + '">' + html + '</p>';
      $("#orderSample").after(feedback);
      $('.ajaxified-cart-feedback').slideDown();
    }
    
  });
}