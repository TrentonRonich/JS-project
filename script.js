const points = [
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
   "Reply hazy try again",
"Ask again later",
"Cannot predict now",
"Concentrate and ask again",
"Very doubtful",
];
document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];


    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize ="120px";
        document.getElementById("clear").value="";
    }
}