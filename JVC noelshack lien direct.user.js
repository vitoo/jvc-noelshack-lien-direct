// ==UserScript==
// @name         JVC noelshack lien direct
// @namespace    https://github.com/vitoo
// @version      0.2
// @description  Lien direct vers les images noelshacks
// @author       vito
// @match        *.jeuxvideo.com/forums*
// @match        *.jeuxvideo.com/messages*
// @grant        none
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
