class SignupForm{
	constructor(name,email,phone,pass){
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.pass = pass;
	}
}

var field = new SignupForm("<input type='text' placeholder='Type Your Name' name='fullname' class='form-control' required>","<input type='email' placeholder='Type Your Email' name='email' class='form-control' required>","<input type='phone' placeholder='Type Your Phone Number' name='phone' class='form-control' required>","<input type='password' placeholder='Password' name='password' class='form-control' required>");

signup = ()=>{
	signupForm.innerHTML+=`
	    <h1 class="text-center">SignUp Form </h1>
	    <form >
		    <div class="form-group">
			    ${field.name}
			</div>
			<div class="form-group">
			    ${field.email}
			</div>
			<div class="form-group">
			    ${field.phone}
			</div>
			<div class="form-group">
			    ${field.pass}
			</div>
			
			<a  id="submit" class="form-control" class="btn-success btn">Submit</a>
			
		</form>
	`;
}

signup();
