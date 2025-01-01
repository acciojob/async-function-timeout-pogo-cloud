
let but=document.querySelector("#btn");
let output=document.getElementById("output");
but.addEventListener("click",(event)=>{
	event.preventDefault();
	ted();
})
const display=()=>{
console.log('display function called');
let ele=document.querySelector("#text");
let num=document.querySelector("#delay");
	return new Promise((res,rej)=>{
        setTimeout(()=>{
			if(ele.value!==""&&num.value!==""){
    //          console.log('ele.value: ', ele.value); // Add this line
			 // console.log('num.value: ', num.value);
    //         console.log("Promise is working");
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
