//alert("Please Do Not Refresh The Page");
window.addEventListener('load',function(){
	setTimeout(function(){
		document.querySelector('.add-to').style.display ="block";
		console.log("hello");
	},3000);
	document.querySelector('.later').addEventListener('click',function(){
	document.querySelector('.add-to').style.display ="none";
	})
    
})
claim.addEventListener('click',function(){
	document.getElementById('LoginForm').style.display = "block";
})


function MyPoints(){
	var a = 1;
		var ad = document.getElementsByClassName('ad');
		for(var i=0; i< ad.length;i++){
		    ad[i].addEventListener('click',function(){
			   //console.log(a++);
			   document.getElementById('points').innerHTML=a++;
			   myLog();
			   mypointsAccess();
			})
		}
	//console.log(LoginForm);

}
MyPoints();




function myLog(){
	if(points.innerHTML === "3"){
		  claim.style.display = "block";
	}else{
		  console.log("noe");
	}
}

function mypointsAccess(){
   acpoints.value=points.innerHTML;
   console.log(acpoints.value);
}


   function cmplteAd(){
	    setTimeout(function(){
		 
		  var celebration = document.getElementsByClassName('celebration');
		   var h = document.getElementsByClassName('mainad');
			for(var i =0;i<h.length;i++){
				if(h[i].style.display==="block"){
				h[i].style.display = "none";
				document.querySelector('.celebration').style.display = "block";
				mycelebration();
			}else{
				
			}
		}
	},5000);
   }
  
  
  function mycelebration(){
	   setTimeout(function(){
	       document.querySelector('.celebration').style.display = "none";
       },6000);
  }
   


var closeAd = document.querySelectorAll('.ad');
for(var i=0;i<closeAd.length;i++){
	closeAd[i].addEventListener('click',function(){
		setTimeout(()=>{
			this.style.display = "none";
		},5000);
			
	})
}



function myclick(evt,myad){
	//alert("hello");
	var ad = document.getElementsByClassName('mainad');
	for(var i =0;i<ad.length;i++){
		ad[i].style.display = "none";
	}
	document.getElementById(myad).style.display = "block";
	cmplteAd();
}

function prohold(){
	(profilePage.style.display ==="none")?profilePage.style.display = "block" : profilePage.style.display = "none"
	
}



function mypage(evt,cp){
	 var page = document.getElementsByClassName('page');
	 for(var i = 0;i < page.length;i++){
		  page[i].style.display="none";
	 }
	 document.getElementById(cp).style.display="block";
}






