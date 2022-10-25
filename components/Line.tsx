import clsx from 'clsx';
import { FC } from 'react';

interface LineProps {
  width: string;
  height: string;
  bgColor: string;
  className?: string;
}

export const Line: FC<LineProps> = ({ width, bgColor, height, className }) => (
  <div
    className={clsx(bgColor, 'rounded-[30px]', height, width, className)}
  ></div>
);
