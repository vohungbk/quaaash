import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';

interface HeaderProps {
  children?: ReactNode;
  className?: string;
  isShowTitle?: boolean;
}

export const Header: FC<HeaderProps> = ({
  children,
  className,
  isShowTitle,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <header
        className={clsx(
          'ml-[20px] md:ml-[120px] justify-between items-center hidden sm:flex',
          className
        )}
      >
        <div className="sm:flex gap-[40px] md:gap-[120px] items-center justify-between">
          <img
            src="img/logo.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => {
              document.body.style.overflow = 'visible';
              router.push('/');
            }}
          />
          <div className="flex items-center">
            <p
              className="mr-4 md:mr-5 xl:mr-[140px] font-medium text-[16px] leading-6 tracking-[-0.333333px] cursor-pointer hover:text-primary"
              onClick={() => {
                document.body.style.overflow = 'visible';
                router.push('/customize-song');
              }}
            >
              Customize Song
            </p>
            <p className="font-medium text-[16px] leading-6 tracking-[-0.333333px] cursor-pointer hover:text-primary">
              Customize video wish
            </p>
          </div>
        </div>

        {children}
      </header>
      <header
        className={clsx(
          'pl-5 flex sm:hidden z-10',
          className,
          openMenu && 'h-[100vh] w-full'
        )}
      >
        <img
          src="/icon/buger.svg"
          alt=""
          onClick={() => {
            setOpenMenu(!openMenu);
            document.body.style.overflow = 'hidden';
          }}
          className={clsx(openMenu ? 'hidden' : 'block')}
        />
        {isShowTitle && (
          <h3
            className={clsx(
              'font-pattaya text-[28px] leading-[39px] tracking-[.67px] cursor-pointer ml-[90px]',
              openMenu ? 'hidden' : 'block'
            )}
          >
            Quaaash
          </h3>
        )}

        <button
          onClick={() => {
            setOpenMenu(!openMenu);
            document.body.style.overflow = 'visible';
          }}
          className={clsx(
            'justify-around flex-col w-8 h-8 border-none z-10 p-0 bg-transparent focus:outline-none',
            openMenu ? 'flex' : 'hidden',
            isShowTitle ? 'mt-[30px]' : 'mt-[10px]'
          )}
        >
          <div className="w-8 h-2 bg-[#EFFFFA] transition ease-linear duration-300 rotate-45 origin-[1px] rounded-[10px] relative"></div>
          <div className="w-8 h-2 bg-[#EFFFFA] transition ease-linear duration-300 rotate-45 origin-[1px] rounded-[10px] relative opacity-0"></div>
          <div className="w-8 h-2 bg-[#EFFFFA] transition ease-linear duration-300 rotate-[-45deg] origin-[1px] rounded-[10px] relative"></div>
        </button>
        <div
          className={clsx(
            'absolute top-0 left-0 pr-5 w-full h-full bg-secondary transition-transform ease-in-out duration-300 z-5',
            openMenu ? 'translate-x-0' : 'translate-x-[-100%]'
          )}
        >
          <h3
            className="font-pattaya text-center text-[28px] leading-[39px] tracking-[.67px] cursor-pointer mt-[30px]"
            onClick={() => {
              document.body.style.overflow = 'visible';
              router.push('/');
            }}
          >
            Quaaash
          </h3>
          <div className="flex flex-col gap-10 pl-5 pt-10">
            <p
              className="font-medium text-xl tracking-[-0.333333px] cursor-pointer hover:text-primary"
              onClick={() => {
                document.body.style.overflow = 'visible';
                router.push('/customize-song');
              }}
            >
              Customize Song
            </p>
            <p className="font-medium text-xl tracking-[-0.333333px] cursor-pointer hover:text-primary">
              Customize video
            </p>
          </div>
          <div className="absolute bottom-5 w-full px-5">{children}</div>
        </div>
      </header>
    </>
  );
};
