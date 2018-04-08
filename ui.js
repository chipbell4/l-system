UI = {
  $: function(selector) {
    return document.querySelector(selector);
  },

  addRule: function() {
    var template = UI.$('#rule-template > .rule').cloneNode(true);
    UI.$('#rules').appendChild(template);
    template.querySelector('.remove-rule').addEventListener('click', UI.removeRule.bind(UI));
    return template;
  },

  removeRule: function(evt) {
    evt.target.parentElement.remove();
  },

  clearRules: function() {
    UI.$('#rules').innerHTML = '';
  },

  writeRule: function(node, value, replacement) {
    node.querySelector('.start').value = value;
    node.querySelector('.end').value = replacement;
  },

  loadConfig: function(config) {
    ['iterations', 'angle', 'angle-chaos', 'distance-chaos'].forEach(function(field) {
      UI.$('#' + field).value = config[field];
    });

    UI.clearRules();
    config.rules.forEach(function(rule) {
      var node = UI.addRule();
      UI.writeRule(node, rule.value, rule.replacement);
    });
  },

  redraw: function() {
    var ruleset = LSystem.parseFromDom();

    // update the turtle with parameters
    Turtle.ANGLE = Number(UI.$('#angle').value);
    Turtle.ANGLE_CHAOS = Number(UI.$('#angle-chaos').value);
    Turtle.DISTANCE_CHAOS = Number(UI.$('#distance-chaos').value);

    var iterations = Number(UI.$('#iterations').value);
    var production = UI.$('#axiom').value;
    for(var i = 0; i < iterations && production.length < 100000; i++) {
      production = LSystem.stepSystem(production, ruleset);
    }

    UI.$('#current-production').value = production.substr(0, 100000);

    Canvas.clear();

    var paths = Turtle.followProduction(production);
    paths = Canvas.normalize(paths);
    paths.forEach(function(path) {
      Canvas.drawPath(path);
    });
  },

  init: function() {
    UI.$('#add-rule').addEventListener('click', UI.addRule.bind(UI));
    UI.$('#redraw').addEventListener('click', UI.redraw.bind(UI));
    UI.$('#presets').addEventListener('change', function(evt) {
      UI.loadConfig(Examples[this.value]);
    });
  }
};
