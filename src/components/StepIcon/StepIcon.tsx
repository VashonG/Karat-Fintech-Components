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
import Ellipse5Image from 'src/assets/images/StepIcon_Ellipse_5.png';
import HeroiconsMiniCheckImage from 'src/assets/images/StepIcon_heroicons_mini_check.svg';
import Ellipse51Image from 'src/assets/images/StepIcon_Ellipse_5_1.png';
import Ellipse6Image from 'src/assets/images/StepIcon_Ellipse_6.png';
import Ellipse52Image from 'src/assets/images/StepIcon_Ellipse_5_2.png';
import Ellipse61Image from 'src/assets/images/StepIcon_Ellipse_6_1.png';
import { styled } from '@mui/material/styles';
import { StepIconProps } from 'src/types';

const StateCompleted: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Ellipse5: any = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const HeroiconsMiniCheck: any = styled('img')({
  height: `auto`,
  width: `12px`,
  position: `absolute`,
  left: `6px`,
  top: `6px`,
});

const Ellipse51: any = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const Ellipse6: any = styled('img')({
  height: `6px`,
  width: `6px`,
  position: `absolute`,
  left: `9px`,
  top: `9px`,
});

const Ellipse52: any = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const Ellipse61: any = styled('img')({
  height: `6px`,
  width: `6px`,
  position: `absolute`,
  left: `9px`,
  top: `9px`,
});

function StepIcon(props: StepIconProps): JSX.Element {
  return (
    <StateCompleted className={props.className}>
      <Ellipse5 src={Ellipse5Image} loading="lazy" alt={'Ellipse 5'} />
      <HeroiconsMiniCheck
        src={HeroiconsMiniCheckImage}
        loading="lazy"
        alt={'heroicons-mini/check'}
      />
      {false && (
        <Ellipse51 src={Ellipse51Image} loading="lazy" alt={'Ellipse 5'} />
      )}
      {false && (
        <Ellipse6 src={Ellipse6Image} loading="lazy" alt={'Ellipse 6'} />
      )}
      {false && (
        <Ellipse52 src={Ellipse52Image} loading="lazy" alt={'Ellipse 5'} />
      )}
      {false && (
        <Ellipse61 src={Ellipse61Image} loading="lazy" alt={'Ellipse 6'} />
      )}
    </StateCompleted>
  );
}

export default StepIcon;
