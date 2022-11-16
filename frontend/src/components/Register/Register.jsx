//Akhila
import React, { useState } from "react";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    console.log(fname);
    try {
      let res = await fetch("http://localhost:5001/register", {
        method: "POST",
        body: new URLSearchParams({
          fname: fname,
          lname,
          email,
          password,
        }),
      });
      navigate("/main", { replace: true });
      const reg = await res.json();
      console.log("in reg valeu", reg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zindex: "10" }}>
            <h1 className="my-5 display-5 fw-bold ls-tight">
              The best offer <br />
              <span>fFood order</span>
            </h1>
            <p className="mb-4 opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="fname"
                          onChange={(e) => setFname(e.target.value)}
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="lname"
                          onChange={(e) => setLname(e.target.value)}
                          id="form3Example2"
                          className="form-control"
                        />
                        <label className="form-label">Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="form-control"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      id="form3Example4"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
