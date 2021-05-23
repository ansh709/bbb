 class Profile{
	 constructor(photo){
		 this.photo = photo;
	 }
 }
var  myPro = new Profile('images/userDefaulticon.png'); 
 
myprofile = ()=>{
	profilePage.innerHTML+=`
	  <div class="container">
	       <div class="row">
		        <div class="col-md-12">
				  
				    <div class="profileInsert text-center">
					    
					    <h3>Profile</h3>
						<img src="${myPro.photo}">
						<h2 id="myname"></h2>
					</div>
					<div class="profiledata">
					    
						<h4 id="email"><i class="far fa-envelope-open"></i> admin</h4>
						<h4 id="phone"><i class="fas fa-phone-alt"></i>  0123456789</h4>
						<h4 id="password"><i class="fas fa-key"></i> *******</h4>
					</div>
					<div class="taskPoits">
					     
					    <h1>Points -<span id="points"> 0 </span></h1>
						<a class="" id="claim">Claim Now</a>
					</div>
				</div>
		   </div>
	  </div>
	`;
}
myprofile();