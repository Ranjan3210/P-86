var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.URL("birthday.Image.jpg",function (Img) {
        block_img_object = Img;

        block_img_object.width = scaleToWidth(700);
        block_img_object.height  = scaleToHeight(510);
        block_img_object = set({
            top:0,
            top:0
        });
        canvas.add(block_img_object);
    });
	
    }

function playSound(){
	x.play();
}
