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
        let arrow = $('#' + page_id).find('figcaption button i');
        arrow.text('keyboard_arrow_up');
        let all_arrows = $('figcaption button');
        all_arrows.addClass('dpln-visible');
    }
}