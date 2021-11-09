$(".poster").click(function() {
    $(".intro").fadeOut();
    $(".collection ").fadeIn();
});

let counter1 = 0;

$(".result").click(function() {
    let userResultsPt1 = $(".birthNumber").val();
    let userResultsPt2 = $(".choice").val();
    
    if (userResultsPt1=== "1" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Lena Luthor." + "</p>").show();
    $('<img class="LL" src="https://i.redd.it/cdhqth88vcd21.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "1" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are J’onn J’onzz/ Martian Manhunter." + "</p>").show();
      $('<img class="MMH" src="https://townsquare.media/site/442/files/2015/12/vlcsnap-01233dd.jpg">').appendTo(".vote-result").show();}
       
   else if (userResultsPt1=== "2" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Winslow (Winn) Schott Jr." + "</p>").show();
     $('<img class="WS" src= "https://static.wikia.nocookie.net/dcmovies/images/8/8f/Winslow_Schott%2C_Jr._Arrow.png/revision/latest?cb=20190511173254">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "2" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Brainiac 5 (Brainy)." + "</p>").show();
     $('<img class="B" src= "https://tvline.com/wp-content/uploads/2018/06/supergirl-season-4-brainy.jpg?w=620">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "3" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Jimmy (James) Olsen." + "</p>").show();
     $('<img class="JO" src= "https://www.theyoungfolks.com/wp-content/uploads/2017/04/james-olsen-supergirl-1-770x433.jpg">').appendTo(".vote-result").show();}

    else if (userResultsPt1=== "3" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Maggie Sawyer." + "</p>").show();
     $('<img class="MS" src= "https://1.bp.blogspot.com/-bPqLp6Q124Y/WVSTEZeiSyI/AAAAAAAAAjc/S-PfIjZFZVcNA5CPgjkpBjVIUWH8lHOtACLcBGAs/s1600/interrogation2.JPG">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "4" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Alex Danvers." + "</p>").show();
    $('<img class="A" src= "https://i.pinimg.com/originals/0a/6a/b6/0a6ab696b628cfdf4bce4f5b26f78485.png">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "4" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Mon-El." + "</p>").show();
     $('<img class="ME" src= "https://tvline.com/wp-content/uploads/2017/11/supergirl-recap2.jpg?w=620">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "5" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Cat Grant." + "</p>").show();
     $('<img class="CG" src= "https://tvline.com/wp-content/uploads/2017/07/supergirl-calista-flockhart.jpg?w=620">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "5" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are J’onn J’onzz/ Martian Manhunter." + "</p>").show();
    $('<img class="MMH" src="https://townsquare.media/site/442/files/2015/12/vlcsnap-01233dd.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "6" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Brainiac 5 (Brainy)." + "</p>").show();
      $('<img class="B" src= "https://m.media-amazon.com/images/M/MV5BZTQzN2EwYzAtZGNmMy00ZGU0LWE3YjYtMjYwNGM4NzMyYWI0XkEyXkFqcGdeQXVyMjI4OTg3MTc@._V1_.jpg">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "6" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Alex Danvers." + "</p>").show();
    $('<img class="BY" src= "http://pm1.narvii.com/6453/d0ce523b197112efcdc42a4455907e095cc81723_00.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "7" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Winslow (Winn) Schott Jr." + "</p>").show();
    $('<img class="WS" src= "https://static.wikia.nocookie.net/dcmovies/images/8/8f/Winslow_Schott%2C_Jr._Arrow.png/revision/latest?cb=20190511173254">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "7" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Maggie Sawyer." + "</p>").show();
     $('<img class="MS" src= "https://1.bp.blogspot.com/-bPqLp6Q124Y/WVSTEZeiSyI/AAAAAAAAAjc/S-PfIjZFZVcNA5CPgjkpBjVIUWH8lHOtACLcBGAs/s1600/interrogation2.JPG">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "8" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Lena Luthor." + "</p>").show();
     $('<img class="LL" src="https://i.redd.it/cdhqth88vcd21.jpg">').appendTo(".vote-result").show();}
   
    
     else if (userResultsPt1=== "8" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Alex Danvers." + "</p>").show();
    $('<img class="BY" src= "http://pm1.narvii.com/6453/d0ce523b197112efcdc42a4455907e095cc81723_00.jpg">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "9" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Kara (Zor-El) Danvers/Supergirl." + "</p>").show();
    $('<img class="KD" src= "https://i.pinimg.com/originals/c5/c3/dc/c5c3dc2104675cbec65e1105d03ec971.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "9" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Mon-El." + "</p>").show();
    $('<img class="ME" src= "https://tvline.com/wp-content/uploads/2017/11/supergirl-recap2.jpg?w=620">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "10" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Nia Nal/ Dreamer." + "</p>").show();
     $('<img class="D" src= "https://www.jacketscreator.com/wp-content/uploads/2020/05/nia-nal-supergirl-nicole-maines-jacket.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "10" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Kara (Zor-El) Danvers/Supergirl." + "</p>").show();
    $('<img class="KD" src= "https://i.pinimg.com/originals/c5/c3/dc/c5c3dc2104675cbec65e1105d03ec971.jpg">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "11" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Kara (Zor-El) Danvers/Supergirl." + "</p>").show();
      $('<img class="S" src= "http://pm1.narvii.com/6679/996217c0a90655e51aaccbe43e48e4028b49157a_00.jpg">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "11" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Cat Grant." + "</p>").show();
     $('<img class="CG" src= "https://tvline.com/wp-content/uploads/2017/07/supergirl-calista-flockhart.jpg?w=620">').appendTo(".vote-result").show();}
    
     else if (userResultsPt1=== "12" && userResultsPt2=== "academic")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are J’onn J’onzz/ Martian Manhunter." + "</p>").show();
     $('<img class="JJ" src= "https://www.danezon.com/wp-content/uploads/2020/04/Supergirl-J%E2%80%99onn-J%E2%80%99onzz-Bomber-Jacket.jpg">').appendTo(".vote-result").show();}
    
    else if (userResultsPt1=== "12" && userResultsPt2=== "physical")
    {$(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are Jimmy (James) Olsen." + "</p>").show();
    $('<img class="G" src= "https://img.17qq.com/images/arsatrwatcx.jpeg">').appendTo(".vote-result").show();}
       
    else{$(".vote-result").append("<p>" + "Error!!! Something's not right. Check your answers." + "</p>").show();
        $('<img class="error" src= "https://media.tenor.com/images/56e12801683d55fe28af778a4167221b/tenor.gif">').appendTo(".vote-result").show();}

    counter1 += 1;
    $(".counter").text("This quiz has been taken " + counter1 + " times.");

});