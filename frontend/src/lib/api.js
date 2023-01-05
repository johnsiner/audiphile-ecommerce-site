export const getHeadphones = async () => {
   const response = await fetch('/shop/headphones');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch headphones');
   }
   return data;
};

export const getEarphones = async () => {
   const response = await fetch('/shop/earphones');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch earphones');
   }
   return data;
};

export const getSpeakers = async () => {
   const response = await fetch('/shop/speakers');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch speakers');
   }
   return data;
};

export const getCategory = async (category) => {
   const response = await fetch('/shop/' + category);
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch speakers');
   }
   return data;
};
