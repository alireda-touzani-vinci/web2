interface User {
    id: number;
    name: string;
    age: number;
}
interface Users {
    users: User[];
  }

interface TitleProps {
    title: string;
}

interface FooterProps {
    text: string;
}

export type {User, Users,TitleProps, FooterProps};