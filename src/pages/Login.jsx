import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigation } from "react-router-dom";
const Login = () => {
  const navigation = useNavigation()
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shdow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold w-full">Login</h4>
        <FormInput
          label="Email"
          name="indentifier"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
