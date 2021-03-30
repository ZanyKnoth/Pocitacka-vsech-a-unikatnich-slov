let b = document.querySelector("textarea");

b.addEventListener("input", write);
	
function write ()
{
  let ask = b.value.replace(/[^\-/a-zA-Z\u00C0-\u017F ]/g, '');
  let a = ask.split(" ");
  let arr = [];
  let result = [];
  let obj = {};
  let unique = 0;

  for(let i = 0; i < a.length; i++)
  {
	arr.push(a[i].toLowerCase());
    
      if(!obj[arr[i]])
      { 
         obj[arr[i]] = 1;
        
      } else {

         obj[arr[i]]+=1;
        
      }
    
  }
  
  let wholeObjNotSorted = Object.entries(obj);

  let wholeObjSorted = wholeObjNotSorted.sort((a, b) => b[1]>a[1]);

  for(let j = 0; j < wholeObjSorted.length; j++)
  {

result.push(wholeObjSorted[j].join(" - ") + "x<br>"); 

	  if(obj[arr[j]] == 1)
	  {
       unique+=1; 
    
	  }
  }

  let c = document.getElementById("text");
  c.innerHTML = result.join(" ") + "<br> Počet unikátních slov: " + unique + " (správný počet ukazuje až po zmáčknutí mezerníku. Chyba: po vícero stejných slovech za sebou přestane unikátní slova počítat)<br>Počet slov: " + a.length + " (správný počet ukazuje před zmáčknutím mezerníku).";

}