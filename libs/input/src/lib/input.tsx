import { ChangeEventHandler, MouseEventHandler } from 'react';
import styles from './input.module.css';

/* eslint-disable-next-line */
export interface InputProps {
  value: string;
  onChange: (e: any) => void;
}

export function Input({ value, onChange }: InputProps) {
  return (
    <input
      className={styles['input']}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
