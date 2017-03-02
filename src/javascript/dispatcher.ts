import * as $ from 'jquery'
import {LearnTensorFlowPlayground} from './learntensorflowplayground';

export default class Dispatcher {
    static initPageScript(): void {
        $(function(){
            let page = $('body > .dpln-layout > main > article').data('page');
            Dispatcher.initMenu(page);

            switch(page){
                case 'learntensorflowplayground':
                    new LearnTensorFlowPlayground();
                    break;
            }
        });
    }

    static initMenu(page_id: string): void {
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
}