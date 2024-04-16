import Signup from "../components/Signup";

export default function Login() {
    return (
      <main className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h3>Login</h3>
              <hr/>
                <form className="mt-3">
                  <div class="mb-3">
                      <label for="username" class="form-label">Username</label>
                      <input type="text" class="form-control" id="username"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="Password"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-5 offset-2">
              <h3>Sign up</h3>
              <hr/>
                <Signup/>
            </div>
          </div>
        </div>
      </main>
    );
  }
  