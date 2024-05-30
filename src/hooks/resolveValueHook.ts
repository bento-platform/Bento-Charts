const useResolvedValue = <T,>(value: T | undefined, defaultValueHook: () => T): T => {
  const defaultValue = defaultValueHook();
  return value !== undefined ? value : defaultValue;
};

export default useResolvedValue;
