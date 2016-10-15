var button = document.getElementById('counter');
var counter = 0;
 button.onclick = function(){
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
 };
 
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('btn-submit');
 submit.onclick = function(){
   var name = ['name','name2','name3','name4'];
   var list = '';
   for(var i=0; i<name.length; i++){
       list +='<li>'+name[i]+'</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
         };