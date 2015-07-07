/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. 
 * | jquery.org/license */
;(function($, window, document, undefined) {
    $(document).ready(function() {
        var emailSubscribeFormWrap = $("#foodRecallSubscription_form");
        var subscriberEmail = $("#subscribe-email");
        
        $("#btnSubscribe", emailSubscribeFormWrap).click(function() {
            //alert(subscriberEmail.val());
            window.location.href = 'https://public.govdelivery.com/accounts/USHHSFS/subscribers/qualify?topic_id=USHHSFS_5&email='+subscriberEmail.val() +'&commit=Submit';
            //return false;
            
        });
        
        var offset = 250;
        var duration = 300;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('#scroll-up').fadeIn(duration);
            } else {
                jQuery('#scroll-up').fadeOut(duration);
            }
        });

        jQuery('#scroll-up').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });
    
}(jQuery, window, document));
