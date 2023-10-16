export const setTitle = (text?: string): void => {
  const title = 'Divorce Predictor';
  document.title = text ? `${text} - ${title}` : title;
};
