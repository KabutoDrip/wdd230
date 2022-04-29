

if ( $(window).width() > 1023) {
  function changeGridTemplateColumns(pattern) {
    TweenMax.to(".container",
      1, {
        gridTemplateColumns: pattern
      }
    );
  }
  
  
  
  $(document).ready(
    function() {
    
  
      $(".el-a,.el-d").mouseenter(
        function() {
          changeGridTemplateColumns("2fr 1fr 1fr");
        }
      );
  
      $(".el-b,.el-e").mouseenter(
        function() {
          changeGridTemplateColumns("1fr 2fr 1fr");
        }
      );
  
      $(".el-c,.el-f").mouseenter(
        function() {
          changeGridTemplateColumns("1fr 1fr 2fr");
        }
      );
  
      $(".container").mouseleave(
        function() {
          changeGridTemplateColumns("1fr 1fr 1fr");
        }
      );
    }
  );
  }
  else {
  }
 