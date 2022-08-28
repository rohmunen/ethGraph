import moment, { parseTwoDigitYear } from 'moment';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDateSlider } from '../../hooks/useDateSlider';

type Props = {
  dates: string[],
  setDates: React.Dispatch<React.SetStateAction<string[]>>
}


export const DateSlider = ({ dates, setDates }: Props) => {
  const { startDateLabel, endDateLabel, onDateChange, maxRange, currentValue } = useDateSlider({ dates, setDates })
  return (
    <>
      <p>
        { startDateLabel }
      </p>
      <Slider
        range
        value={ currentValue }
        max={ maxRange }
        min={ 0 }
        onChange={ onDateChange }
      />
      <p>
        { endDateLabel }
      </p>
    </>
  )
}