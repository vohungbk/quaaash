import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <header
      className={clsx(
        'ml-[20px] md:ml-[120px] flex justify-between items-center',
        className
      )}
    >
      <div className="hidden sm:flex gap-[40px] md:gap-[120px] items-center justify-between">
        <h3 className="font-[Pattaya] text-[66px] leading-[92px] tracking-[.67px] cursor-pointer">
          <Link href="/"> Quaaash</Link>
        </h3>
        <div className="flex items-center">
          <p className="mr-4 md:mr-5 xl:mr-[140px] font-medium text-2xl tracking-[-0.333333px] cursor-pointer hover:text-primary">
            <Link href="/customize-song">Customize Song</Link>
          </p>
          <p className="font-medium text-2xl tracking-[-0.333333px] cursor-pointer hover:text-primary">
            Customize video
          </p>
        </div>
      </div>
      {children}
    </header>
  );
};
