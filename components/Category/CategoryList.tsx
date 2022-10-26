import clsx from 'clsx';
import { FC } from 'react';
import { TopAudio } from 'shared/type';
import { CategoryItem, Line, ButtonPrimary } from '..';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

interface CategoryListProps {
  title: string;
  className?: string;
  data: TopAudio[];
}

export const CategoryList: FC<CategoryListProps> = ({
  title,
  className,
  data = [],
}) => {
  const router = useRouter();

  const handlerClick = () => {
    router.push('/customize-song');
  };
  return (
    <section className={clsx('px-5 md:px-[135px] pt-[76px]', className)}>
      <div className="flex justify-end md:justify-between items-center flex-wrap mb-[80px]">
        <div className="flex items-center justify-between gap-2 md:gap-[78px] mb-5 lg:mb-0">
          <h2 className="font-inter font-semibold text-[32px] md:text-[62px] leading-[38px]">
            {title}
          </h2>
          <Line width="w-[40px] md:w-[81px]" height="h-4" bgColor="bg-primary" />
        </div>
        <ButtonPrimary
          text="View all"
          className="rounded-[130px]"
          isShowIcon
          onClick={handlerClick}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {data?.map((item) => (
          <CategoryItem key={uuidv4()} data={item} />
        ))}
      </div>
    </section>
  );
};
