/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import { TopAudio } from 'shared/type';

interface CategoryItemProps {
  data: TopAudio;
}

export const CategoryItem: FC<CategoryItemProps> = ({ data }) => {
  return (
    <div>
      <div className="relative mb-[9px]">
        <img
          alt=""
          src={
            data?.thumbnail || data?.userId.profilePicture || '/img/artist3.svg'
          }
          className="object-cover h-[250px] sm:h-[286px] w-full"
        />
        <div className="absolute right-3 bottom-[10px] bg-secondary opacity-[0.74] rounded-[19px] px-[13px] py-[2px]">
          <span className="font-semibold text-base">${data.price}</span>
        </div>
      </div>
      <h4 className="mb-1 font-semibold sm:font-medium text-xl sm:text-base leading-[15px] sm:leading-[24px] tracking-[-0.408px]">
        {data?.userId.name}
      </h4>
      <p className="font-light text-sm tracking-[-0.408px]">{data.name}</p>
    </div>
  );
};
