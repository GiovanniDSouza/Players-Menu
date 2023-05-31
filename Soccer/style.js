var areas =document.querySelectorAll('.area');


var dragStart = function(e){
    
};
var dragEnd = function(e){
    for(var area of areas){
        if((e.clientX > area.getBoundingClientRect().x &&
        e.clientX < area.getBoundingClientRect().x +area.clientWidth) && 
          (e.clientY > area.getBoundingClientRect().y &&
          e.clientY < area.getBoundingClientRect().y +area.clientHeight)){
            
            if(area.childElementCount == 0){
                area.appendChild(document.getElementById(e.target.id));
            }

        }
    }
}
document.addEventListener("dragstart", dragStart);
document.addEventListener("dragend", dragEnd);