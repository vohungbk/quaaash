export type HomeData = {
  newUsers: UserId[];
  premiumUsers: UserId[];
  recommendedUsers: [];
  topAudios: TopAudio[];
  topVideos: TopAudio[];
};

export type TopAudio = {
  thumbnail: string;
  url: string;
  price: number;
  userId: UserId;
  name: string;
};

export type UserId = {
  name: string;
  biography: string;
  profilePicture: string;
  description: string;
  price: number;
  time: number;
};

export type Artists = {
  name: string;
  profilePicture: string;
  gender: string;
  description: string;
  biography: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  twitter: string;
  category: string[];
  isPremiumAccount: boolean;
  ratings: number;
  price: number;
  time: number;
};
