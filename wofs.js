var liste = JSON.parse(localStorage.getItem('lst'));



$( document ).ready(function ()
{ 
    addid ()
  
    rend(liste)

});



function addid ()
{
     for(var i = 0; i<liste.length;i++)
     {
         liste[i]["Id"]=i;
     }

    
    return liste 
}


function search()
{
   var ch= $("#search").val()
   ch=ch.toLocaleLowerCase()
     var arr=[]
   var str="";

   for(var i = 0; i<liste.length;i++)
   {  
      str=liste[i].name+" "+liste[i].lastname
      str=str.toLocaleLowerCase()
            if(str.includes(ch))
      {
        arr.push(liste[i])
      }
   }


   rend(arr);

}




function rend(lst)
{ 
    $("#container").empty()
 
  
   for (var i = 0 ; i<lst.length;i++) 
   {   
    

       render(lst[i] , i)     
   }

}

function render(liste , i)
{          
    $("#container").append(`<div class="card">
            <div class="image">
                <img
                    src="`+liste.imagelink+`"
                />
            </div>
            <div class="title">
                <h1>`+liste.name+" "+liste.lastname+`</h1>
            </div>
            <div class="des">
                <p>You can Add Desccription Here...</p>

            
            </div>
                <div id="red" onclick="redpin(`+i+`)" >`+liste.pins[0]+`</div>
                <div id="blue" onclick="bluepin(`+i+`)">`+liste.pins[1]+`</div>
                <div id="yellow" onclick="yellowpin(`+i+`)">`+liste.pins[2]+`</div>
                <div id="green" onclick="greenpin(`+i+`)">`+liste.pins[3]+`</div>

        </div>`); 
     }


function refresh()
{
     console.log("hahah")
   $("#container").empty()


 
    rend(liste)

}


function redpin(i)
{

   liste[i].pins[0]+=1
   refresh()

}
function bluepin(i)
{
   if(liste[i].pins[1]>=5)
   {
    liste[i].pins[0]+=1
    liste[i].pins[1]=0;
    refresh()

   } 
   else{
   liste[i].pins[1]+=1
   refresh()}

}
function yellowpin(i)
{
 if(liste[i].pins[2]>=5)
   {
    liste[i].pins[0]+=1
    liste[i].pins[2]=0;
    refresh()

   } 
 else
 {  liste[i].pins[2]+=1
   refresh()}

}
function greenpin(i)
{
    if(liste[i].pins[3]>=5)
   {
    liste[i].pins[0]+=1
    liste[i].pins[3]=0;
    refresh()

   } 
  else{liste[i].pins[3]+=1
   refresh()}

}

