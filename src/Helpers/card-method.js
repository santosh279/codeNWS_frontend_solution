const trimDetails = (text, count) => {
  const result = text.slice(0, count) + (text.length > count ? '...' : '');
  return result;
};

export { trimDetails };
