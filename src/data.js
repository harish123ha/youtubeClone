export const viewsFix = (views) => {
  if (views >= 1000000) {
    return Math.floor(views / 1000000) + "M";
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + "k";
  } else {
    return views;
  }
};

export const apikey = "AIzaSyCKtNFQbfmHRF4VcqfXmklFnHiJJp7pkMk";
