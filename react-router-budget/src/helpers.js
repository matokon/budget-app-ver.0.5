
export const fetchData = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const deleteData = ({key}) => {
  return localStorage.removeItem(key);
}