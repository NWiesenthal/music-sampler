$(document).ready(function(){
    
    
    function hideAll() {
        $('#lawyer').hide();
        $('#what').hide();
        $('#slump').hide();
        $('#down').hide();
    }
    

    hideAll();
    

    $('.songClip').click (function() {
  
        hideAll();
                

        switch ( $(this).attr("id") ) {
            case "cover1" :
                $('#lawyer').show();
                break;
            case "cover2" :
                $('#what').show();
                break;
            case "cover3" :
                $('#slump').show();
                break;
            case "cover4" :
                $('#down').show();
                break;
        }
    }); 
    
});

$(document).ready(function(){
    
    
	$('.songClip').click (function() {
        if ( $(this).position().left > 250 ) {
            $(this).animate( { left: "-=250px" }, 'fast' );
        } else {
			$(this).animate( { left: "+=250px" }, 'fast' );
        }
	});
    
    
});



