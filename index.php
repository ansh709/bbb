<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extra Earn Money </title>
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/wow_animate.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" href="images/logoBlack.png">
    <link rel="apple-touch-icon" href="images/logoBlack.png">
    <link rel="apple-touch-icon" href="images/logoBlack.png">
    <link rel="icon" href="images/logoBlack.png" type="image/gif" sizes="16x16">
    <meta name="apple-mobile-web-app-status-bar" content="black">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Padauk&display=swap" rel="stylesheet">
	<style>
		table, th, td {
		border: 1px solid black;
		}
		</style>
</head>

<body>
   
    <main id="home" class="page">
			<header></header>
			<section id="slider"></section>
			<section class="process"></section>
			<section class="facilites"></section>
			<section class="contact"></section>
    </main>
	<nav></nav>
	<section id="profilePage" class="page"></section>
    <div id="LoginForm" class="page bounceIn wow animate"></div>
	<div id="task" class="page">
	</div>
	
	
	<div class="add-to bounceIn wow animate">
	    <img src="images/blackinstall.png">
		<p>Install App For Better Experience without loosing any data.</p>
		<button class="add-to-btn">Install Now</button>
		<p class="later">Maybe later</p>
	</div>




	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript">
			if ('serviceWorker' in navigator) {
			  window.addEventListener('load', function() {
				navigator.serviceWorker.register('sw.js').then(function(registration) {
				  // Registration was successful
				  console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}, function(err) {
				  // registration failed :(
				  console.log('ServiceWorker registration failed: ', err);
				});
			  });
			}

			let deferredPrompt;
			var div = document.querySelector('.add-to');
			var button = document.querySelector('.add-to-btn');
			div.style.display = 'none';

			window.addEventListener('beforeinstallprompt', (e) => {
			  // Prevent Chrome 67 and earlier from automatically showing the prompt
			  e.preventDefault();
			  // Stash the event so it can be triggered later.
			  deferredPrompt = e;
			  div.style.display = 'none';

			  button.addEventListener('click', (e) => {
			  // hide our user interface that shows our A2HS button
			  div.style.display = 'none';
			  // Show the prompt
			  deferredPrompt.prompt();
			  // Wait for the user to respond to the prompt
			  deferredPrompt.userChoice
				.then((choiceResult) => {
				  if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt');
				  } else {
					console.log('User dismissed the A2HS prompt');
				  }
				  deferredPrompt = null;
				});
			});
			});
	</script>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/header.js"></script>
    <script src="js/nav.js"></script>
    <script src="js/slider.js"></script>
	<script src="js/features.js"></script>
    <script src="js/facilities.js"></script>
	<script src="js/contact.js"></script>
	
	<script src="js/loginform.js"></script>
	<script src="js/profile.js"></script>
	<script src="js/task.js"></script>
	<script src="wow.js"></script>
	<script src="js/custom.js"></script>
	<script src="script/wow.js"></script>
	<script>
	new WOW().init();
	</script>
    <link type="text/css" href="css/tabs-1.css" rel="stylesheet" /> 
	
    
	
</body>

</html>

