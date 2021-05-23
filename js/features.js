class slideBlock{
	constructor(icon,name,para){
		this.icon = icon;
		this.name = name;
		this.para = para;
	}
}
var sli01  = new slideBlock('<i class="fas fa-eye"></i>',"Eye Friendly","Light & Dark and  Auto Dark Detection.");
var sli02  = new slideBlock('<i class="fab fa-etsy"></i>',"Easy To use","Easy To Use for Everyone.");
var sli03  = new slideBlock('<i class="fab fa-cc-amazon-pay"></i>',"Paytm Accept","Accept Paytm Payment for Withdrawl.");
var sli04  = new slideBlock('<i class="fas fa-eye"></i>',"Eye Friendly","Light & Dark and  Auto Dark Detection");

Slide = ()=>{
	var arr = [sli01,sli02,sli03,sli04];

document.querySelector('.process').innerHTML+=`
    <div class="container">
	    <div class="row">
		    <div class="col-md-12">
				<div class="slideMain">
				    <h2>Quality Features</h2>
					<ul class="nav"></ul>
				</div>
		    </div>
		</div>
	</div>
   `;
for(var i in arr){
		document.querySelector('.slideMain>ul').innerHTML+=`
			<li>
				<a href="#">
					<div class="sliMain">
					    <div class="sliIcon">
						    <span>${arr[i].icon}</span>
					    </div>
					    <div class="content">
						   <h3>${arr[i].name}</h3>
						<span>${arr[i].para}</span>
					</div>
					</div>
				</a>
			</li>
		`;
	}

}

document.addEventListener("DOMContentLoaded", Slide);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}