var Canvas = {
  clear: function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },

  drawPath: function(path) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // get bounding points
    var xValues = path.map(point => point.x);
    var yValues = path.map(point => point.y);
    var minX = xValues.reduce((best, current) => Math.min(best, current), xValues[0]);
    var maxX = xValues.reduce((best, current) => Math.max(best, current), xValues[0]);
    var minY = yValues.reduce((best, current) => Math.min(best, current), yValues[0]);
    var maxY = yValues.reduce((best, current) => Math.max(best, current), yValues[0]);

    // pick scaling factors (preserving aspect ratio)
    var scaleX = canvas.width / (maxX - minX);
    var scaleY = canvas.height / (maxY - minY);
    scaleY = Math.min(scaleY, scaleX);
    scaleX = Math.min(scaleY, scaleX);

    // now, rescale
    path = path.map(function(point) {
      return {
        x: (point.x - minX) * scaleX,
        y: (point.y - minY) * scaleY,
      };
    });

    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    for(var i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
  }
};
