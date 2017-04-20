function question1() //question1
{
for(var i=0 ; i<5; i++)
{
    document.write("Hello World"+"<br/>");
}
}

function question2() //question2
{
for(var i=1 ; i<=10; i++)
{
    document.write(i+"<br/>");
}
}

function question3() //question3
{
var table=prompt("Enter the table number?");
var len=prompt("Enter the length of a table?");
for(var i=1 ; i<=len; i++)
{
    document.write(table+"x"+i+"="+(table*i)+"<br/>");
}
}

function question4() //question4
{
var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for(var i=0 ; i<a.length; i++)
{
    document.write(a[i]+"<br/>");
}
}

function question5() //question5
{
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0 ; i<fruits.length; i++)
{
    document.write(fruits[i]+"<br/>");
}
for(var i=0 ; i<fruits.length; i++)
{
    document.write("Elements at index "+i+" is "+fruits[i]+"<br/>");
}
}

function question6() //question6
{
var noItems = +prompt("Enter no of items");
var items = [];
for(var i=0 ; i<noItems; i++)
{
    items[i]= prompt("Enter value for index "+i);
}
document.write("Number of items : "+noItems+"<br/>"+"Items:"+"<br/><br/>");

for(var i=0 ; i<noItems; i++)
{
    document.write(items[i]+"<br/>");
}
}

function question7() //question7
{
document.write("Counting:<br/>");
for(var i=1 ; i<=15; i++)
{
    document.write(i+",");
}
document.write("<br/>Reverse counting:<br/>");
for(var i=10 ; i>=1; i--)
{
    document.write(i+",");
}

document.write("<br/>Even:<br/>");
for(var i=0 ; i<=20; i++)
{
    if(i%2 == 0)
    document.write(i+",");
}
document.write("<br/>Odd:<br/>");
for(var i=0 ; i<=20; i++)
{
    if(i%2 != 0)
    document.write(i+",");
}

document.write("<br/>Series:<br/>");
for(var i=2 ; i<=20; i++)
{
    if(i%2 == 0)
    document.write(i+"k,");
}
}

function question8() //question8
{
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]; 
var foundBakery = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
var flag=false;
for(var i=0 ; i<bakery.length;i++)
{
    if(bakery[i]===foundBakery)
    {
        flag = true;
        document.write(foundBakery+" is available at index "+i+" in our bakery.");
    }
}
if(flag== false)
{
    document.write("We are sorry."+foundBakery+" is not available in our bakery.");
}
}

function question9() //question9
{
var numbers = [24, 53, 78, 91, 12];
var largest=-1;
for(var i=0;i<numbers.length;i++)
{
    if(largest<numbers[i])
    {
        largest = numbers[i];
    }
}
document.write("Array Items :"+numbers);
document.write("<br/>The Largest number is : "+largest);
}

function question10() //question10
{
    var numbers = [24, 53, 78, 91, 12];
    var smallest=numbers[0]; 

    for(var i=0;i<numbers.length;i++)
    {
        if(smallest>numbers[i])
        {
            smallest=numbers[i]
        }
    }
    document.write("<br/><br/>Array Items :"+numbers);
    document.write("<br/>The Smallest number is : "+smallest);
}



function question11() //question11
{
var numbers = [24, 53, 78, 91, 12];
var largest=-1;
var smallest=numbers[0]; 

for(var i=0;i<numbers.length;i++)
{
    if(largest<numbers[i])
    {
        largest = numbers[i];
    }
    if(smallest>numbers[i])
    {
        smallest=numbers[i]
    }
}
document.write("<br/><br/>Array Items :"+numbers);
document.write("<br/>The Largest number is : "+largest);
document.write("<br/>The Smallest number is : "+smallest);
}


function question12() //question12
{
for(var i=1;i<101;i++)
{
    if(i%5 == 0)
    {
        document.write(i+",");
    }
}
}

function question13() //question13
{
    var students = ["Ali", "Sami", "Taha", "Inam"]; 
    var scores  = [58, 73, 89, 90];

    var str="<table border='2'><tr><td>Students</td><td>Scores</td></tr>";

    for(var i=0;i<4;i++)
    {
        str=str.concat("<tr>");
        for(var j=1 ; j<=1;j++)
        {
            str=str.concat("<td>");
            str=str.concat(students[i]);
            str=str.concat("</td><td>");
            str=str.concat(scores[i]);
            str=str.concat("</td>")
        }
        str=str.concat("</tr>");
    }

document.write(str);
} 

function question14() //question14
{
var scores  = [12, 45, 3, 22, 34, 50];
var valueToStop = prompt("At which value do you want to stop?");
for(var i=0 ; i<scores.length;i++)
{
    if(valueToStop != scores[i])
    document.write(scores[i]+",");
    else
    { break;}
}
}

function question15() //question15
{
var a = [ [1,2,3] , [4,5,6] , [7,8,9] ];
for(var i=0;i<a.length;i++)
{
    for(var j=0;j<a.length;j++)
    {
        document.write(a[i][j]+" ");
    }
    document.write("<br/>");
}
}

function question16()
{
var input = +prompt("Enter any value?");
for(var i=input;i>=0;i-=0.5)
{
    document.write(i+",");
}
}

function question17() //question17
{
for(var i=0 ; i<=20;i++)
{
    if(i%2 == 0)
    {
        document.write(i+" is even.<br/>");
    }
        if(i%2 != 0)
    {
        document.write(i+" is odd.<br/>");
    }
}
}

function question18() //question18
{
var product =1;
for(var i=1;i<=7;i++)
{
    if(i%2 != 0)
    {
        product = product * i;
    }
}
document.write("The product of odd integers from 1 to 7 is "+product);
}

function question19() //question19
{
document.write("<br/>");
for(var i=7 ; i>=1;i--)
{
    for(var j=i; j>=1;j--)
    {
        document.write("*");
    }
    document.write("<br/>");
}
}

function question20() //question20
{
document.write("<br/>");
for(var i=4 ; i>=1;i--)
{
    for(var j=1; j<=5;j++)
    {
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>");
for(var i=1 ; i<=5;i++)
{
    for(var j=i; j>=1;j--)
    {
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>");
for(var i=5 ; i>=1;i--)
{
    for(var j=i; j>=1;j--)
    {
        document.write("*");
    }
    document.write("<br/>");
}

}