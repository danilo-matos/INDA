var provincia =document.querySelectorAll(".mapa svg path");
let pvc_item = document.querySelectorAll(".item");


const num_lua=document.querySelector(".luanda_num");
let counter =0;
setInterval(()=>{
    if(counter==85){
        clearInterval();
    }else{
        counter+=1;
        num_lua.textContent=counter + "%";
    }
},80)

for (var i = 0; i < provincia.length; i++){
        provincia[i].addEventListener("click", function(){

            provincia.forEach(function(path){
                path.classList.remove("active");
            })
        
            this.classList.add("active");
            let path_value=this.getAttribute("data-path");
            pvc_item.forEach(function(item){
                item.style.display=" none";
            });
            
            switch(path_value){
                   case "0": 
                   HabilitantoProvincia(0, pvc_item);     
                   break;
                   case "1":
                    HabilitantoProvincia(1, pvc_item);     
                   break;

                default: 
                 
                break;    
            }



            if(path_value === "bengo"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value==="benguela"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value==="bie"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="cabinda"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="cuandocubango"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="cuanzanorte"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="cuanzasul"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="cunene"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="huambo"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="huila"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="luanda"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="lundanorte"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="lundasul"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="malanje"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="moxico"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="namibe"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="uige"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else if(path_value=="zaire"){
                document.querySelector("." + path_value).style.dispaly="block"
            }
            else{
                console.log("");
            }

           
        })
}



function HabilitantoProvincia(posicao ,  lista){
    for(let i = 0 ;  i<18  ;++i)
    {
       if(i != posicao ){
           pvc_item[i].style.display = "none";
       }else{
           pvc_item[i].style.display ="Block";  
       }
       
    }
}