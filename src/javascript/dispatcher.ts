/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/clipboard/index.d.ts" />
import * as $ from 'jquery'
import {LearnTensorFlowPlayground} from './learntensorflowplayground';
import {MathForML} from './mathForML';
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
                        return $(trigger).prev('span').text();
                    });
                    break;
                case 'math-for-ml':
                    new MathForML();
                    break;
            }
        });
    }
}