// ==UserScript==
// @name         JVC noelshack lien direct
// @namespace    https://github.com/vitoo
// @version      0.6
// @description  Lien direct vers les images noelshacks
// @author       vito
// @match        http://www.jeuxvideo.com/forums*
// @match        http://www.jeuxvideo.com/messages*
// @match        https://www.jeuxvideo.com/forums*
// @match        https://www.jeuxvideo.com/messages*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/vitoo/JVC-noelshack-lien-direct/master/JVC%20noelshack%20lien%20direct.user.js
// @updateURL 	 https://raw.githubusercontent.com/vitoo/JVC-noelshack-lien-direct/master/JVC%20noelshack%20lien%20direct.user.js
// ==/UserScript==

var images = document.getElementsByClassName("img-shack");

for (var i = 0, len = images.length; i < len; i++) {
    var image = images[i];
    var src = image.src;
    var parent = image.parentNode;
    var extension = parent.href.split(".").pop();
    var direct = src.replace(/(.*?)\/minis\/(.*)\.\w+/i, "$1/fichiers/$2." + extension);
    parent.href = direct;
}
