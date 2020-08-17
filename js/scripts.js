$('.grid').masonry({
    itemSelector: '.grid.Item',
    columnWidth: '.gridSizer',
    percentPosition: true,
    gutter: 0,
    stagger: 30
    // transitionDuraction: '.5s'
});

$('.button8').click(function(){
    $('.gridItem').hide();
    $('.forest').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button7').click(function(){
    $('.gridItem').hide();
    $('.architecture').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button6').click(function(){
    $('.gridItem').hide();
    $('.macro').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button5').click(function(){
    $('.gridItem').hide();
    $('.landscape').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button4').click(function(){
    $('.gridItem').hide();
    $('.nature').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button2').click(function(){
    $('.gridItem').hide();
    $('.bird').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button1').click(function(){
    $('.gridItem').show();
    $('.filter').removeClass('filtered')
});

    