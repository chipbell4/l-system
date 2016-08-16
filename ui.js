UI = {
  addRule: function() {
    var template = document.querySelector('#rule-template > .rule').cloneNode(true);
    document.getElementById('rules').appendChild(template);
    template.querySelector('.remove-rule').addEventListener('click', UI.removeRule.bind(UI));
  },

  removeRule: function(evt) {
    evt.target.parentElement.remove();
  },

  redraw: function() {
    var ruleset = LSystem.parseFromDom();

    // update the turtle with parameters
    Turtle.ANGLE = Number(document.getElementById('angle').value);
    Turtle.ANGLE_CHAOS = Number(document.getElementById('angle-chaos').value);
    Turtle.DISTANCE_CHAOS = Number(document.getElementById('distance-chaos').value);

    var iterations = Number(document.getElementById('iterations').value);
    var production = document.getElementById('axiom').value;
    for(var i = 0; i < iterations; i++) {
      production = LSystem.stepSystem(production, ruleset);
    }

    var paths = Turtle.followProduction(production);
    paths.forEach(function(path) {
      Canvas.drawPath(path);
    });
  },

  init: function() {
    document.getElementById('add-rule').addEventListener('click', UI.addRule.bind(UI));
    document.getElementById('redraw').addEventListener('click', UI.redraw.bind(UI));
  }
};
