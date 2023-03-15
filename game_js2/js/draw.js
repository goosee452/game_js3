function draw(canvasID, context, ...objects){
    const canvas = document.getElementById(canvasID);
    const contxt = canvas.getContext(context);

    for(let curr = 0; curr < objects.length; curr++){
        if(objects[curr]?.length > 1){
            for(let curr_el = 0; curr_el < objects[curr].length; curr_el ++){
                objects[curr][curr_el].animations.sprite.onload = function(){contxt.drawImage(objects[curr][curr_el].animations.sprite,
                objects[curr][curr_el].animations.curr_sx, objects[curr][curr_el].animations.curr_sy,
                objects[curr][curr_el].animations.sWidth, objects[curr][curr_el].animations.sHeight,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,objects[curr][curr_el].animations.sprite.height,
                objects[curr][curr_el].animations.sprite.width);}
            
                contxt.drawImage(objects[curr][curr_el].animations.sprite,
                objects[curr][curr_el].animations.curr_sx, objects[curr][curr_el].animations.curr_sy,
                objects[curr][curr_el].animations.sWidth, objects[curr][curr_el].animations.sHeight,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,objects[curr][curr_el].animations.sprite.height,
                objects[curr][curr_el].animations.sprite.width);
            }
        }
        else{
            objects[curr].animations.sprite.onload = function(){contxt.drawImage(objects[curr].animations.sprite,
            objects[curr].animations.curr_sx, objects[curr].animations.curr_sy,
            objects[curr].animations.sWidth, objects[curr].animations.sHeight,
            objects[curr].location.x, objects[curr].location.y,objects[curr].animations.sprite.height,
            objects[curr].animations.sprite.width);}

            contxt.drawImage(objects[curr].animations.sprite,
            objects[curr].animations.curr_sx, objects[curr].animations.curr_sy,
            objects[curr].animations.sWidth, objects[curr].animations.sHeight,
            objects[curr].location.x, objects[curr].location.y,objects[curr].animations.sprite.height,
            objects[curr].animations.sprite.width);
        }
    }
}