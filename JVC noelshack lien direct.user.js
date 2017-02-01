// ==UserScript==
// @name         JVC noelshack lien direct
// @namespace    https://github.com/vitoo
// @version      0.4
// @description  Lien direct vers les images noelshacks
// @author       vito
// @match        http://www.jeuxvideo.com/forums*
// @match        http://www.jeuxvideo.com/messages*
// @match        https://www.jeuxvideo.com/forums*
// @match        https://www.jeuxvideo.com/messages*
// @grant        none
// @require 	 http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/vitoo/JVC-noelshack-lien-direct/master/JVC%20noelshack%20lien%20direct.user.js
// @updateURL 	 https://raw.githubusercontent.com/vitoo/JVC-noelshack-lien-direct/master/JVC%20noelshack%20lien%20direct.user.js
// ==/UserScript==

jQuery('a[data-def=NOELSHACK]').each(function () {    
    bad_url =  jQuery(this).attr('href');    
    var regexp = /www.noelshack.com\/([0-9]*)-([0-9]*)-([a-zA-Z0-9\-]*).(jpg|png|jpeg|bmp|gif)/i;
    var result = bad_url.match(regexp);
    if(result != null){
        var bad_url = result[0];
        var date = result[1];
        var num = result[2];
        var name = result[3];
        var format = result[4];
        var direct_url = 'http://image.noelshack.com/fichiers/'+date+'/'+num+'/'+name+'.'+format;
        jQuery(this).attr('href',direct_url);    
    }    
});
