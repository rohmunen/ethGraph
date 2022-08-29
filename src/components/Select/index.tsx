import React from "react";
import styles from "./styles.module.scss";

type Props = {
  label: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ children, label, onChange }: React.PropsWithChildren<Props>) => {
  return (
    <label className={ styles.select }>
      { label }
      <select onChange={ onChange }>
        { children }
      </select>
    </label>
  )
}
