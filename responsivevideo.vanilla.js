/*global document*/
(function () {
    'use strict';
    [].forEach.call(document.querySelectorAll('.video > iframe'), function (iframe) {
        iframe.parentNode.style.paddingTop = (100 * iframe.getAttribute('height') / iframe.getAttribute('width')) + '%';
    });
}());