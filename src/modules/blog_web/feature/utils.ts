export interface Payload {
  title: string;
  description: string;
  image: string;
  imageTitle: string;
  linkText: string;
  date: string;
}
interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  imageTitle: string;
  linkText: string;
  date: string;
}
export interface mainPayload {
  total: number;
  items: Item[];
}
