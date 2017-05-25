/**
 * Created by curses on 26.05.2017.
 */
$(document).ready(function(){
    $('ul.akkordeon li.active div').slideDown(0);
    $('ul.akkordeon li > p').click(
        function () {
            if(!$(this).parent().hasClass('active')){
                $('ul.akkordeon li.active div').slideUp(200);
                $('ul.akkordeon li').removeClass('active');

                $(this).parent().addClass('active');
                $(this).next('div').slideDown(200);
            }else{
                $(this).parent().removeClass('active');
                $(this).next('div').slideUp();
            }
        }
    )
})    