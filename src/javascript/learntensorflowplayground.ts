/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import * as $ from 'jquery'

export class LearnTensorFlowPlayground {
    constructor(){
        $(()=>{
            let backprop_img = $('#img-backprop');
            let regularization_img = $('#img-regularization');
            this.pin(backprop_img, 80, 40, 700);
            this.pin(regularization_img, 80, 40, 400);

            $('#tensorflowplayground-japanese').on('click', function(event: Event){
                event.preventDefault();
                event.stopPropagation();
                window.open('/raw/learntensorflowplayground/index.html', '_blank', 'toolbar=0,location=0,menubar=0');
            });
        });
    }

    pin(obj: JQuery, top: number, right: number, width: number){
        let pinned: boolean = false;

        console.log(1);

        obj.on('click', function(){
            if(!pinned){
                obj.css({
                    "display": "block",
                    "position": "fixed",
                    "top": top,
                    "right": right,
                    "width": width,
                    "border": "1px solid gray",
                    "z-index": "1000",
                    "padding": "0"
                });
            }
            else{
                obj.css({
                    "display": '',
                    "position": '',
                    "top": '',
                    "right": '',
                    "width": '',
                    "border": '',
                    "z-index": '',
                    "padding": "10px"
                });
            }

            pinned = !pinned;
        })
    }
}
