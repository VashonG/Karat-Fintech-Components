/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import Input1 from 'src/components/Input1/Input1';
import Button1 from 'src/components/Button1/Button1';
import { LoginProps } from 'src/types';

const Login1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  boxSizing: `border-box`,
  borderRadius: `24px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `center`,
  padding: `32px`,
  height: 'auto',
}));

const Login2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame68: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `40px 0px 0px 0px`,
});

const Input2: any = styled(Input1)(({ theme }: any) => ({
  width: `272px`,
  margin: `0px`,
}));

const Input3: any = styled(Input1)(({ theme }: any) => ({
  width: `272px`,
  margin: `20px 0px 0px 0px`,
}));

const ForgotPassword: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `20px 0px 0px 0px`,
}));

const Button2: any = styled(Button1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `20px 0px 0px 0px`,
}));

function Login(props: LoginProps): JSX.Element {
  return (
    <Login1 className={props.className}>
      <Login2>{`Login`}</Login2>
      <Frame68>
        <Input2 />
        <Input3 />
        <ForgotPassword>{`Forgot password?`}</ForgotPassword>
        <Button2 />
      </Frame68>
    </Login1>
  );
}

export default Login;