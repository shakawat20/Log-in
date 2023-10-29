import React from 'react';
import img from '../pic/Mobile-login-Cristina.jpg'

import { Checkbox, Form, Input, Label, LabelText, LoginButton, Section, Title ,CheckLabel,ChangePass,StyledImage, GoogleSignIn} from './LoginElement';


const Login = () => {
  return (
    <Section>
      <StyledImage src={img} alt="Description of the image" />

      <Form>
        <Title>Login</Title>


        <Label htmlFor="email">Username :</Label>
        <Input id="email" type="email" placeholder="Username" />



        <Label htmlFor="password">Password:</Label>
        <Input id="password" type="textarea" $size="2em" placeholder="Password" />

        <CheckLabel>
          <Checkbox defaultChecked />
          <LabelText>Remember Me</LabelText>
          <ChangePass>Change Password</ChangePass>
          
        </CheckLabel>
        <CheckLabel>
          <Checkbox defaultChecked />
          <LabelText>Agree to Terms & Conditions</LabelText>
        </CheckLabel>

        <LoginButton type="submit">Login</LoginButton>
        <GoogleSignIn>Sign in with google</GoogleSignIn>
      </Form>
    </Section>
  );
}

export default Login;
