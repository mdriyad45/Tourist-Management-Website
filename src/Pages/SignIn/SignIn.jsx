import React, { useContext } from "react";
import { Button, Input } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../Provider/AuthProvider";


const SignIn = () => {
    const {signIn,googleSignIn,} = useContext(AuthContext);
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
        console.log(result.user);
        navigate('/');
    })
    .catch(err => {alert(err.code)})
  }
  const googleLogin = ()=>{
    googleSignIn()
    .then(result => {
        console.log(result.user)
        navigate('/');
    })
}
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl">Sign in your account</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex justify-center mt-5 ">
              <span>
                <hr className="w-36" />
              </span>
              <span className="-mt-3 ml-1 mr-1">or</span>
              <span>
                <hr className="w-36" />
              </span>
            </div>
            <div className="mb-4">
              <Button
                color="primary"
                variant="bordered"
                fullWidth
                startContent={<FcGoogle />}
                onPress={googleLogin}
              >
                Sign up with Google
              </Button>
            </div>
            <div>
              <Link>
                <Button
                  color="primary"
                  variant="bordered"
                  fullWidth
                  startContent={<VscGithub className=" text-gray-800" />}
                >
                  Sign up with Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
