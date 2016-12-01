console.log('Loaded!');

//Move the image
var img=document.getElementByid('madi');
marginleft=0;
function moveright(){
    marginleft+=10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
      img.style.marginLeft='100px';
    var interval =setinterval(moveright,100);
};