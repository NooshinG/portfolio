export interface aboutMeType {
  aboutme: string;
  details: {
    year: string;
    title: string;
    desc: string;
  }[];
}

export interface myWorksType {
  description: string;
  details: {
    id: string;
    title: string;
    image: string;
    desc: string;
    github: string;
    demo: string;
  }[];
}
