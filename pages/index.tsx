/* eslint-disable @next/next/no-img-element */
import {
  ButtonStart,
  CategoryList,
  Footer,
  Header,
  Line,
} from '@components/index';
import { getHomeData } from '@services/api/home';
import Head from 'next/head';
import { FC } from 'react';
import { HomeData } from 'shared/type';
import { v4 as uuidv4 } from 'uuid';

interface HomeProps {ß
  data: HomeData;
}

const Home: FC<HomeProps> = ({ data }) => {
  const HeaderButton = () => (
    <button className="bg-primary rounded-[5px] font-medium text-2xl tracking-[-0.333333px] py-[14px] px-[55px] cursor-pointer hover:opacity-90">
      Login
    </button>
  );

  return (
    <div className="bg-secondary">
      <Head>
        <title>Quaaash</title>
        <meta name="description" content="Quaaash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#020308] bg-home-pattern bg-right-top bg-no-repeat pt-[30px] pr-[34px]">
        <Header>
          <HeaderButton />
        </Header>
        <div className="mt-[265px] ml-[120px]">
          <div className="font-light font-[Inter] text-[62px] leading-[75px] mb-[18px]">
            We make your <br />
            <strong className="font-bold">favourite celebrities</strong>
            <br /> talk to you, &nbsp;
            <strong className="font-bold">personally.</strong>
          </div>
          <p className="font-light font-[Inter] text-xl mb-[60px]">
            Our artist community will turn your stories and memories into a
            <br />
            custom song for just $199.
          </p>
          <ButtonStart
            text="Start Your Song"
            className="py-5 px-[38px] mb-[118px]"
          />
        </div>
        <div className="flex items-center justify-center gap-[6px] pb-[38px]">
          <Line width="w-[63px]" height="h-4" bgColor="bg-primary" />
          <div className="bg-[#FFFFFF] rounded-[30px] h-4 w-[31px]"></div>
        </div>
      </div>
      <CategoryList
        title="Personalized Song"
        className="mb-[126px]"
        data={data?.topAudios.slice(0, 4)}
      />
      <CategoryList
        title="Personalized Video"
        className="mb-[116px]"
        data={data?.topVideos.slice(0, 4)}
      />
      <section className="bg-[#272669] bg-opacity-[0.79] grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[808px]">
        <div className="bg-artist mix-blend-luminosity bg-no-repeat h-[808px] w-full lg:h-full"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="font-light text-[42px] leading-[108px] mb-[30px]">
              THE PERFECT SONG IN 3 EASY STEPS
            </h4>
            <div className="flex justify-center items-center gap-[22px] mb-[50px]">
              <div className="w-[152px] h-[152px] text-[#000000] rounded-full bg-[#ffffff] py-10 px0[57px]">
                <span className="font-bold text-[62px] leading-[75px]">1</span>
              </div>
              <div className="w-[152px] h-[152px] text-[#000000] rounded-full bg-[#ffffff] py-10 px0[57px]">
                <span className="font-bold text-[62px] leading-[75px]">2</span>
              </div>
              <div className="w-[152px] h-[152px] text-[#000000] rounded-full bg-[#ffffff] py-10 px0[57px]">
                <span className="font-bold text-[62px] leading-[75px]">3</span>
              </div>
            </div>
            <h4 className="font-bold text-[56px] leading-[76px] mb-[30px]">
              Tell us about the occasion.
            </h4>
            <p className="font-light text-[32px] leading-[39px] mb-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <ButtonStart
              text="Start A Song"
              className="py-4 px-[51px] mb-5 lg:mb-0"
            />
          </div>
        </div>
      </section>
      <section className="pl-[67px] pr-[137px] pt-[131px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 2xl:gap-[56px] mb-[614px]">
        <div className="flex flex-col justify-center">
          <span className="mb-[23px] font-light text-[64px] leading-[77px] tracking-[-0.333333px]">
            New & <br /> <strong>Noteworthy</strong>
          </span>
          <div className="bg-primary w-[96px] h-[9px]"></div>
        </div>
        {data?.newUsers?.slice(0, 3).map((user) => (
          <div key={uuidv4()}>
            <img
              src={user?.profilePicture || '/img/artist3.svg'}
              alt=""
              className="h-[424px] object-cover"
            />
            <h4 className="font-semibold text-[32px] leading-[48px] tracking-[-0.408px] mb-1">
              {user?.name}
            </h4>
            <p className="font-light text-[18px] leading-[27px] tracking-[-0.408px]">
              {user?.description}
            </p>
            <div className="flex items-center gap-3">
              <p className="font-semibold text-2xl leading-9 tracking-[-0.408px] text-[#FF6B30]">
                ${user.price}
              </p>
              <div className="w-[1px] h-5 text-[#ffffff] border border-solid"></div>
              <p className="font-light text-2xl leading-9 tracking-[-0.408px]">
                {user.time} hour
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="pb-[104px] bg-[#272669] h-[2419px] sm:h-[1577px] xl:h-[738px] relative pl-10 2xl:pl-[122px] pr-[142px]">
        <div className="text-center absolute top-[-446px]">
          <div className="text-center mb-[83px]">
            <h2 className="mb-[53px] font-[Inter] font-semibold text-[62px] leading-[38px]">
              Featured Song Creaters
            </h2>
            <Line
              width="w-[81px]"
              height="h-4"
              bgColor="bg-primary"
              className="inline-block"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-[55px] mx-auto">
            {data?.premiumUsers.slice(0, 3)?.map((user) => (
              <div className="text-center" key={uuidv4()}>
                <div className="w-full aspect-square">
                  <img
                    src={user?.profilePicture || '/img/artist4.svg'}
                    alt=""
                    className="w-full h-full object-cover rounded-full border-[18px] border-solid border-black04 mb-[42px]"
                  />
                </div>

                <p className="text-[52px] leading-[38px] mb-[52px]">
                  {user?.name}
                </p>
                {/* <div className="flex items-center justify-center gap-3 mb-[45px]">
                  <img src="/icon/play.svg" alt="" />
                  <Line width="w-[223px]" height="h-1" bgColor="bg-[#D9D9D9]" />
                  <div className="bg-[#FF6B30] rounded-[150px] py-[10px] px-[26px]">
                    <span className="text-[18px] leading-[27px]">05.03</span>
                  </div>
                </div> */}
                <p className="font-light text-2xl leading-9 text-center">
                  {user?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const getDataService = await getHomeData();
  return {
    props: { data: getDataService },
  };
}

export default Home;
