import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
   slug: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   shortName: {
      type: String,
      required: true,
   },
   image: {
      mobile: {
         type: String,
         required: true,
      },
      tablet: {
         type: String,
         required: true,
      },
      desktop: {
         type: String,
         required: true,
      },
   },
   category: {
      type: String,
      required: true,
   },
   categoryImage: {
      mobile: {
         type: String,
         required: true,
      },
      tablet: {
         type: String,
         required: true,
      },
      desktop: {
         type: String,
         required: true,
      },
   },
   new: {
      type: Boolean,
   },
   price: {
      type: Number,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   features: {
      type: String,
      required: true,
   },
   includes: [
      {
         quantity: {
            type: Number,
            required: true,
         },
         item: {
            type: String,
            required: true,
         },
      },
   ],
   gallery: {
      first: {
         type: Object,
         required: true,
      },
      second: {
         type: Object,
         required: true,
      },
      third: {
         type: Object,
         required: true,
      },
   },
   others: [
      {
         slug: {
            type: String,
            required: true,
         },
         name: {
            type: String,
            required: true,
         },
         image: {
            type: Object,
            required: true,
         },
      },
   ],
});

export default mongoose.model('Product', productSchema);
