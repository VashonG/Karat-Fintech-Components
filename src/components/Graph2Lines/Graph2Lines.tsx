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
import Vector1Image from 'src/assets/images/Graph2lines_Vector_1.png';
import Vector2Image from 'src/assets/images/Graph2lines_Vector_2.png';
import Ellipse3Image from 'src/assets/images/Graph2lines_Ellipse_3.png';
import Ellipse31Image from 'src/assets/images/Graph2lines_Ellipse_3_1.png';
import VectorImage from 'src/assets/images/Graph2lines_Vector.png';
import Vector3Image from 'src/assets/images/Graph2lines_Vector_3.png';
import Vector4Image from 'src/assets/images/Graph2lines_Vector_4.png';
import Vector5Image from 'src/assets/images/Graph2lines_Vector_5.png';
import Vector6Image from 'src/assets/images/Graph2lines_Vector_6.png';
import { styled } from '@mui/material/styles';
import Tabs from 'src/components/Tabs/Tabs';
import { Graph2LinesProps } from 'src/types';

const Graph2Lines1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  borderRadius: `24px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Frame92: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `304px`,
  margin: `0px`,
});

const Frame114: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const ApprovalsRejections: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const ThisMonth: any = styled('div')(({ theme }: any) => ({
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
  margin: `4px 0px 0px 0px`,
}));

const Tabs1: any = styled(Tabs)(({ theme }: any) => ({
  margin: `0px 0px 0px 4px`,
}));

const Frame115: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Group1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `153px`,
  width: `304px`,
  margin: `0px`,
});

const Mar12023: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `44px`,
  top: `139px`,
}));

const Q0: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `107px`,
}));

const Q10: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Mar312023: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  position: `absolute`,
  left: `235px`,
  top: `139px`,
}));

const Line2: any = styled('div')({
  border: `0.5px solid rgba(222, 226, 230, 1)`,
  width: `304px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `127px`,
});

const Line5: any = styled('div')({
  border: `0.5px solid rgba(222, 226, 230, 1)`,
  width: `304px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `21px`,
});

const Line3: any = styled('div')({
  border: `0.5px solid rgba(222, 226, 230, 1)`,
  width: `5px`,
  height: `0px`,
  position: `absolute`,
  left: `47px`,
  top: `131px`,
});

const Line4: any = styled('div')({
  border: `0.5px solid rgba(222, 226, 230, 1)`,
  width: `5px`,
  height: `0px`,
  position: `absolute`,
  left: `307px`,
  top: `131px`,
});

const Vector1: any = styled('img')({
  height: `99px`,
  width: `259px`,
  position: `absolute`,
  left: `45px`,
  top: `21px`,
});

const Vector2: any = styled('img')({
  height: `26px`,
  width: `259px`,
  position: `absolute`,
  left: `45px`,
  top: `101px`,
});

const Group2: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `130px`,
  height: `106px`,
  left: `116px`,
  top: `21px`,
});

const Line6: any = styled('div')({
  border: `0.5px solid rgba(134, 142, 150, 1)`,
  width: `106px`,
  height: `0px`,
  position: `absolute`,
  left: `56px`,
  top: `53px`,
});

const Frame110: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 0.9)`,
  boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.2)`,
  backdropFilter: `blur(4px)`,
  WebkitBackdropFilter: `blur(4px)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `6px 8px`,
  boxSizing: `border-box`,
  left: `13px`,
  top: `8px`,
});

const Mar9: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
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
  margin: `0px`,
}));

const Frame111: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `101px`,
  margin: `8px 0px 0px 0px`,
});

const Frame109: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Ellipse3: any = styled('img')({
  height: `10px`,
  width: `10px`,
  margin: `0px`,
});

const Approved: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
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
  margin: `0px 0px 0px 8px`,
}));

const Q2: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame112: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `101px`,
  margin: `8px 0px 0px 0px`,
});

const Frame1091: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Ellipse31: any = styled('img')({
  height: `10px`,
  width: `10px`,
  margin: `0px`,
});

const Rejected: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
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
  margin: `0px 0px 0px 8px`,
}));

const Q01: any = styled('div')(({ theme }: any) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `11px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `14px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Group: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `12.76px`,
  height: `15.25px`,
  left: `0px`,
  top: `80px`,
});

const Vector: any = styled('img')({
  height: `15.25px`,
  width: `12.76px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector3: any = styled('img')({
  height: `15.25px`,
  width: `12.76px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector4: any = styled('img')({
  height: `3.4px`,
  width: `0px`,
  position: `absolute`,
  left: `10px`,
  top: `9px`,
});

const Vector5: any = styled('img')({
  height: `3.4px`,
  width: `0.09px`,
  position: `absolute`,
  left: `8px`,
  top: `9px`,
});

const Vector6: any = styled('img')({
  height: `3.4px`,
  width: `0px`,
  position: `absolute`,
  left: `6px`,
  top: `9px`,
});

function Graph2Lines(props: Graph2LinesProps): JSX.Element {
  return (
    <Graph2Lines1 className={props.className}>
      <Frame92>
        <Frame114>
          <ApprovalsRejections>{`Approvals & Rejections`}</ApprovalsRejections>
          <ThisMonth>{`This month`}</ThisMonth>
        </Frame114>
        {false && <Tabs1 />}
      </Frame92>
      <Frame115>
        <Group1>
          <Mar12023>{`Mar 1, 2023`}</Mar12023>
          <Q0>{`0`}</Q0>
          <Q10>{`10`}</Q10>
          <Mar312023>{`Mar 31, 2023`}</Mar312023>
          <Line2></Line2>
          <Line5></Line5>
          <Line3></Line3>
          <Line4></Line4>
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector 1'} />
          <Vector2 src={Vector2Image} loading="lazy" alt={'Vector 2'} />
          <Group2>
            <Line6></Line6>
            <Frame110>
              <Mar9>{`Mar 9`}</Mar9>
              <Frame111>
                <Frame109>
                  <Ellipse3
                    src={Ellipse3Image}
                    loading="lazy"
                    alt={'Ellipse 3'}
                  />
                  <Approved>{`Approved`}</Approved>
                </Frame109>
                <Q2>{`2`}</Q2>
              </Frame111>
              <Frame112>
                <Frame1091>
                  <Ellipse31
                    src={Ellipse31Image}
                    loading="lazy"
                    alt={'Ellipse 3'}
                  />
                  <Rejected>{`Rejected`}</Rejected>
                </Frame1091>
                <Q01>{`0`}</Q01>
              </Frame112>
            </Frame110>
            <Group>
              <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
              <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
              <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
              <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
              <Vector6 src={Vector6Image} loading="lazy" alt={'Vector'} />
            </Group>
          </Group2>
        </Group1>
      </Frame115>
    </Graph2Lines1>
  );
}

export default Graph2Lines;