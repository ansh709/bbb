class Process{
	constructor(icon,heading,color){
		this.icon = icon;
		this.heading = heading;
		this.color = color;
	}
}

var block01 = new Process('<i class="fas fa-fingerprint"></i>',"Click in Ad","color-orange");
var block02 = new Process('<i class="far fa-clock"></i>',"Wait Few Sec.","color-blue");
var block03 = new Process('<i class="far fa-times-circle"></i>',"Close Ad","color-yellow");
var block04 = new Process('<i class="fas fa-money-check-alt"></i>',"Claim Money","color-green");



HomeContent = ()=>{
	var arr = [block01,block02,block03,block04];
document.querySelector('.facilites').innerHTML+=`
    <div class="container">
	    <div class="row">
		    <div class="col-md-12">
			    <div class="blockHead text-center">
				    <h1>Earn By  4 Steps</h1>
					<p>Our products are designed to simplify the way you code a page, with focus on easy, copy and paste.</p>
				</div>
			</div>
		</div>
	</div>
`;

for(var i in arr){
	document.querySelector('.facilites>.container>.row').innerHTML+=`
	    <div class="mainBlock">
		    <div class="myBlock">
	            <span class="${arr[i].color}">${arr[i].icon}</span>	
		    </div>
			<div class="myBlockHeading">
	            <h3>${arr[i].heading}</h3>	
		    </div>
		</div>
	`;
}

	
}

document.addEventListener("DOMContentLoaded", HomeContent);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}