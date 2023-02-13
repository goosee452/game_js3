import { Entity, mod } from "./entity.js";
import { Wall } from "./wall.js";
import { CircleHitbox } from "./circleHitbox.js";
import { RectHitbox } from "./rectHitbox.js";
import { Point } from "./point.js";

class CHECKER{
    static checkCollision(round_hitbox, rect_hitbox){

         if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         //---------------------------------------
         else if(round_hitbox.base.x <= rect_hitbox.base.x + width && round_hitbox.base.x >= rect_hitbox.base.x){
            if(round_hitbox.base.y + radius >= rect_hitbox.base.y && round_hitbox.base.y - radius <= rect_hitbox.base.y + height){
                return true;
            }
         }
         else if(round_hitbox.base.y <= rect_hitbox.base.y + height && round_hitbox.base.y >= rect_hitbox.base.y){
            if(round_hitbox.base.x + radius >= rect_hitbox.base.x && round_hitbox.base.x - radius <= rect_hitbox.base.x + width){
                return true;
            }
         }

         return false;
    }
}

export {CHECKER};