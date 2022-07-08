import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Link, useLocation, useNavigate, useHistory } from "react-router-dom";
function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);

      navigate(-1);
    } catch (error) {
      console.log(error);
      setError("登入失敗");
    }

    setLoading(false);
  }

  return (
    <main className="Login Form">
      <div className="container page-full-height">
        <form onSubmit={handleSubmit}>
          <h2>登入會員</h2>
          {error && <p>{error}</p>}

          <div className="Form-group">
            <label htmlFor="email">電子信箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="test@test.com"
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
              placeholder="請輸入至少6位密碼: 123456"
              required
            />
          </div>

          <button className="btn" disabled={loading}>
            登入
          </button>

          <div className="Form-link">
            <Link to="/register">還沒有帳戶？ 點此註冊</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
