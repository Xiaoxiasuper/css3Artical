window.onload=function(){
    var paraNum=500;
    
    var hello=document.getElementsByClassName("hello")[0];
    MyinnerHTML='<div class="canves1"><div class="chunk1"></div><div class="chunk"></div><div class="chunk1"></div><div class="chunk"></div><div class="chunk"></div><div class="chunk"></div><div class="chunk1"></div><div class="chunk"></div><div class="chunk1"></div></div>';

    for(var i=0;i<paraNum;i++){
        MyinnerHTML+=MyinnerHTML
    }
    var canves=document.getElementsByClassName("canves1");
    var cols=0;
    var row=0;
    for (var i = 0; i < canves.length; i++) {
        var myTop=-10*cols;
        var myLeft=10*row;
        canves[i].style.top = myTop+'px';
        canves[i].style.left = myLeft+'px';
        if((i+1)%20==0){
            row +=1;
            cols=0;
        }else{
            cols+=1;
        }
        
    }
    var canves2=document.getElementsByClassName("canves2");
    var cols2=0;
    var row2=5;
    for (var i = 0; i < canves.length; i++) {
        var myTop=-10*cols2;
        var myLeft=10*row2;
        canves2[i].style.top = myTop+'px';
        canves2[i].style.left = myLeft+'px';
        if((i+1)%20==0){
            row2 +=1;
            cols2=0;
        }else{
            cols2+=1;
        }
        
    }
   
}
