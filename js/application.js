// Loads on Document.ready
$(function() {
    
    // @see http://api.jquery.com/hover/
    $('div.productBox').hover(function(event) {

        // @see http://api.jquery.com/hide/
        $('div.headline').hide();

        var target = $(this).attr('data-target');

        // @see http://api.jquery.com/show/
        $('#' + target).show();
        $(this).find('img.prodArrow').show();

    }, function(event) {
        $('div.headline').hide();
        $('#headline').show();
         $(this).find('img.prodArrow').hide();
       
    });


});
