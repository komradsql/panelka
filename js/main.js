var imgHead = [
    './images/1.jpg',
    './images/10.jpg',
    './images/15.jpg',
    './images/11.jpg',
    './images/14.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/2.jpg',
    './images/4.jpg',
    './images/12.jpg',
    './images/13.jpg',
    './images/5.jpg',
    './images/2.jpg'
], i=1;
function csaHead(){

if(i > (imgHead.length-1)){
    $('.csa-head').animate({'opacity':'0'},700,function(){
        i=1;
        $('.csa-head')
        .css({'background':'url('+imgHead[0]+')'})
        .css({'background-repeat':'no-repeat'})
        .css({'background-size':'cover'})
        .css({'width':'100%'})
        .css({'height':'100%'});
    });
    $('.csa-head').animate({'opacity':'1'},700);
} else {
    $('.csa-head').animate({'opacity':'0'},700,function(){
        $('.csa-head')
        .css({'background':'url('+imgHead[i]+')'})
        .css({'background-repeat':'no-repeat'})
        .css({'background-size':'cover'})
        .css({'width':'100%'})
        .css({'height':'100%'})
        ;
        i++;
    });
    $('.csa-head').animate({'opacity':'1'},700);
}

}
var intervalCsaHead = setInterval(csaHead,4500);
