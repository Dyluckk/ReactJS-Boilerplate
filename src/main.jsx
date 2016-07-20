var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/List.jsx');
//grab the dom, and put "List" in the id ingredients
ReactDom.render(<List />, document.getElementById('ingredients'));