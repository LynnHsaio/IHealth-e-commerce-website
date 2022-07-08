import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const { name, email, password, passwordConfirm } = formData;

  function handleChange(e) {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("密碼確認不符合");
    }

    try {
      setError("");
      setLoading(true);
      await register(name, email, password);

      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <main className="Register Form">
      <div className="container page-full-height">
        <form onSubmit={handleSubmit} className="form">
          <h2>註冊會員</h2>
          {error && <p>{error}</p>}
          <div className="Form-group">
            <label htmlFor="name">顯示名稱</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="Form-group">
            <label htmlFor="email">電子信箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="Form-group">
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              id="password"
              name="password"
              minLength="6"
              value={password}
              onChange={handleChange}
              placeholder="請輸入至少6位密碼"
              required
            />
          </div>
          <div className="Form-group">
            <label htmlFor="passwordConfirm">密碼確認</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              minLength="6"
              value={passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn" disabled={loading}>
            註冊
          </button>
          <div className="Form-link">
            <Link to="/login">已有帳戶？ 點此登入</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
