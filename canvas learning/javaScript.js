(function global(input){
    

    
//
   window.onload = function(){
       begin();
   }

function begin(){
     var canvas = document.querySelector("canvas");
    var draw  = canvas.getContext("2d") ;
    
    draw.fillStyle = "black" ;
    draw.fillRect(0,0,canvas.width, canvas.height) ;
    
    
    draw.strokeStyle = "white";
    draw.fillStyle = "white";
    
    var c1 = new drawCircle(canvas.width/2 , canvas.height/2 , 50);
    var time = window.setInterval(function(){
        c1.animate() ;
        c1.draw();
    },1000/70);
    
    window.addEventListener("click" , handler , false )  ;
    
    function handler(event){
        console.log("mouse X: "+event.clientX);
        console.log("mouse Y: "+event.clientY);
        console.log("center X: " +c1.x);
        console.log("center y: "+c1.y);
        var xdif=Math.abs(c1.x - event.clientX) ;
        var xx = xdif * xdif ; 
        var ydif = Math.abs(c1.y -event.clientY) ;
        var yy =ydif  * ydif ; 
        if(Math.sqrt(xx+yy)<=c1.r ){
         c1.scale+=2;
            c1.r -=4 ;
            
        }else{
             draw.fillRect(event.clientX , event.clientY , 2 ,2 );
            window.clearInterval(time);
          
        }
        
    }
   
    
    
    function drawCircle(x,y,r) {
        
        this.x = x ;
        this.xAc=1 ;
        this.y = y ;
        this.yAc=1 ; 
        this.r = r ;
        this.scale = 1 ;
        
       this.draw = function(){
            
            draw.fillStyle = "black" ;
           draw.fillRect(0,0,canvas.width , canvas.height);
            draw.fillStyle = "white" ;
            draw.beginPath();
            draw.arc(this.x,this.y,this.r,0,2*Math.PI);
            draw.fill();
            draw.stroke();
            
        }
       
       this.animate = function(){
           
          if(this.xAc===1){
              if(this.x+this.r > canvas.width ){
                  this.x-=this.scale ; 
                  this.xAc = -1 ;
              }
              else{
                  this.x+=this.scale; 
              }
          }
           else{
              if(this.x-this.r < 0 ){
                  this.x+=this.scale ; 
                  this.xAc = 1 ;
              }
              else{
                  this.x-=this.scale; 
              }
          }
           
           if(this.yAc===1){
                 if(this.y+this.r > canvas.height ){
                  this.y-=this.scale ; 
                  this.yAc = -1 ;
              }
              else{
                  this.y+=this.scale; 
              }
           }else{
               
                if(this.y-this.r < 0 ){
                  this.y+=this.scale ; 
                  this.yAc = 1 ;
              }
              else{
                  this.y-=this.scale; 
              }
           }
          
           
           
       }
       }
    
    

    
   
    
    
    
    
    

    
    
      
    

        

   
   
    
   /* draw Line  
   
   ctx.moveTo(0,0);
   ctx.lineTo(200,100);
   ctx.stroke();
   
   */
    
    
    
    /* draw Circle 
    
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    
    */
    
    /* draw text 
    
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",10,50);
    */

}
 
}

)();