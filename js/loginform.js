class LoginFormData{
	constructor(email,pass){
		this.email = email;
		this.pass = pass;
	}
}

var field = new LoginFormData("<input type='email' placeholder='Type Your Email' name='email' class='form-control' required>","<input type='password' placeholder='Password' name='password' class='form-control' required>");

MyLoginForm = ()=>{
	LoginForm.innerHTML+=`
	    <h1 class="text-center">Login Now</h1>
	    <form action="" method="post">
		   <div class="form-group">
			    ${field.email}
			</div>
			<div class="form-group">
			    ${field.pass}
			</div>
			<input type="submit" class="form-control" class="btn-success btn">
		</form>
	`;
}

MyLoginForm();