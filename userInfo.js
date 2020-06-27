let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;

if(user_points < 4)
{
    document.querySelector("span.name").innerHTML = "Better Luck Next Time "+user_name;
}
else
{
    document.querySelector("span.name").innerHTML = "Well Done "+user_name;
}

if(user_points == 0)
{
    document.querySelector("span.points").innerHTML = "0";
}
else
{
    document.querySelector("span.points").innerHTML = user_points;
}
//document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;
