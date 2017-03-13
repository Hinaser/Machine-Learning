/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import * as $ from 'jquery';
(<any>window).$  = $; // For debug purpose, expose jquery object to global window

import Dispatcher from './dispatcher';
import {initSidebar, createScript} from './commonLib';

function main(): any {
    // Initialize sidebar
    initSidebar();

    // Dispatch page script
    Dispatcher.initPageScript();
}

$(main);
