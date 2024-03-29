export default interface Tour {
  id?: string;
  tourName: string;
  location: string;
  tourImg: string;
  // tourDate: Date;
  tourDate: string;
  days: number;
  nights: number;
  price: number;
  participants: string[];
}
// featured: boolean;
// tourType: string;
