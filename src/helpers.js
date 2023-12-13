export const choice = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };
  
  export const remove = (items, item) => {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return undefined;
  };