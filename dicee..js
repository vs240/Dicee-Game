var x=Math.floor(Math.random()*6)+1;
var y="dice"+x+"."+"png";
document.querySelectorAll("img")[0].setAttribute("src", y);
var z=Math.floor(Math.random()*6)+1;
var m="dice"+z+"."+"png";
document.querySelectorAll("img")[1].setAttribute("src", m);
if (x>z)
{
    document.getElementById("winner").innerHTML="Player 1 Wins";
}
else
{
    document.getElementById("winner").innerHTML="Player 2 Wins";
}
