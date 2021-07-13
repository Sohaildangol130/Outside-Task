//importing css styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/global.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
window.gsap = gsap;

//importing jquery
import $ from 'jquery';
window.$ = $;

//importing js partials
require ('./load_template');
require('./sections/global');

gsap.registerPlugin(ScrollTrigger);