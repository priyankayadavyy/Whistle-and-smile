export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  age: number;
  gender: string;
  address: {
    address: string;
    city: string;
    state: string;
  };
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface FormData {
  fullName: string;
  phone: string;
  hasTeethIssue: 'yes' | 'no' | null;
  consent: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  whistle: boolean;
  others: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
