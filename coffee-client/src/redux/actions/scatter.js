import { namespace } from '../../constants/namespace';

export const storeEOSClient = (data) => ({
  type: namespace.SCATTER_STORE_EOS_CLIENT,
  data
});

export const storeIdentity = (data) => ({
  type: namespace.SCATTER_STORE_IDENTITY,
  data
});

export const storeScatter = (data) => ({
  type: namespace.SCATTER_STORE_SCATTER,
  data
});

export const scatterLogin = (data) => ({
  type: namespace.SCATTER_LOGIN,
  data
});

export const scatterLogout = (data) => ({
  type: namespace.SCATTER_LOGOUT,
  data
});

export const scatterUnavailable = (data) => ({
  type: namespace.SCATTER_UNAVAILABLE,
  data
});
