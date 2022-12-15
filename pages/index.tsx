/* eslint-disable @next/next/no-img-element */
import {
  ButtonPrimary,
  ButtonStart,
  CategoryList,
  Footer,
  Header,
  Line,
} from '@components/index';
import { getHomeData } from '@services/api/home';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { HomeData } from 'shared/type';
import { v4 as uuidv4 } from 'uuid';

interface HomeProps {
  data: HomeData;
}

const Home: FC<HomeProps> = ({ data }) => {
  const router = useRouter();
  const HeaderButton = () => (
    <button className="bg-primary rounded-[5px] font-medium text-[16px] leading-6 tracking-[-0.333333px] py-[12px] px-[55px] cursor-pointer hover:opacity-90 w-full sm:w-auto">
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
      <div className="bg-[#020308] bg-home-pattern bg-center md:bg-right-top bg-no-repeat bg-cover sm:bg-contain sm:pt-[30px] pr-0 md:pr-[34px]">
        <Header isShowTitle>
          <HeaderButton />
        </Header>
        <div className="mt-[100px] sm:mt-[211px] text-center sm:text-left ml-0 md:ml-[120px]">
          <div className="font-light font-[Inter] text-[40px] sm:text-[52px] leading-[50px] sm:leading-[63px] mb-[37px]">
            We make your <br />
            <strong className="font-bold">favourite celebrities</strong>
            <br /> talk to you, &nbsp;
            <strong className="font-bold">personally.</strong>
          </div>
          <p className="font-light font-[Inter] text-[16px] leading-[19px] mb-[50px]">
            Our artist community will turn your stories and memories into a
            <br />
            custom song for just $199.
          </p>
          <ButtonStart
            text="Start Your Song"
            className="py-5 px-[38px] mb-[95px] sm:mb-[108px]"
          />
        </div>
        <div className="flex items-center justify-center gap-[6px] pb-[17px]">
          <Line width="w-[63px]" height="h-4" bgColor="bg-primary" />
          <div className="bg-[#FFFFFF] rounded-[30px] h-4 w-[31px]"></div>
        </div>
      </div>
      <CategoryList
        title="Personalized Song"
        className="mb-0 sm:mb-[88px] pt-[76px]"
        data={data?.topAudios.slice(0, 6)}
      />
      <CategoryList
        title="Personalized Video"
        className="mb-10 sm:mb-[76px] pt-0"
        data={data?.topVideos.slice(0, 6)}
      />
      <section className="bg-[#272669] bg-opacity-[0.79] grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[641px]">
        <div
          className="h-[310px] sm:h-[641px] lg:h-[641px] mix-blend-luminosity"
          style={{
            background:
              'linear-gradient(rgba(39, 38, 105, 0.8), rgba(39, 38, 105, 0.8)), url(/img/artist2.svg), no-repeat, center center/ cover',
          }}
        ></div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="font-light text-[18px] sm:text-2xl leading-[27px] sm:leading-[108px] mb-[30px] mt-10 sm:mt-0">
              THE PERFECT SONG IN 3 EASY STEPS
            </h4>
            <div className="flex justify-center items-center gap-[22px] mb-[50px]">
              <div className="w-[100px] h-[100px] text-[#000000] rounded-full bg-[#9A60DB] py-[26px] px-[38px]">
                <span className="font-bold text-[42px] leading-[51px]">1</span>
              </div>
              <div className="w-[100px] h-[100px] text-[#000000] rounded-full bg-[#ffffff] py-[26px] px-[38px]">
                <span className="font-bold text-[42px] leading-[51px]">2</span>
              </div>
              <div className="w-[100px] h-[100px] text-[#000000] rounded-full bg-[#ffffff] py-[26px] px-[38px]">
                <span className="font-bold text-[42px] leading-[51px]">3</span>
              </div>
            </div>
            <h4 className="font-semibold sm:font-bold text-[30px] sm:text-[32px] leading-[38px] sm:leading-[76px] mb-[30px] sm:mb-0">
              Tell us about the occasion.
            </h4>
            <p className="font-light text-center max-w-[436px] text-base leading-6 sm:leading-[19px] mb-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <ButtonStart
              text="Start A Song"
              className="py-4 px-[51px] mb-10 lg:mb-0"
            />
          </div>
        </div>
      </section>
      <section className="px-5 md:pl-[67px] md:pr-[70px] pt-10 sm:pt-62px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-10 2xl:gap-[43px] mb-[400px] sm:mb-[421px]">
        <div className="flex flex-row sm:flex-col justify-between sm:justify-center">
          <span className="sm:mb-[49px] font-semibold sm:font-light text-[18px] sm:text-[32px] leading-7 sm:leading-[39px] tracking-[-0.333333px]">
            New & <br className="hidden sm:block" /> <strong>Noteworthy</strong>
          </span>
          <div className="bg-primary w-[96px] h-[9px] hidden sm:block mb-[49px]"></div>
        </div>
        {data?.newUsers?.slice(0, 5).map((user) => (
          <div key={uuidv4()}>
            <img
              src={user?.profilePicture || '/img/artist3.svg'}
              alt=""
              className="h-[250px] object-cover w-full"
            />
            <h4 className="font-semibold text-xl sm:text-base tracking-[-0.408px] mb-2">
              {user?.name}
            </h4>
            <p className="font-light text-xs sm:text-sm tracking-[-0.408px] mb-2">
              {user?.description}
            </p>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xl sm:text-base tracking-[-0.408px] text-[#FF6B30]">
                ${user.price}
              </p>
              <div className="w-[1px] h-5 text-[#ffffff] border border-solid"></div>
              <p className="font-light text-xl sm:text-base tracking-[-0.408px]">
                {user.time} hour
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="pb-[104px] bg-[#272669] h-[1800px] sm:h-[1577px] xl:h-[400px] relative md:pl-10 2xl:pl-[122px] px-5 md:pr-[142px]">
        <div className="text-center absolute top-[-306px] sm:top-[-320px] left-0 right-0">
          <div className="text-center mb-10 sm:mb-[61px]">
            <h2 className="mb-5 sm:mb-[53px] font-[Inter] font-semibold text-[30px] sm:text-[32px] leading-[46px] md:leading-[38px]">
              Featured Song Creaters
            </h2>
            <Line
              width="w-[81px]"
              height="h-4"
              bgColor="bg-primary"
              className="inline-block"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 2xl:gap-[55px] mx-auto sm:px-[160px]">
            {data?.premiumUsers.slice(0, 4)?.map((user) => (
              <div className="sm:text-center" key={uuidv4()}>
                <div className="w-full aspect-square">
                  <img
                    src={user?.profilePicture || '/img/artist4.svg'}
                    alt=""
                    className="w-full h-full object-cover rounded-full border-[12px] sm:border-[18px] border-solid border-black04 mb-4 sm:mb-[25px]"
                  />
                </div>

                <p className="text-[28px] sm:text-base leading-7 sm:leading-[38px] mb-5 sm:mb-0">
                  {user?.name}
                </p>
                {/* <div className="flex items-center justify-center gap-3 mb-[45px]">
                  <img src="/icon/play.svg" alt="" />
                  <Line width="w-[223px]" height="h-1" bgColor="bg-[#D9D9D9]" />
                  <div className="bg-[#FF6B30] rounded-[150px] py-[10px] px-[26px]">
                    <span className="text-[18px] leading-[27px]">05.03</span>
                  </div>
                </div> */}
                <p className="font-light text-xl sm:text-base leading-5 text-center">
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
