Here is the JavaScript code using jQuery to create 3 drag points and 3 drop points that can draw lines on a canvas:

```javascript
$(document).ready(function() {
  // Define the canvas
  var canvas = $(\"#myCanvas")[0];
  var ctx = canvas.getContext("2d");
  var rect = canvas.getBoundingClientRect();
  var offsetX = rect.left;
  var offsetY = rect.top;

  // Define the positions of the drag points
  var drag1 = {x: 50, y: 50};
  var drag2 = {x: 150, y: 100};
  var drag3 = {x: 100, y: 150};
  var dragPoints = [drag1, drag2, drag3];

  // Define the positions of the drop points
  var drop1 = {x: 250, y: 50};
  var drop2 = {x: 350, y: 100};
  var drop3 = {x: 300, y: 150};
  var dropPoints = [drop1, drop2, drop3];

  // Draw the drag points
  for (var i = 0; i < dragPoints.length; i++) {
    drawDragPoint(dragPoints[i]);
  }

  // Draw the drop points
  for (var i = 0; i < dropPoints.length; i++) {
    drawDropPoint(dropPoints[i]);
  }

  // Bind the drag events to the drag points
  $(".drag").each(function(index) {
    $(this).draggable({
      containment: "parent",
      drag: function() {
        drawLine(dragPoints[index], {x: $(this).position().left, y: $(this).position().top + 15});
      },
      stop: function() {
        var pos = {x: $(this).position().left, y: $(this).position().top + 15};
        drawLine(dragPoints[index], findClosestDropPoint(pos));
      }
    });
  });

  // Helper function to draw a drag point
  function drawDragPoint(pos) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5, 0, 2*Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    $(\"<div class='drag'></div>").appendTo("#myCanvasContainer")
      .css({position: "absolute", left: pos.x - 5, top: pos.y - 5, width: 10, height: 10, backgroundColor: "blue", borderRadius: "50%"});
  }

  // Helper function to draw a drop point
  function drawDropPoint(pos) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  // Helper function to draw a line between two points
  function drawLine(start, end) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < dragPoints.length; i++) {
      drawDragPoint(dragPoints[i]);
    }
    for (var i = 0; i < dropPoints.length; i++) {
      drawDropPoint(dropPoints[i]);
    }
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = "black\";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }

  // Helper function to find the closest drop point to a given position
  function findClosestDropPoint(pos) {
    var minDist = Number.MAX_VALUE;
    var closestPoint = null;
    for (var i = 0; i < dropPoints.length; i++) {
      var dist = getDistance(pos, dropPoints[i]);
      if (dist < minDist) {
        minDist = dist;
        closestPoint = dropPoints[i];
      }
    }
    return closestPoint;
  }

  // Helper function to calculate the distance between two points
  function getDistance(pos1, pos2) {
    var dx = pos1.x - pos2.x;
    var dy = pos1.y - pos2.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
});
```

Note: This code assumes that you have a canvas element with the ID "myCanvas" and a container element with the ID "myCanvasContainer" on your HTML page. Also, make sure to include the jQuery library before this code.