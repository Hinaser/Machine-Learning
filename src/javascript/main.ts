/// <reference path="main.d.ts" />
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import * as $ from 'jquery';
(<any>window).$  = $; // For debug purpose, expose jquery object to global window

function main(): any {
    // Navigation sidebar gimmick
    $('#toggle-nav').on('click', function(){
        let layout = $('.dpln-layout.top-header-left-nav-layout');
        if(layout.hasClass('dpln-expand')){
            layout.removeClass('dpln-expand');
            layout.addClass('dpln-collapse');
        }
        else {
            layout.removeClass('dpln-collapse');
            layout.addClass('dpln-expand');
        }
    });
    
    $('figure.collapsible figcaption').on('click', function(){
        let target = $(this).next();
        target.toggleClass('dpln-expand');
    });
}

$(main);
