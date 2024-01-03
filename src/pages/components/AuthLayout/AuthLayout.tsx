import "./AuthLayout.scss";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="auth-page">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
