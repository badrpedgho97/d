function onScrolledTo(el, callback) {
    function normOffset() {
      var eR = el.getBoundingClientRect();
      return 1.0 - eR.bottom / (window.innerHeight + el.offsetHeight);
    }
    function taskUpdate() {
      if (normOffset() > 0) {
        window.removeEventListener('resize', onUpdate);
        window.removeEventListener('scroll', onUpdate);
        callback();
      }
    }
    function onUpdate(event) {
      taskUpdate();
    }
    window.addEventListener('resize', onUpdate);
    window.addEventListener('scroll', onUpdate);
    taskUpdate();
  
  }


onScrolledTo(document.getElementById('stat'), function() {
    
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });
        
  });
