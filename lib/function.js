/**
 * Contains methods for this project
 *
 * @author Thong Dao (Stephen Dao)
 */


/**
 * Read image from local.
 * @param {input} uri for chosen image.
 */

function readImage(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.rect').remove();
                $('.chosen')
                    .css('display', "block");
                $('#detect-btn')
                    .css('display', "block");
                $('.chosen')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
 }
 
 /**
 * detect faces function
 */
 function detectFaces() {
    var img = document.getElementById('chosen');
    var tracker = new tracking.ObjectTracker('face');
      tracking.track(img, tracker);
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          plot(rect.x, rect.y, rect.width, rect.height);
        });
    });
    
 }
 
 /**
 * plot rectanges for detected faces
 * @param {x} x-coordinate.
 * @param {y} y-coordinate.
 * @param {w} width of rectangle.
 * @param {h} height of rectangle.
 */
 function plot(x,y,w,h) {
     var img = document.getElementById('chosen');
     var rect = document.createElement('div');
     rect.classList.add('rect');
     document.getElementById('photo').appendChild(rect);
     rect.style.width = w + 'px';
     rect.style.height = h + 'px';
     rect.style.left = (img.offsetLeft + x) + 'px';
     rect.style.top = (img.offsetTop + y) + 'px';
}
