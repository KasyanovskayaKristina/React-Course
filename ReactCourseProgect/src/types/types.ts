export type Cards = {
  firstName: string;
  date: string;
  country: string;
  gender: string;
  avatar: Blob | MediaSource;
};

export default Cards;

export type Info = {
  active: boolean;
  SetActive: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | null;
};
