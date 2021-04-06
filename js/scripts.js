$('.grid').masonry({
    itemSelector: '.grid.Item',
    columnWidth: '.gridSizer',
    percentPosition: true,
    gutter: 0,
    stagger: 30
    // transitionDuraction: '.5s'
});

$(document).ready(function(){
    $('.gridItem').hide();
    $('.bird').show();
    $('.filter').removeClass('filtered')
    $('.button1').addClass('filtered')
});
$('.button1').click(function(){
    $('.gridItem').hide();
    $('.bird').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button2').click(function(){
    $('.gridItem').hide();
    $('.nature').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button4').click(function(){
    $('.gridItem').hide();
    $('.conceptual').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button5').click(function(){
    $('.gridItem').hide();
    $('.architecture').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button6').click(function(){
    $('.gridItem').hide();
    $('.gridItem').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});




// if ($rndmFilter == selected){
//     $selected[content].append ($rndmFilter[value])
// }
mediaQuery = window.matchMedia("(max-width: 950px)");




    if (mediaQuery['matches'] == true) {
        $(function(){
            $('.menu').hide();
            $('.mobileMenu').show();
            $('.filter').hide();
            $('.selected').show();
       });
        $('.selected').append('&#9776; ' + 'Birds')
        $(function(){
            $('.selected').click(function(){
                $('.filter').show();
                $('.selected').hide();
            });
            $('.button1').click(function(){
                $('.selected').empty();
                $('.selected').prepend('&#9776; ' + 'Birds')
                $('.filter').hide();
                $('.selected').show();
            });
            
            $('.button2').click(function(){
                $('.selected').empty();
                $('.selected').prepend('&#9776; ' + 'Nature')
                $('.filter').hide();
                $('.selected').show();
            });
            $('.button4').click(function(){
                $('.selected').empty();
                $('.selected').prepend('&#9776; ' + 'Conceptual')
                $('.filter').hide();
                $('.selected').show();
            });
            
            $('.button5').click(function(){
                $('.selected').empty();
                $('.selected').prepend('&#9776; ' + 'Architecture')
                $('.filter').hide();
                $('.selected').show();
            });
            $('.button6').click(function(){
                $('.selected').empty();
                $('.selected').prepend('&#9776; ' + 'All')
                $('.filter').hide();
                $('.selected').show();
            });
        });
    };
