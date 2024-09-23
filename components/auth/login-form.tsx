import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLable="Welcome Back"
      backButtonLable="Don't have an account"
      backuttonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
