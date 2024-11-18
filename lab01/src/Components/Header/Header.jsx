import { useContext, useState, useEffect } from "react";
import "./Header.scss";
import flower from "../../img/flo.png";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

function Header() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
        navigate("/Manager");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        navigate("/"); // Chuyển hướng về trang chính
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Cập nhật trạng thái theo người dùng
    });
    return () => unsubscribe();
  }, []);

  const isHeaderWhite = theme.backgroundColor === "rgb(216, 216, 216)";

  return (
    <div
      className="header"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="header__logo">
        <img src={flower} alt="Logo" />
      </div>

      <h3 style={{ color: isHeaderWhite ? "black" : theme.color }}>
        The Flower
      </h3>
      <nav className="header__nav">
        <ul>
          <li>
            <Link
              style={{ color: isHeaderWhite ? "black" : theme.color }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ color: isHeaderWhite ? "black" : theme.color }}
              to="/Origin"
            >
              Origin
            </Link>
            <Link
              style={{ color: isHeaderWhite ? "black" : theme.color }}
              to="/Contact"
            >
              Contact
            </Link>
            <Link
              style={{ color: isHeaderWhite ? "black" : theme.color }}
              to="/News"
            >
              News
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  style={{ color: isHeaderWhite ? "black" : theme.color }}
                  to="/Manager"
                >
                  Manager
                </Link>
                <Link
                  className="logout"
                  onClick={handleLogout}
                  style={{ color: isHeaderWhite ? "black" : theme.color }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                className="login__google"
                onClick={handleLoginGoogle}
                style={{ color: isHeaderWhite ? "black" : theme.color }}
              >
                Login with Google
              </Link>
            )}
          </li>
        </ul>
        <div className="change__color" style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="#"
            onClick={() => {
              toggle();
            }}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch to {dark ? "Light" : "Dark"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
