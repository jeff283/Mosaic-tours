export default interface Tour {
  id?: string;
  tourName: string;
  tourType: string;
  location: string;
  tourImg: string;
  tourDate: Date;
  days: number;
  nights: number;
  price: number;
  // featured: boolean;
  participants: string[];
}
