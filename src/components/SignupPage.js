import { Button, Form, Input, Select } from 'antd';
import { Fragment, useState } from 'react';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export default function SignupPage() {
  const [emailInput, setEmailInput] = useState({
    email: '',
    satus: '',
    message: '',
  });
  const [passwordInput, setPasswordInput] = useState({
    password: '',
    status: '',
    message: '',
  });
  const [nationalityInput, setNationalityInput] = useState();

  const emailValidator = (email) => {
    if (email.includes('@')) return ['success', 'You typed a valid email'];
    return ['error', 'that is not a valid email'];
  };

  const emailHandler = (event) => {
    const email = event.target.value;
    const [status, message] = emailValidator(email);
    setEmailInput({ email, status, message });
  };

  const passwordValidator = (password) => {
    if (password.length >= 8) return ['success', 'Your password is strong!'];
    return ['error', 'Your password is too weak!'];
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    const [status, message] = passwordValidator(password);
    setPasswordInput({ password, status, message });
  };

  const nationalityhandler = (value) => {
    let greeting = '';
    switch(value) {
        case('en'):
            greeting = 'Hello!';
            break;
        case('de'):
            greeting = 'Hallo!';
            break;
        case('br'):
            greeting = 'Ola!';
            break;
        default:
            greeting = 'Hello!';
    }
    setNationalityInput(greeting);
  };

  const submitHandler = () => {};

  return (
    <Fragment>
      <Form
        {...formItemLayout}
        noValidate
        onSubmit={submitHandler}
        style={{ maxWidth: 600, margin: 'auto' }}
      >
        <Form.Item
          note="Email"
          label="Email"
          hasFeedback
          validateStatus={emailInput.status}
          help={emailInput.message}
        >
          <Input
            type="text"
            id={emailInput.status}
            value={emailInput.email}
            onChange={emailHandler}
          />
        </Form.Item>
        <Form.Item
          note="Password"
          label="Password"
          hasFeedback
          validateStatus={passwordInput.status}
          help={passwordInput.message}
        >
          <Input
            type="password"
            id={passwordInput.status}
            value={passwordInput.password}
            onChange={passwordHandler}
          />
        </Form.Item>
        <Form.Item
            note="Nationality"
            label="Nationality"
        >
          <Select
            onChange={nationalityhandler}
            defaultValue="en"
          >
            <Option value="en">English</Option>
            <Option value="de">German</Option>
            <Option value="br">Brazilian</Option>
          </Select>
        </Form.Item>
        <div>
          <Button type="primary" htmlType='submit'>Signup</Button>
        </div>
      </Form>
      <div className="entries">
        <p>{nationalityInput}</p>
        <p>Your email address is: {emailInput.email}</p>
        <p>Your email address is {emailInput.status === 'success' ? 'correct' : 'incorrect'}</p>
      </div>
    </Fragment>
  );
}
