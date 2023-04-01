export type UserType = {
  fullName: string;
  email: string;
  img?: string;
  courses?: {
    name: string;
    img: string;
    percentage: string;
  }[];
  certificates?: {
    name: string;
    img: string;
  };
};

export type CoursesType = {
  name: string;
  img: string;
  percentage: string;
};
