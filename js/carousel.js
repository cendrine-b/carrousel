// JQUERY LOADED
if (typeof jQuery == 'undefined') {
    console.log('jQuery hasn\'t loaded');
} else {
    console.log('jQuery has loaded');
}

// IMAGE LOADED
$('img').on('load', function() {
    console.log('image load successful');
});

// CAROUSEL
$(document).ready(function() {

    var $carousel = $('#carousel'),
        $img = $('#carousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);

    // $img.css('display', 'none');
    // $currentImg.css('display', 'block');

    $carousel.append('<div class="controls"> <span id="prev"><</span> <span id="next">></span> </div>');

    // NEXT BUTTON
    $('#next').click(function() {
        i++;
        if (i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        } else {
            i = indexImg;
        }
    });

    // PREV BUTTON
    $('#prev').click(function() {
        i--;
        if (i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        } else {
            i = 0;
        }
    });

    function slideImg() {
        setTimeout(function() {
            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            slideImg();

        }, 3000);
    }

    slideImg();

});
