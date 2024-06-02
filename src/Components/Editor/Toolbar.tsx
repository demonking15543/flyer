import React from 'react';

const CustomToolbar: React.FC = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="sans-serif" selected>Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select>
    <select className="ql-size">
      <option value="small"></option>
      <option value="large"></option>
      <option value="huge"></option>
      <option value="" selected>Normal</option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <select className="ql-color"></select>
    <select className="ql-background"></select>
    <button className="ql-script" value="sub"></button>
    <button className="ql-script" value="super"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-code-block"></button>
    <button className="ql-header" value="1"></button>
    <button className="ql-header" value="2"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <select className="ql-align"></select>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-clean"></button>
  </div>
);

export default CustomToolbar;
