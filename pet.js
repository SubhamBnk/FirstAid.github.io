var image_before = "1_before.jpg";
var image_after = "1_after.jpg";
var pet_id = 1;

function changeImage()
{
        var img = document.getElementById("image");
        img.src=image_after;
        return false;
}

function resetImage()
{
        var img = document.getElementById("image");
        img.src=image_before;
        return false;
}

function NextPet()
{
        if (pet_id < 6)
            pet_id = pet_id + 1;
         else
            pet_id = 1;
        image_before = pet_id + "_before.jpg";
        image_after = pet_id + "_after.jpg";
        resetImage();
}

function complete()
{
    var  text_entry = document.getElementById("Entry");
    text_entry.value = " ";
    $("#Entry").fadeIn();
}

function Erase()
{
    var  text_entry = document.getElementById("Entry");
    $("#Entry").fadeOut(2000, complete);
}