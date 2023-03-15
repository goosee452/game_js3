function draw(canvasID, context, ...objects){
    const canvas = document.getElementById(canvasID);
    const contxt = canvas.getContext(context);
    

    for(let curr = 0; curr < objects.length; curr++){
        if(objects[curr]?.length > 1){
            for(let curr_el = 0; curr_el < objects[curr].length; curr_el ++){
                objects[curr][curr_el].sprite.onload = function(){contxt.drawImage(objects[curr][curr_el].sprite,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,objects[curr][curr_el].sprite.height,
                objects[curr][curr_el].sprite.width);}
            
                contxt.drawImage(objects[curr][curr_el].sprite,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,
                objects[curr][curr_el].sprite.height, objects[curr][curr_el].sprite.width)
            }
        }
        else{
            objects[curr].sprite.onload = function(){contxt.drawImage(objects[curr].sprite, objects[curr].location.x, objects[curr].location.y,
            objects[curr].sprite.height, objects[curr].sprite.width);}

            contxt.drawImage(objects[curr].sprite,
            objects[curr].location.x, objects[curr].location.y,
            objects[curr].sprite.height, objects[curr].sprite.width);
        }
    }
}