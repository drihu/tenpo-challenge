function formatPrice(price) {
  if (price >= 1000) {
    const formattedPrice =
      '$ ' + price.toString().slice(0, -3) + '.' + price.toString().slice(-3);
    return formattedPrice;
  } else {
    const formattedPrice = '$ ' + price;
    return formattedPrice;
  }
}

export { formatPrice };
