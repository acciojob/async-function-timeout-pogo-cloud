
let but=document.querySelector("#btn");
let output=document.getElementById("output");
btn.addEventListener("click",(event)=>{
	event.preventDefault();
	ted();
})
const display=()=>{
let ele=document.querySelector("#text");
let num=document.querySelector("#num");
	return Promise((res)=>{
		if(ele.value!==" "&&num.value!==" "){
		   res(output.innerHTML=ele.value+"-"+num.value);
		}
	})
}
async function ted(){
    setTimeOut(()=>{
		const p= await display();
	},1000)
}
