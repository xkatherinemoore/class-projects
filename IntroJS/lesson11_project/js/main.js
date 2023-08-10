/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/07/2023
*/



$(document).ready(function () {
    $('#slideshow>div:gt(0)').hide()

    
    
    setInterval(() => {
        $('#slideshow div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
    }, 3000);
});