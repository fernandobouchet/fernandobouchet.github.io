const getTheme = () => {
  let savedTheme = JSON.parse(localStorage.getItem('theme'));
  if (savedTheme !== null) {
    saveTheme(savedTheme);
    return savedTheme;
  } else {
    saveTheme('dark');
    return 'dark';
  }
};

const saveTheme = (theme) => {
  theme === 'dark'
    ? (document.documentElement.classList.add('dark'),
      localStorage.setItem('theme', JSON.stringify('dark')))
    : (document.documentElement.classList.remove('dark'),
      localStorage.setItem('theme', JSON.stringify('light')));
};

export { saveTheme, getTheme };
