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
import { AccountProps } from 'src/types';

const StateSelected: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(251, 244, 235, 1)`,
  border: `2px solid rgba(217, 140, 51, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px`,
  height: 'auto',
}));

const Frame174: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Account1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame175: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Q: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(240, 209, 173, 1)`,
  fontStyle: `normal`,
  fontFamily: `JetBrains Mono`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `-0.2px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Q7422: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame178: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
});

const Frame176: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Savings: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(134, 142, 150, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame179: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 10px`,
});

const Q1: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
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
  margin: `0px`,
}));

const Q13839: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(134, 142, 150, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px 0px 0px 3px`,
}));

function Account(props: AccountProps): JSX.Element {
  return (
    <StateSelected className={props.className}>
      <Frame174>
        <Account1>{`Account`}</Account1>
        <Frame175>
          <Q>{`● ● ● ●`}</Q>
          <Q7422>{`7422`}</Q7422>
        </Frame175>
      </Frame174>
      <Frame178>
        <Frame176>
          <Savings>{`Savings`}</Savings>
        </Frame176>
        <Frame179>
          <Q1>{`$`}</Q1>
          <Q13839>{`138.39`}</Q13839>
        </Frame179>
      </Frame178>
    </StateSelected>
  );
}

export default Account;
