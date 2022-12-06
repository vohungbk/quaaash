/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import {
  ButtonPrimary,
  ButtonStart,
  Footer,
  Header,
  Line,
} from '@components/index';
import { ArtistParams, searchArtists } from '@services/api/customizeSong';
import clsx from 'clsx';
import Head from 'next/head';
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import { CATEGORY } from 'shared/constants';
import { Artists } from 'shared/type';
import { v4 as uuidv4 } from 'uuid';

interface CustomizeSongProps {
  data: Artists[];
}

const CustomizeSong: FC<CustomizeSongProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>(['all']);
  const [searchText, setSearchText] = useState<string>();
  const [artists, setArtists] = useState<Artists[]>(data);

  const HeaderButton = () => (
    <div className="flex items-center flex-wrap gap-2 sm:gap-3">
      <ButtonPrimary
        text="Continue your Song"
        className="rounded-[5px] w-full sm:w-auto"
        labelClassName="font-medium text-base justify-center"
      />
      <button className="rounded-[5px] border border-solid border-white py-[11px] px-[55px] bg-transparent w-full sm:w-auto">
        <span className="font-medium text-base tracking-[-0.333333px]">
          login
        </span>
      </button>
    </div>
  );

  const CategoryItem = (artist: Artists) => (
    <div className="flex flex-col">
      <div className="h-[250px] relative mb-5 sm:mb-[9px] inline-block">
        <img
          src={artist.profilePicture || '/img/artist3.svg'}
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="bg-[#161540] bg-opacity-75 rounded-[149px] py-[2px] px-4 absolute sm:right-[9px] right-5 bottom-5 sm:bottom-[9px]">
          <span className="font-semibold text-base">${artist.price}</span>
        </div>
      </div>
      <p className="font-medium text-base tracking-[-0.408px]">{artist.name}</p>
    </div>
  );

  const handlerClickTag = (value: string) => {
    if (value === 'all') {
      setSelectedCategory(['all']);
      return;
    }
    if (selectedCategory?.includes(value)) {
      const newValue = [...selectedCategory].filter((item) => item !== value);
      setSelectedCategory(newValue);
      return;
    }
    const newValue = [...selectedCategory, value].filter(
      (item) => item !== 'all'
    );
    setSelectedCategory(newValue);
  };

  useEffect(() => {
    getData();
  }, [selectedCategory]);

  const getData = async () => {
    const params: ArtistParams = {
      searchText,
      category: selectedCategory?.filter((item) => item !== 'all').toString(),
    };
    const data = await searchArtists(params);
    setArtists(data as Artists[]);
  };

  const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getData();
    }
  };

  return (
    <div className="bg-secondary">
      <Head>
        <title>Customize Song</title>
        <meta name="description" content="Customize Song" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-[1000px] relative sm:pt-[353px]">
        <div className="bg-primary bg-opacity-40 w-[40%] blur-[170px] h-full absolute top-0 left-0 hidden sm:block"></div>
        <div className="sm:absolute top-0 right-0">
          <img
            src="/img/mark.webp"
            alt=""
            className="ml-auto w-full sm:w-auto"
          />
        </div>

        <Header className="absolute top-0 right-0 left-0 pt-5 sm:pt-0 mr-[34px] sm:mt-[30px]">
          <HeaderButton />
        </Header>
        <div className="absolute top-[353px] left-0 sm:left-[128px] w-full sm:max-w-[37%] px-5 sm:px-0">
          <h2 className="font-inter font-bold text-[45px] sm:text-[52px] leading-[63px] mb-[22px]">
            Explore our community of artists.
          </h2>
          <p className="font-[Inter] text-base mb-[52px]">
            We work with hundreds of talented artists to make sure we can always
            find the perfect match for each song. Browse below, and let us know
            if you find a specific artist you’d like to create your custom song.
          </p>
          <ButtonStart text="Start Your Song" className="px-[38px] py-[20px]" />
        </div>
      </section>
      <section className="bg-[#272669] pt-10 sm:pt-53px] pb-[58px] px-5 sm:pr-[78px] sm:pl-[95px] text-center">
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-5 md:gap-[27px] mb-10 sm:mb-[66px]">
          <div className="col-span-2 relative w-full lg:w-[50%]">
            <input
              placeholder="Search artist by name"
              className="text-[#000000] pl-10 sm:pl-[50px] py-[13px] font-[Inter] font-medium text-[14px] sm:text-[16px] leading-[17px] focus-visible:outline-none border-2 border-solid border-white rounded-[5px] shadow-black025 w-full"
              value={searchText}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
              onKeyDown={handleKeyEnter}
            />
          </div>

          <button
            className="border-2 border-solid border-white rounded-[5px] drop-shadow-black025 py-5 sm:py-[3px] sm:px-9 font-semibold text-sm sm:text-base leading-6 sm:leading-[38px] w-full lg:w-auto bg-transparent cursor-pointer"
            onClick={getData}
          >
            Search
          </button>
        </div>
        <div className="sm:text-center inline-block max-w-[70%]">
          {CATEGORY.map((item) => (
            <div
              key={uuidv4()}
              className={clsx(
                'rounded-[180px] py-[14px] sm:py-4 px-10 sm:px-9 inline-block mr-3 mb-4 cursor-pointer text-[16px] leading-[19px]',
                selectedCategory.includes(item.key)
                  ? 'bg-primary'
                  : 'bg-[#403E86]'
              )}
              onClick={() => handlerClickTag(item.key)}
            >
              {item.value}
            </div>
          ))}
        </div>
      </section>
      <section className="pt-10 sm:pt-[86px] px-5 sm:px-[134px]">
        {!!artists &&
          CATEGORY?.filter((category) => category.key !== 'all')?.map(
            (category) => {
              const usersByCategory = artists?.filter(
                (artist) =>
                  artist.category.includes(category.key) &&
                  (selectedCategory.includes(category.key) ||
                    selectedCategory.includes('all'))
              );

              if (!usersByCategory.length) return null;
              return (
                <div key={uuidv4()} className="mb-10 sm:mb-[88px]">
                  <div className="mb-10 sm:mb-[48px] flex items-center sm:justify-start justify-between">
                    <h2 className="font-inter font-semibold text-[27px] sm:text-[32px] leading-7 md:leading-[38px] mr-4 md:mr-9">
                      {category.value}
                    </h2>
                    <Line width="w-[81px]" height="h-2" bgColor="bg-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-[56px]">
                    {usersByCategory.map((item) => CategoryItem(item))}
                  </div>
                </div>
              );
            }
          )}
      </section>
      <Footer />
    </div>
  );
};

export default CustomizeSong;

export async function getServerSideProps() {
  const getDataService = await searchArtists();
  return {
    props: { data: getDataService },
  };
}
