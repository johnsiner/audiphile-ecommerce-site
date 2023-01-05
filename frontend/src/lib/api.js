export const getHeadphones = async () => {
   const response = await fetch('http://192.168.43.166:5000/shop/headphones');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch headphones');
   }
   return data;
};

export const getEarphones = async () => {
   const response = await fetch('http://192.168.43.166:5000/shop/earphones');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch earphones');
   }
   return data;
};

export const getSpeakers = async () => {
   const response = await fetch('http://192.168.43.166:5000/shop/speakers');
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch speakers');
   }
   return data;
};

export const getCategory = async (category) => {
   const response = await fetch('http://192.168.43.166:5000/shop/' + category);
   const data = await response.json();
   if (!response.ok) {
      throw new Error(data.message || 'Could not fetch speakers');
   }
   return data;
};
