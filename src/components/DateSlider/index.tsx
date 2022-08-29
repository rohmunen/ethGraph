import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import { useDateSlider } from '../../hooks/useDateSlider';
import styles from './styles.module.scss'

type Props = {
  dates: string[],
  setDates: React.Dispatch<React.SetStateAction<string[]>>
}


export const DateSlider = ({ dates, setDates }: Props) => {
  const { startDateLabel, endDateLabel, onDateChange, maxRange, currentValue } = useDateSlider({ dates, setDates })
  
  return (
    <div className={ styles.slider }>
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
    </div>
  )
}