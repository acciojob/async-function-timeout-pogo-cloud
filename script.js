
let but=document.querySelector("#btn");
let output=document.getElementById("output");
but.addEventListener("click",(event)=>{
	event.preventDefault();
	ted();
})
const display=()=>{
let ele=document.querySelector("#text");
let num=document.querySelector("#delay");
	return new Promise((res,rej)=>{
        setTimeout(()=>{
			if(ele.value!==""&&num.value!==""){
		   res(output.innerHTML=ele.value+"-"+num.value);
		}else{
           rej("Inputs cannot  be empty");
         }
			
		},num.value*1000)
		
	})
}
async function ted(){
	try {
		const p = await display();
	} catch (error) {
		console.error(error);
	}
	
}
