/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import * as $ from 'jquery'

const separator_class_name = '.prob-separator';
const separator_data_attr_name = 'data-separator';

class Separator {
  label: string;
  px: number;
  separator: JQuery;
  prevProb: JQuery;
  nextProb: JQuery;
  entropyVal: JQuery;
  dragging: boolean;
  PrevNextOriginalMergedWidth: number;
  probbarWholeWidth: number;
  connector: Connector;

  constructor(_label: string, _connector: Connector){
    if(document.readyState == 'loading')
      throw new Error('Separator constructor is called before document is loaded.');

    let self = this;
    this.connector = _connector;
    this.label = _label;
    this.separator = $(separator_class_name + '[' + separator_data_attr_name + '=' + this.label + ']');
    this.prevProb = this.separator.prev();
    this.nextProb = this.separator.next();
    this.entropyVal = this.separator.parent().find('.entropy-val span');
    this.dragging = false;
    this.px = null;
    this.probbarWholeWidth = this.separator.parent().width() - this.separator.outerWidth()*4;

    // Initialize probability value labels
    this.prevProb.find('.prob-val span').text((this.prevProb.width() / this.probbarWholeWidth).toFixed(3));
    this.nextProb.find('.prob-val span').text((this.nextProb.width() / this.probbarWholeWidth).toFixed(3));

    this.separator.on('mousedown', function(e: JQueryMouseEventObject){
      self.dragging = true;
      self.px = e.pageX;
      self.PrevNextOriginalMergedWidth = self.prevProb.width() + self.nextProb.width();
    });

    $(document).on('mouseup', function(e: JQueryMouseEventObject){
      self.dragging = false;
      self.px = null;
    });

    $(document).on('mousemove', function(e: JQueryMouseEventObject){
      if(!self.dragging) return;

      self.px = e.pageX;

      let prevTargetWidth = e.pageX - self.getOriginX();
      let nextTargetWidth = self.PrevNextOriginalMergedWidth - prevTargetWidth;

      if(prevTargetWidth <= 0) return;
      if(nextTargetWidth <= 0) return;


      self.prevProb.width(prevTargetWidth);
      self.nextProb.width(nextTargetWidth);

      self.prevProb.find('.prob-val span').text((prevTargetWidth / self.probbarWholeWidth).toFixed(3));
      self.nextProb.find('.prob-val span').text((nextTargetWidth / self.probbarWholeWidth).toFixed(3));

      let entropy = self.getEntropy();
      self.entropyVal.text(entropy.toFixed(3));

      self.connector.reposition();
    });
  }

  getOriginX(): number {
    let base_probbox = $(separator_class_name + '[' + separator_data_attr_name + '=' + this.label + ']').prev();
    return base_probbox.offset().left;
  }

  getEntropy(): number {
    let self = this;
    let entropy = 0;

    self.separator.parent().find('.each-prob').each(function(i, el){
      let prob = $(el).width() / self.probbarWholeWidth;
      entropy += prob * Math.log(prob)
    });

    entropy = -1 * entropy;
    return entropy;
  }
}

class Connector {
  label: string;
  connector: JQuery;
  endpoint1: JQuery;
  endpoint2: JQuery;

  constructor(_label: string){
    this.label = _label;
    this.connector = $('svg.line-between-entropy line[data-link="' + this.label + '"]');

    let id_endpoint1 = this.label.split('_')[0];
    let id_endpoint2 = this.label.split('_')[1];
    this.endpoint1 = $('.prob-separator[data-separator="' + id_endpoint1 + '"]');
    this.endpoint2 = $('.prob-separator[data-separator="' + id_endpoint2 + '"]');

    this.connector
      .attr('x1', this.endpoint1.position().left + 2)
      .attr('y1', this.endpoint1.position().top)
      .attr('x2', this.endpoint2.position().left + 2)
      .attr('y2', this.endpoint2.position().top + this.endpoint1.height());
  }

  reposition(){
    //console.log(this.endpoint1.position().left + ":" + this.endpoint2.position().left);

    this.connector
      .attr('x1', this.endpoint1.position().left + 2)
      //.attr('y1', this.endpoint1.position().top + this.endpoint1.height())
      .attr('x2', this.endpoint2.position().left + 2)
      //.attr('y2', this.endpoint2.position().top);
      ;
  }
}

export class Test {
  constructor() {
    $(() => {
      let connector = [
        new Connector('p1-p2_q1-q2'),
        new Connector('p2-p3_q2-q3'),
        new Connector('p3-p4_q3-q4'),
        new Connector('p4-p5_q4-q5')
      ];

      let separators_for_P = [
        new Separator('p1-p2', connector[0]),
        new Separator('p2-p3', connector[1]),
        new Separator('p3-p4', connector[2]),
        new Separator('p4-p5', connector[3])
      ];
      let separators_for_Q = [
        new Separator('q1-q2', connector[0]),
        new Separator('q2-q3', connector[1]),
        new Separator('q3-q4', connector[2]),
        new Separator('q4-q5', connector[3])
      ];
    });
  }
}

function testMain(){
  (<any>window).$ = $;
  (<any>window).jQuery = $;
  new Test();
}

$(testMain);