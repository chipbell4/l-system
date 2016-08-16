var Turtle = {
  currentDirection: Math.PI / 4,
  currentPosition: { x: 0, y: 0 },

  positionStack: [],
  directionStack: [],

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
      Turtle.directionStack.push(Turtle.currentDirection);
    },
    ']' : function() {
      var nextPosition = Turtle.positionStack.pop();
      var nextDirection = Turtle.directionStack.pop();
      if(nextPosition) {
        Turtle.currentPosition = nextPosition;
        Turtle.currentDirection = nextDirection;
      }
    }
  },

  reset: function() {
    Turtle.currentPosition = { x: 0, y: 0 };
    Turtle.currentDirection = Math.PI / 4;
    Turtle.positionStack = [];
    Turtle.directionStack = [];
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
