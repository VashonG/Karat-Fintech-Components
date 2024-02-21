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
import StepIcon from 'src/components/StepIcon/StepIcon';
import { StepperProps } from 'src/types';

const Stepper1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `52px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Pending: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `4px`,
  top: `36px`,
}));

const Sent: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 140, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `127px`,
  top: `36px`,
}));

const Underwriting: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(73, 80, 87, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `219px`,
  top: `36px`,
}));

const NeedMoreInfo: any = styled('div')(({ theme }: any) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(73, 80, 87, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `325px`,
  top: `36px`,
}));

const Frame186: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `388px`,
  height: `24px`,
  left: `13px`,
  top: `0px`,
});

const StepIcon1: any = styled(StepIcon)(({ theme }: any) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
}));

const Frame188: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 4px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Rectangle1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(217, 140, 51, 1)`,
  borderRadius: `1px`,
  height: `2px`,
  width: `86px`,
  margin: `0px`,
}));

const StepIcon2: any = styled(StepIcon)(({ theme }: any) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
}));

const Frame187: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 4px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Rectangle2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `1px`,
  height: `2px`,
  width: `86px`,
  margin: `0px`,
}));

const StepIcon3: any = styled(StepIcon)(({ theme }: any) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
}));

const Rectangle3: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `1px`,
  width: `90px`,
  height: `2px`,
  margin: `0px`,
}));

const StepIcon4: any = styled(StepIcon)(({ theme }: any) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
}));

function Stepper(props: StepperProps): JSX.Element {
  return (
    <Stepper1 className={props.className}>
      <Pending>{`Pending`}</Pending>
      <Sent>{`Sent`}</Sent>
      <Underwriting>{`Underwriting`}</Underwriting>
      <NeedMoreInfo>{`Need more info.`}</NeedMoreInfo>
      <Frame186>
        <StepIcon1 />
        <Frame188>
          <Rectangle1></Rectangle1>
        </Frame188>
        <StepIcon2 />
        <Frame187>
          <Rectangle2></Rectangle2>
        </Frame187>
        <StepIcon3 />
        <Rectangle3></Rectangle3>
        <StepIcon4 />
      </Frame186>
    </Stepper1>
  );
}

export default Stepper;