
if(JSON.parse(localStorage.getItem('arr')) === null)
{
	var arr=[]
}
else{arr = JSON.parse(localStorage.getItem('arr'));}
function add() {
	
    
	arr.push($("#feedinput").val())
	localStorage.setItem('arr', JSON.stringify(arr));
    refresh()
}

function refresh()
{

$("#container").empty()
	render(arr)
}

function render(arr)
{
  
   for(var i=arr.length;i>=0;i--)
   {
   	  rend(arr[i])
   }

}

function rend(msg)
{
	 $("#container").append('<div id ="msg">'+msg+'</div>');
}
