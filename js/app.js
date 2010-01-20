$(function(){
    $('#mainNav a').click(function(){
        var content = $('#' + $(this).attr('id') + "_content").html();

        $("#content").slideUp('',function(){
            $("#content_inner").html(content);
        }).slideDown();

        $('#mainNav li').removeClass('current_page_item current_page_parent current_page_ancestor');
        $(this).parent().addClass('current_page_item');
        return false;
    });

    $("a.lightbox, .gallery-item a").fancybox({ 
        'zoomOpacity'			: true,
        'overlayShow'			: true,
        'zoomSpeedIn'			: 500,
        'zoomSpeedOut'			: 500,
        'easingIn'				: 'easeOutBack',
        'easingOut'				: 'easeInBack'
    }); 
    $(".text-lightbox").fancybox({ 
        'zoomOpacity'			: true,
        'overlayShow'			: true,
        'hideOnContentClick'	: false,
        'padding'				: 18,
        'callbackOnShow'		: function(){
            $('#fancy_title').hide();
        }
    });

    $('#site_home').click();
});
