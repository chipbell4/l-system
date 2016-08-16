UI = {
  addRule: function() {
    var template = document.querySelector('#rule-template > .rule').cloneNode(true);
    document.getElementById('rules').appendChild(template);
  },

  init: function() {
    document.getElementById('add-rule').addEventListener('click', UI.addRule.bind(UI));
  }
};
