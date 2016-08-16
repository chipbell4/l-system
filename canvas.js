var Canvas = {
  clear: function() {
    var svg = document.getElementById('canvas');
    while(svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  },

  drawPath: function(path) {
    var svg = document.querySelector('svg');

    // get bounding points
    var xValues = path.map(point => point.x);
    var yValues = path.map(point => point.y);
    var minX = xValues.reduce((best, current) => Math.min(best, current), xValues[0]);
    var maxX = xValues.reduce((best, current) => Math.max(best, current), xValues[0]);
    var minY = yValues.reduce((best, current) => Math.min(best, current), yValues[0]);
    var maxY = yValues.reduce((best, current) => Math.max(best, current), yValues[0]);

    // pick scaling factors (preserving aspect ratio)
    var scaleX = 100 / (maxX - minX);
    var scaleY = 100 / (maxY - minY);
    scaleY = Math.min(scaleY, scaleX);
    scaleX = Math.min(scaleY, scaleX);

    // now, rescale
    path = path.map(function(point) {
      return {
        x: (point.x - minX) * scaleX,
        y: (point.y - minY) * scaleY,
      };
    });

    // create the polyline class
    var polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute('stroke', 'black');
    polyline.setAttribute('fill', 'none');
    var pointString = path.reduce((last, point) => last + ' ' + point.x + ',' + point.y, '', '');
    polyline.setAttribute('points', pointString);
    svg.appendChild(polyline);
  }
};
