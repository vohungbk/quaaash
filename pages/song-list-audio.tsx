/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';

const SongListAudio = () => {
  return (
    <div className="bg-[#161540]">
      <Head>
        <title>Song List</title>
        <meta name="description" content="Customize Song" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="bg-[#222157] rounded-[5px] pl-[68px] pt-[44px] pb-[38px] flex items-center gap-[78px]">
          <div className="flex flex-col gap-[26px]">
            <img src="/icon/play.svg" alt="" />
            <div className="py-[10px] px-6 bg-[#FF6B30] rounded-[150px]">
              <span className="font-semibold text-[18px] leading-[27px]">
                05.03
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <p className="font-[Inter] font-semibold text-[42px] leading-[38px]">
              Ever Want
            </p>
            <div className="bg-[#363578] h-1"></div>
            <p className="font-[Inter] font-light text-[32px] leading-[38px]">
              Acoustic Pop, Anniversary, Engagement, Uplifting, Heartfelt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SongListAudio;
