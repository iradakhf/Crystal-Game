const randomImgValue = function(){
   return Math.floor(Math.random()*8)
    
}
const randomCompValue = function(){
   return Math.floor(Math.random()*90)
}
 let yourscore = 0;
 let compNumber = randomCompValue();
 let win = 0;
 let loss = 0;
for (const key of document.querySelectorAll("img")) {
    key.dataset.value = randomImgValue();
    console.log(key.dataset.value)
}
$("#target").html(compNumber);

$("img").on("click", function(){
    if(compNumber>yourscore){
        yourscore+= parseInt(this.dataset.value);
        $("#yourscore").html(yourscore);

    }
   else if(compNumber==yourscore){
      win+=1;
      $("#win").html(win);
      yourscore=0;
      $("#yourscore").html(yourscore);
      compNumber = randomCompValue()
      $("#target").html(compNumber);
   }
   else{
    loss+=1;
    $("#loss").html(loss);
      yourscore=0;
      $("#yourscore").html(yourscore);
      compNumber = randomCompValue()
      $("#target").html(compNumber);

   }
})
