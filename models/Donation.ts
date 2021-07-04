import mongoose, { Document } from 'mongoose';

import { IDonation } from '@libs/types';

type DonationDocument = IDonation & Document;

const donationSchema = new mongoose.Schema<DonationDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Donation ||
  mongoose.model<DonationDocument>('Donation', donationSchema);
