const fbBtn = document.getElementById("fb-social-btn")
const githubBtn = document.getElementById("github-social-btn");
const whatsappBtn = document.getElementById("whatsapp-social-btn");
const linkedinBtn = document.getElementById("linkedin-social-btn");


fbBtn.addEventListener("click",(event)=>{
  window.open("https://www.facebook.com/machaweshongwe");
}
)

githubBtn.addEventListener("click", (event) => {
	window.open("https://github.com/Machawe");
});
linkedinBtn.addEventListener("click", (event) => {
	window.open("https://www.linkedin.com/in/machaweshongwe");
});

whatsappBtn.addEventListener("click", (event) => {
  console.log("whatsapp")
	window.open(" https://wa.me/+26876497748");
	// window.open(" tel:+26876497748");
});

function sendMesssage(){
	console.log("This is the massage")
}