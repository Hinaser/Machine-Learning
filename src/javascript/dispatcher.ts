import * as $ from 'jquery'
import {LearnTensorFlowPlayground} from './learntensorflowplayground';

export default class Dispatcher {
    static initPageScript(): void {
        $(function(){
            let page = $('body > .dpln-layout > main > article').data('page');

            switch(page){
                case 'learntensorflowplayground':
                    new LearnTensorFlowPlayground();
                    break;
            }
        });
    }
}