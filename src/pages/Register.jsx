// React Helmet for managing document head
import { Helmet } from 'react-helmet';
// RegisterForm component
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </div>
  );
}
