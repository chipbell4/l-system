var Canvas = {
  drawPath: function(path) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.moveTo(path[0].x + centerX, path[0].y + centerY);
    for(var i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x + centerX, path[i].y + centerY);
    }
    ctx.stroke();
  }
};
