import * as $ from 'jquery'
import {LearnTensorFlowPlayground} from './learntensorflowplayground';

export default class Dispatcher {
    static initPageScript(): void {
        $(function(){
            let page = $('body > .dpln-layout > main > article').data('page');
            Dispatcher.initMenu(page);

            switch(page){
                case 'page-learntensorflowplayground':
                    new LearnTensorFlowPlayground();
                    break;
            }
        });
    }

    static initMenu(page_id: string): void {
        let menu = $('#' + page_id);
        menu.addClass('dpln-expand');
        menu.find('figcaption button i').text('keyboard_arrow_up');
    }
}