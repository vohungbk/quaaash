/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  isShowIcon?: boolean;
  labelClassName?: string;
}

export const ButtonPrimary: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, className, isShowIcon, labelClassName, ...props }) => (
  <button
    className={clsx(
      'bg-primary font-light text-[28px] leading[38px] py-[14px] px-[24px] hover:opacity-90',
      className
    )}
    {...props}
  >
    <span className={clsx('flex items-center gap-4', labelClassName)}>
      {text}
      {isShowIcon && <img src="/icon/view.svg" alt="" />}
    </span>
  </button>
);
