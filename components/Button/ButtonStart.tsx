import clsx from 'clsx';
import { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

export const ButtonStart: FC<ButtonProps> = ({ text, className }) => (
  <button
    style={{
      background: 'linear-gradient(180deg, #7140CA 0%, #9A60DB 100%)',
    }}
    className={clsx(
      className,
      'rounded-[50px] font-semibold text-[16px] leading-6 tracking-[-0.333333px] hover:opacity-90'
    )}
  >
    {text}
  </button>
);
