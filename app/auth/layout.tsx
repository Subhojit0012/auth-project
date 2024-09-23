const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400">
      {children}
    </div>
  );
};

export default AuthLayout;
