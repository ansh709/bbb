class Contact{
	constructor(heading,para){
		this.heading = heading;
		this.para = para;
	}
}

var data = new Contact('Extra Earn Money','Built to match the design trends and give your page the awesome facelift it deserves.');

contact = ()=>{
	document.querySelector('.contact').innerHTML+=`
   <div class="container">
        <div class="row">
		    <div class="col-md-12">
			    <div class="myContact">
					<h2>${data.heading}</h2>
					<p>${data.para}</p>
					<ul class="navbar-nav nav">
					   <li><a href="#"><i class="fa fa-facebook-f" style="font-size:24px"></i></a></li>
					   <li><a href="#"><i class="fa fa-phone" style="font-size:24px"></i></a></li>
					   <li><a href="#"><i class="fa fa-whatsapp" style="font-size:24px"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
   </div>
`;
}

document.addEventListener("DOMContentLoaded", contact);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}