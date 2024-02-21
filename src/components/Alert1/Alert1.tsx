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
import HeroiconsMiniExclamaImage from 'src/assets/images/Alert_heroicons_mini_exclamation_triangle.svg';
import { styled } from '@mui/material/styles';
import { Alert1Props } from 'src/types';

const Alert2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 245, 245, 1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `12px 16px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
}));

const Frame123: any = styled('div')({
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

const HeroiconsMiniExclama: any = styled('img')({
  height: `auto`,
  width: `20px`,
  margin: `0px`,
});

const ThisAccountIs14DaysP: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(240, 62, 62, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}));

function Alert1(props: Alert1Props): JSX.Element {
  return (
    <Alert2 className={props.className}>
      <Frame123>
        <HeroiconsMiniExclama
          src={HeroiconsMiniExclamaImage}
          loading="lazy"
          alt={'heroicons-mini/exclamation-triangle'}
        />
        <ThisAccountIs14DaysP>
          {`This account is 14 days past due`}
        </ThisAccountIs14DaysP>
      </Frame123>
    </Alert2>
  );
}

export default Alert1;
