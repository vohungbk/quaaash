import Api from '@services/httpClient';
import { Artists } from 'shared/type';

export type ArtistParams = {
  searchText?: string;
  category?: string;
};

export const searchArtists = async (params?: ArtistParams) => {
  try {
    const result = await Api.get('open/searchArtists', params).then(
      (res) => res.data.data.users as Artists
    );
    return result;
  } catch (error) {
    return error;
  }
};
