import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    createUser(email, password).then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold mb-4">
                  Join Travol Tourism Website
                </h1>
                <h6>
                  By clicking 'Sign up', you agree to our{" "}
                  <Link to="#">terms of service</Link> and acknowledge you have
                  read our <Link>privacy policy.</Link>
                </h6>
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
              <div className="flex justify-center mt-16 ">
                <span>
                  <hr className="w-36" />
                </span>
                <span className="-mt-3 ml-1 mr-1">or</span>
                <span>
                  <hr className="w-36" />
                </span>
              </div>
              <div>
                <form onSubmit={handleSignUp}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
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
                      placeholder="password"
                      name="password"
                      className="input input-bordered relative"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
