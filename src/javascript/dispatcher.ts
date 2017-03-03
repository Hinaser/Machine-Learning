/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/clipboard/index.d.ts" />
import * as $ from 'jquery'
import {LearnTensorFlowPlayground} from './learntensorflowplayground';
import {initClipboardJs} from "./commonLib";

export default class Dispatcher {
    static initPageScript(): void {
        $(function(){
            let page = $('body > .dpln-layout > main > article').data('page');

            switch(page){
                case 'learntensorflowplayground':
                    new LearnTensorFlowPlayground();
                    break;
                case 'deeplearning-by-tensorflow':
                    initClipboardJs(function(trigger: Element){
                        console.log(trigger);
                        console.log($(trigger).prev('span').text());
                        return $(trigger).prev('span').text();
                    });
                    break;
            }
        });
    }
}