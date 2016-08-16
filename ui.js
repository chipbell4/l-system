UI = {
  addRule: function() {
    var template = document.querySelector('#rule-template > .rule').cloneNode(true);
    document.getElementById('rules').appendChild(template);
    template.querySelector('.remove-rule').addEventListener('click', UI.removeRule.bind(UI));
  },

  removeRule: function(evt) {
    evt.target.parentElement.remove();
  },

  init: function() {
    document.getElementById('add-rule').addEventListener('click', UI.addRule.bind(UI));
  }
};
