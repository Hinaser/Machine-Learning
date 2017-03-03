/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import * as $ from 'jquery'
import * as Clipboard from 'clipboard'

export function initSidebar() : void {
    let initFunc : Function = function(){
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
            $('figure.collapsible > .dpln-expand').each(function(){
                if($(self).next('.dpln-expand').is(this)){
                    return;
                }
                $(this).parent().find('> figcaption button i.material-icons').text('keyboard_arrow_down');
                $(this).remove();
            });

            let target = $(this).parent().find('> .dpln-expand');
            if(target.length > 0){
                target.remove();
            }
            else{
                $(this).parent().find('> ul').before($('<div />', {'class': 'dpln-expand'}));
            }

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

        initMenu();
    };

    $(initFunc);

    return;
}

function initMenu(): void {
    let page_id = $('body > .dpln-layout > main > article').data('page');
    let menulist = $('figure[data-page]');
    let target: JQuery = null;

    menulist.each(function(i, el){
        let data_page: string | Array<string> = $(el).data('page');

        if(typeof data_page == "string"){
            if(data_page == page_id){
                target = $(el);
            }
        }
        else{
            (<Array<string>>data_page).forEach(function(elem){
                if(elem == page_id){
                    target = $(el);
                }
            });
        }
    });

    if(target){
        let arrow = target.find('figcaption button i');
        arrow.text('keyboard_arrow_up');
    }

    let all_arrows = $('figcaption button');
    all_arrows.addClass('dpln-visible');
}

export function createScript(src: string, id?: string){
    // If a script tag with specified id already exists, stop execution
    if(id && document.getElementById(id)){
        return;
    }

    let body = document.body;
    let s = document.createElement('script');

    if(id){
        s.setAttribute('id', id);
    }
    s.setAttribute('src', src);
    body.appendChild(s);

    return s
}

const clipboardjsButtonClass = '.clipboard';
export function initClipboardJs(cb4text?: (elem: Element) => string){
    // Initialize clipboard.js
    let option: Clipboard.Options = {};
    if(cb4text){
        option.text = cb4text;
    }
    new Clipboard(clipboardjsButtonClass, option);

    // Initialize tooltip
    let buttons = $(clipboardjsButtonClass).find('i');
    buttons.on('mouseleave', function(e){
        $(e.target).parent().removeClass('tooltipped tooltipped-s');
        $(e.target).parent().removeAttr('aria-label');
    });

    buttons.on('mousedown', function(e){
        if(e.target != this) return;
        showTooltip($(e.target).parent(), 'Copied!');
    });
}

export function showTooltip(elem: JQuery, msg: string){
    elem.addClass('tooltipped tooltipped-s');
    elem.attr('aria-label', msg);
}
