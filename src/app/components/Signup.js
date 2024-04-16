'use client'
export default function Signup() {

    async function submitHandler(event) {
        event.preventDefault();
        const fd=new FormData(event.target);
        const formData = {
            'first_name': fd.get('first_name'),
            'last_name': fd.get('last_name'),
            'username': fd.get('username'),
            'password': fd.get('password'),
        }
        
        // Send Data to the server

        const response = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // const resData = await response.json();
        console.log(resData);
        if (response.ok) {
            alert('User Created Successfully');
        }
    }

    return (
       <form className="mt-3" onSubmit={submitHandler}>
        <div class="mb-3">
            <label for="name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="f_name" required name="first_name"/>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="l_name" required name ="last_name"/>
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" required name ="username"/>
        </div>
        
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required name ="password"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
       </form>

    );
  }
  