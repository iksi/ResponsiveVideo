(function() {
    'use strict';
    /* global document */
    document.addEventListener('DOMContentLoaded', function() {
        [].forEach.call(document.querySelectorAll('.video > iframe'), function(iframe) {
            iframe.parentNode.style.paddingBottom = (100 * iframe.getAttribute('height') / iframe.getAttribute('width'))+'%';
        });
    });
})();