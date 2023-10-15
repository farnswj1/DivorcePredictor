export const setTitle = (text?: string) => {
  const title = 'Divorce Predictor';
  document.title = text ? `${text} - ${title}` : title;
};
