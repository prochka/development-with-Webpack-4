import 'bootstrap';
import "../sass/style.scss";
require.context("../images/", true, /\.(png|svg|jpg|gif)$/);
import $ from 'jquery';
import result from './custom.js'

result($);

