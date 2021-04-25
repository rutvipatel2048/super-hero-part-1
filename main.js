var camvas = new fabric.Canvas('mycanvas');

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(player_img) {
    player_object= player_img;
   player_object.scaleToWidth(150);
   player_object.scaleToHeight(140);

   player_object.set({
    top: player_y,
    left: player_x
   });
   canvas.add(player_object)
    });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(block_img) {
    block_object= block_img;
   block_object.scaleToWidth(block_image_width);
   block_object.scaleToHeight(block_image_height);

   block_object.set({
    top: player_y,
    left: player_x
   });
   canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;

    if(e.shiftKey == true && keyPressed == '80') // increase size
    {
       block_image_height = block_image_height + 10;
       block_image_width = block_image_width + 10;
    }

    if(e.shiftKey == true && keyPressed == '77') // decrease size
    {
       block_image_height = block_image_height - 10;
       block_image_width = block_image_width - 10;
    }
}