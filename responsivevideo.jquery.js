$(function(){
    'use strict';
    /* global $ */
    $(document).ready(function(){
        $('.video').each(function(){
            var iframe = $(this).find('iframe');
            $(this).css('paddingBottom', (100 * iframe.attr('height') / iframe.attr('width'))+'%');
        });
    });
});