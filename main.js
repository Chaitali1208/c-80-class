name_of_the_student_array=[];
function submit()
{
    var display_student_array=[];
    for (var j=1;j<=4;j++)
{var name_of_the_student = document.getElementById("name_of_the_student_"+j) . value;



}
var lenght_of_name_of_student_array=name_of_the_student_array.lenght;
for (var k=0;k<lenght_of_student_array; k++)
{
display_student_array.push("<h4> Name-"+ name_of_the_student_array[k]+"</h4>")

}
   array;document.getElementById("display_name_with_commas").innerHTML= display_student_



console.log(name_of_the_student_array);

var remove_commas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.cs = "none";
document.getElementById("sort_button").style.cs = "inline-block";

}
function sorting()
{
    name_of_the_student_array.sort()
    display_student_array_sorting=[]
   
var lenght_of_name_of_student_array=name_of_the_student_array.lenght;
for (var k=0;k<lenght_of_student_array; k++)
{
display_student_array_sorting.push("<h4> Name-"+ name_of_the_student_array[k]+"</h4>")

}
   array;document.getElementById("display_name_with_commas").innerHTML= display_student_



console.log(name_of_the_student_array);

var remove_commas=display_student_array_sorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.cs = "none";
document.getElementById("sort_button").style.cs = "inline-block";


}


