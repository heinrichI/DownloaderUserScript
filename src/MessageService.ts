import { IMessageService } from "./Interfaces";

export class MessageService implements IMessageService
{
    Show() : string | null
    {  
     var promptValue = prompt('Download - 1\nOpen page - 2', '');  
     return promptValue
    //  if (promptValue != null) {  
    //   document.getElementById("Status").innerHTML = "Prompt Box value ->" + promptValue;  
    //  } else  
    //  {  
    //   document.getElementById("Status").innerText = "You cancel Prompt Box";  
    //  }  
    }   
}