class Task {
	constructor(heading,task){
		this.heading = heading;
		this.task = task;
	}
}


task.innerHTML+=`
     <div class="container">
	    <div class="row">
		    <div class="col-md-12">
			   <div class="details text-center">
						<h1>Daily  Tasks</h1>
						<p>Click in add wait a sec. and now visit your profile page click to withdrawal and fill up the  form click on send.</p>
						
			   </div>
			   <hr>
			    <div class="myAllTask">

				    <div class="SingleTask">
					      <div class="ad" onclick="myclick(event,'first')">
						       <h3>Task 1</h3>
						  </div>
						 <div class="mainad" id="first">
                         </div>
					</div>
					
					<div class="SingleTask">
					      <div class="ad" onclick="myclick(event,'sec')">
						       <h3>Task 2</h3>
						  </div>
						  <div class="mainad" id="sec">
						     <h2>First Ad</h2>
							  <p>Click this ad and Wait for 45 sec.</p>
						 </div>
					</div>
					
					<div class="SingleTask">
					      
						   <div class="ad" onclick="myclick(event,'forth')">
						       <h3>Task 3</h3>
						  </div>
						  <div class="mainad" id="forth">
						     <h2>First Ad</h2>
							  <p>Click this ad and Wait for 45 sec.</p>
						 </div>
					</div>
					
					<div class="SingleTask">
					      
						   <div class="ad" onclick="myclick(event,'third')">
						       <h3>Task 4</h3>
						  </div>
						  <div class="mainad" id="third">
						     <h2>First Ad</h2>
							  <p>Click this ad and Wait for 45 sec.</p>
						 </div>
					</div>
					<div class="celebration">
					
					    <img src="images/card.png" class="img-responsive card wow animate bounceInUp">
						<img src="images/celebration.gif" class="img-responsive card01">
					</div>
				</div>
			</div>
		</div>
	 </div>
`;