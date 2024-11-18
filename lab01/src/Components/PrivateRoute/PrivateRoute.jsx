import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Bạn cần tự định nghĩa useAuth nếu chưa có

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Giả sử useAuth trả về trạng thái đăng nhập

  if (!isLoggedIn) {
    return <Navigate to="/" replace />; // Nếu chưa đăng nhập, chuyển hướng về trang chủ hoặc trang login
  }

  return children; // Nếu đã đăng nhập, render component con
};

export default PrivateRoute;
