/* eslint-disable @next/next/no-img-element */
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

const COMPANY = [
  'COMPANY',
  'Blog',
  'FAQ / Help Center',
  'Careers',
  'Privacy Policy',
  'Terms of Use',
  'Become An Ambassador',
];

const SONGS = [
  'SONGS',
  'Playlists',
  'Artists',
  'Store',
  'Privacy Policy',
  'Song Revisions',
];

const FOR_ARTISTS = ['FOR ARTISTS', 'Artist Community', 'Artist Login'];

export const Footer = () => {
  const ListItem = (list: string[], className?: string) => {
    return (
      <ul
        className={clsx(
          'flex flex-col gap-6 md:gap-[60px] mr-0 md:mr-5',
          className
        )}
      >
        {list.map((item, index) => (
          <li
            key={uuidv4()}
            className={clsx(
              index === 0 ? 'font-semibold mb-2 sm:mb-0' : 'font-medium',
              'text-[24px] md:text-[32px] leading-7 sm:leading-[48px] cursor-pointer hover:text-primary'
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="bg-[#02012E] flex items-start flex-wrap px-5 pt-[70px] md:pl-[160px] pb-[25px]">
      <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col md:mr-[120px] mb-5 md:mb-0">
        <p className="mb-5 sm:mb-[43px] font-medium text-2xl sm:text-[30px] md:text-[32px] leading-[48px]">
          JOIN OUR MAILING LIST
        </p>
        <input
          className="mb-5 sm:mb-[60px] rounded-[5px] bg-[#ffffff] px-5 sm:px-[42px] py-[14px] sm:py-5 text-[#8F8F8F] text-[14px] sm:text-[28px] leading-[17px] sm:leading-[42px] focus-visible:outline-none"
          placeholder="Email"
        />
        <div className="flex gap-5 sm:gap-[30px] items-center">
          <img src="/icon/fb.svg" alt="" className="cursor-pointer" />
          <img src="/icon/instagram.svg" alt="" className="cursor-pointer" />
          <img src="/icon/twitter.svg" alt="" className="cursor-pointer" />
        </div>
      </div>

      {ListItem(COMPANY, 'mb-10 lg:mb-0')}
      {ListItem(SONGS, 'w-full md:w-[35%] lg:w-auto mb-10 md:mb-0')}
      {ListItem(FOR_ARTISTS)}
    </footer>
  );
};
