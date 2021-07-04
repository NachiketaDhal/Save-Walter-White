import mongoose, { Document } from 'mongoose';

import { IQuote } from '@libs/types';

type QuoteDocument = Document & IQuote;

const quoteSchema = new mongoose.Schema<QuoteDocument>({
  name: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Quote ||
  mongoose.model<QuoteDocument>('Quote', quoteSchema);
