//Akhila
import React, { useState } from "react";
import landbg from "../../Images/landbg.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("loginskjdfbsu dfuhs");
  const handlelogin = async (e) => {
    e.preventDefault();
    console.log("calling handlesubmit");
    try {
      let res = await fetch("http://localhost:5001/login", {
        method: "POST",
        body: new URLSearchParams({
          email,
          password,
        }),
      });
      const reg = await res.json();
      console.log("in reg valeu", reg);

      // navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={handlelogin}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterspacing: "1px" }}
                  >
                    Log in
                  </h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Log up
                    </button>
                  </div>

                  <p>
                    Don't have an account?{" "}
                    <a href="/register" className="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={landbg}
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectfit: "cover", objectposition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
