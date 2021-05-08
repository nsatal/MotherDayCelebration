
function show(){
    var x = document.getElementById("Poem");
    console.log(x);
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}


var album=["WhatsApp Image 2021-05-08 at 21.31.21 (1).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (2).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (3).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (4).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (4).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (5).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (6).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (7).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (8).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (9).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (10).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (11).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (12).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (13).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (14).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (15).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (16).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (17).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (18).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (19).jpeg","WhatsApp Image 2021-05-08 at 21.31.21 (20).jpeg"];
var i=0;
function move_image(){
    document.getElementById("main").src=album[i];
    i++;
    if(i==20)
        {
            i=0;
        }
     document.getElementById("song").play();
}

