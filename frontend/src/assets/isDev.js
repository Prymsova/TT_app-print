const isDev = () => {
  return Boolean(process.env.NODE_ENV === 'development')
};

export default isDev;