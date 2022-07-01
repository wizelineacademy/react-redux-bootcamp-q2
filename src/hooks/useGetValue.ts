export const useGetValue = () => {
  function getValueAt<T>(data: Array<T>, index: number) {
    return data[index];
  }

  return { getValueAt };
};
