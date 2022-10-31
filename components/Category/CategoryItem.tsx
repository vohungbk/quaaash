/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import { TopAudio } from 'shared/type';

interface CategoryItemProps {
  data: TopAudio;
}

export const CategoryItem: FC<CategoryItemProps> = ({ data }) => {
  return (
    <div>
      <div className="relative mb-6">
        <img
          alt=""
          src={
            data?.thumbnail || data?.userId.profilePicture || '/img/artist3.svg'
          }
          className="object-cover h-[325px] sm:h-[477px] w-full"
        />
        <div className="absolute right-3 bottom-[10px] bg-secondary opacity-[0.74] rounded-[19px] px-5 py-1">
          <span className="leading-[30px] font-semibold text-xl">
            ${data.price}
          </span>
        </div>
      </div>
      <h4 className="mb-2 font-semibold sm:font-medium text-xl sm:text-[32px] leading-[15px] sm:leading-[48px] tracking-[-0.408px]">
        {data?.userId.name}
      </h4>
      <p className="font-light text-xs text-[22px] leading-[33px] tracking-[-0.408px]">
        {data.name}
      </p>
    </div>
  );
};
