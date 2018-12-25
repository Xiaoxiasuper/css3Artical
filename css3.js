window.onload=function(){
    var paraNum=1200;
    
    var canves1 = $(".hello").find(".canves1");
    for (var int = 0; int < paraNum; int++) {
        canves1.clone().prependTo($(".hello"));
    }
    var canves2 = $(".change").find(".canves2");
    for (var int = 0; int <= paraNum; int++) {
        canves2.clone().prependTo($(".change"));
    }

    var canves=document.getElementsByClassName("canves1");
    var cols=0;
    var row=0;
    for (var k = 0; k < paraNum; k++) {
        var myTop=-10*cols;
        var myLeft=10*row;
        canves[k].style.top = myTop+'px';
        canves[k].style.left = myLeft+'px';
        if((k+1)%40==0){
            row +=1;
            cols=0;
        }else{
            cols+=1;
        }
        
    }
    var canves2=document.getElementsByClassName("canves2");
    var cols2=0;
    var row2=5;
    for (var k = 0; k < paraNum+3; k++) {
        var myTop=-10*cols2;
        var myLeft=10*row2;
        canves2[k].style.top = myTop+'px';
        canves2[k].style.left = myLeft+'px';
        if((k+1)%40==0){
            row2 +=1;
            cols2=0;
        }else{
            cols2+=1;
        }
        
    }
   
}
