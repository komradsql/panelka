var imgHead = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg'
], i=1;
function csaHead(){

if(i > (imgHead.length-1)){
    $('.csa-head').animate({'opacity':'0'},600,function(){
        i=1;
        $('.csa-head').css({'background':'url('+imgHead[0]+')'});
    });
    $('.csa-head').animate({'opacity':'1'},600);
} else {
    $('.csa-head').animate({'opacity':'0'},600,function(){
        $('.csa-head').css({'background':'url('+imgHead[i]+')'});
        i++;
    });
    $('.csa-head').animate({'opacity':'1'},600);
}

}
var intervalCsaHead = setInterval(csaHead,4000);
