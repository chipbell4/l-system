var Turtle = {
  currentDirection: Math.PI / 4,
  currentPosition: { x: 0, y: 0 },

  positionStack: [],

  moves: {
    'L' : function() {
      Turtle.currentDirection -= Math.PI / 8;
    },
    'R' : function() {
      Turtle.currentDirection += Math.PI / 8;
    },
    'F' : function() {
      Turtle.currentPosition.x += 10 * Math.cos(Turtle.currentDirection);
      Turtle.currentPosition.y += 10 * Math.sin(Turtle.currentDirection);
    },
    '[' : function() {
      Turtle.positionStack.push(Turtle.currentPosition);
    },
    ']' : function() {
      var nextPosition = Turtle.positionStack.pop();
      if(nextPosition) {
        Turtle.currentPosition = nextPosition;
      }
    }
  },

  reset: function() {
    Turtle.currentPosition = { x: 0, y: 0 };
    Turtle.currentDirection = Math.PI / 4;
  },

  followProduction: function(production) {
    var positions = [];

    Turtle.reset();
    for(var i = 0; i < production.length; i++) {
      if(production[i] in Turtle.moves) {
        Turtle.moves[production[i]]();
      }

      positions.push({
        x: Turtle.currentPosition.x,
        y: Turtle.currentPosition.y,
      });
    }

    return positions;
  },
};
