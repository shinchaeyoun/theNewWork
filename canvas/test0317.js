$(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    // dragObj 위치 설정
    var dragObj1 = {x: 100, y: 100};
    var dragObj2 = {x: 200, y: 100};
    var dragObj3 = {x: 300, y: 100};
    
    // dropObj 위치 설정
    var dropObj1 = {x: 100, y: 400};


    var dropObj2 = {x: 200, y: 400};
    var dropObj3 = {x: 300, y: 400};
    
    // dragObj 그리기
    ctx.beginPath();
    ctx.arc(dragObj1.x, dragObj1.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(dragObj2.x, dragObj2.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(dragObj3.x, dragObj3.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    // dropObj 그리기
    ctx.beginPath();
    ctx.arc(dropObj1.x, dropObj1.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(dropObj2.x, dropObj2.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(dropObj3.x, dropObj3.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    // 직선 그리기
    ctx.beginPath();
    ctx.moveTo(dragObj1.x, dragObj1.y);
    ctx.lineTo(dropObj1.x, dropObj1.y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(dragObj2.x, dragObj2.y);
    ctx.lineTo(dropObj2.x, dropObj2.y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(dragObj3.x, dragObj3.y);
    ctx.lineTo(dropObj3.x, dropObj3.y);
    ctx.stroke();
  });










  $(document).ready(function() {
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var startX, startY;
    var isDragging = false;
    
    $('#dragObj').on('mousedown', function(event) {
      startX = event.pageX - $(this).offset().left + $(this).outerWidth() / 2;
      startY = event.pageY - $(this).offset().top + $(this).outerHeight() / 2;
      isDragging = true;
    });
    
    $(document).on('mousemove', function(event) {
      if (isDragging) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(event.pageX - $('#canvas').offset().left + $('#dragObj').outerWidth() / 2, event.pageY - $('#canvas').offset().top + $('#dragObj').outerHeight() / 2);
        ctx.stroke();
        $('#dragObj').offset({ top: event.pageY - $('#canvas').offset().top, left: event.pageX - $('#canvas').offset().left });
      }
    });
    
    $(document).on('mouseup', function(event) {
      if (isDragging) {
        isDragging = false;
        var dropX = event.pageX - $('#canvas').offset().left + $('#dragObj').outerWidth() / 2;
        var dropY = event.pageY - $('#canvas').offset().top + $('#dragObj').outerHeight() / 2;
        if (dropX > $('#dropObj').offset().left && dropX < $('#dropObj').offset().left + $('#dropObj').outerWidth() &&
            dropY > $('#dropObj').offset().top && dropY < $('#dropObj').offset().top + $('#dropObj').outerHeight()) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo($('#dropObj').offset().left + $('#dropObj').outerWidth() / 2 - $('#canvas').offset().left, $('#dropObj').offset().top + $('#dropObj').outerHeight() / 2 - $('#canvas').offset().top);
          ctx.stroke();
          alert('Dropped!');
        }
        $('#dragObj').offset({ top: 100, left: 100 });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  });