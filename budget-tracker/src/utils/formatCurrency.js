const formatCurrency = (data) => {
  return new Intl.NumberFormat('id', { maximumSignificantDigits: 3 }).format(data);
};

export { formatCurrency };