/// <reference path="main.d.ts" />
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import * as $ from 'jquery';
(<any>window).$  = $; // For debug purpose, expose jquery object to global window

import Dispatcher from './dispatcher';

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

    // Collapse/Expand menu
    $('figure.collapsible > figcaption').on('click', function(){
        // First of all, collapse all expanding menus
        let self = this;
        $('figure.collapsible.dpln-expand').each(function(){
            if($(self).parent().is(this)){
                return;
            }
            $(this).removeClass('dpln-expand');
            $(this).find('button i.material-icons').text('keyboard_arrow_down');
        });

        let target = $(this).parent();
        target.toggleClass('dpln-expand');

        let btn_icon = $(this).find('button i.material-icons');
        let next_icon = btn_icon.text() == 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        btn_icon.text(next_icon);
    });

    // Collapse menu when a link in the menu is clicked
    $('figure.collapsible ul a').on('click', function(){
        let layout = $('.dpln-layout.top-header-left-nav-layout');
        if(layout.hasClass('dpln-expand')){
            layout.removeClass('dpln-expand');
            layout.addClass('dpln-collapse');
        }
    });

    // Dispatch page script
    Dispatcher.initPageScript();
}

$(main);
