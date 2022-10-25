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
    <div className="hidden sm:flex items-center gap-3">
      <ButtonPrimary
        text="ContinueYour Song"
        className="rounded-[5px]"
        labelClassName="leading-9 font-semibold text-2xl"
      />
      <button className="rounded-[5px] border border-solid border-white py-[14px] px-[55px]">
        <span className="font-medium text-2xl leading-9 tracking-[-0.333333px]">
          Login
        </span>
      </button>
    </div>
  );

  const CategoryItem = (artist: Artists) => (
    <div className="flex flex-col">
      <div className="h-[400px] 2xl:h-[534px] relative mb-[35px] inline-block">
        <img
          src={artist.profilePicture || '/img/artist3.svg'}
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="bg-[#161540] bg-opacity-75 rounded-[149px] py-[10px] px-9 absolute right-[30px] bottom-[32px]">
          <span className="font-semibold text-[20xp] leading-[30px]">$250</span>
        </div>
      </div>
      <p className="font-medium text-[36px] leading-[54px] tracking-[-0.408px]">
        {artist.name}
      </p>
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
      <section className="h-[1490px] md:h-[1088px] relative pt-[353px]">
        <div className="bg-primary bg-opacity-40 w-[40%] blur-[170px] h-full absolute top-0 left-0"></div>
        <div className="absolute top-0 right-0 left-0">
          <img src="/img/mark.webp" alt="" className="ml-auto" />
        </div>

        <Header className="absolute top-0 right-0 left-0 mr-[34px]">
          <HeaderButton />
        </Header>
        <div className="absolute top-[353px] left-[128px] max-w-[40%]">
          <h2 className="font-[Inter] font-bold text-[72px] leading-[87px] mb-[22px]">
            Explore our community of artists.
          </h2>
          <p className="font-[Inter] text-2xl mb-[93px]">
            We work with hundreds of talented artists to make sure we can always
            find the perfect match for each song. Browse below, and let us know
            if you find a specific artist you’d like to create your custom song.
          </p>
          <ButtonStart text="Start Your Song" className="px-[38px] py-[20px]" />
        </div>
      </section>
      <section className="bg-[#272669] pt-[103px] pb-[48px] pr-[78px] pl-[95px]">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-5 md:gap-[63px] mb-[66px]">
          <div className="col-span-2 relative w-full lg:w-[60%]">
            <input
              placeholder="Search artist by name"
              className="text-[#000000] pl-[139px] py-[38px] font-[Inter] font-medium text-[36px] leading-[44px] focus-visible:outline-none border-2 border-solid border-white rounded-[5px] shadow-black025 w-full"
              value={searchText}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                setSearchText(e.target.value);
              }}
              onKeyDown={handleKeyEnter}
            />

            <img
              src="/icon/search.svg"
              alt=""
              className="absolute left-[66px] top-[50%] translate-y-[-24px]"
            />
          </div>

          <button
            className="border-2 border-solid border-white rounded-[5px] drop-shadow-black025 py-[43px] px-[144px] font-semibold text-[52px] leading-[38px] w-full lg:w-auto"
            onClick={getData}
          >
            Search
          </button>
        </div>
        <div className="text-center">
          {CATEGORY.map((item) => (
            <div
              key={uuidv4()}
              className={clsx(
                'rounded-[180px] py-[33px] px-[62px] inline-block mr-4 mb-[60px] cursor-pointer',
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
      <section className="pt-[86px] px-[134px]">
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
                <div key={uuidv4()} className="mb-[100px]">
                  <div className="mb-[100px] flex items-center">
                    <h2 className="font-[Inter] font-semibold text-[62px] leading-[58px] md:leading-[38px] mr-4 md:mr-9">
                      {category.value}
                    </h2>
                    <Line width="w-[81px]" height="h-4" bgColor="bg-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[56px]">
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