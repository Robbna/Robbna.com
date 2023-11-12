export interface IProjectVO {
  title: string;
  url: string;
  description: string;
  highlighted: boolean;
  imageUrl: string;
}

export interface ISocialVO {
  name: string;
  icon: string;
  url: string;
  svg: string;
}

export interface ISkillVO {
  name: string;
  url: string;
  icon: string;
}

export interface IData {
  about: string;
  age: number;
  description: string;
  name: string;
  email: string;
  pictureUrl: string;
  bannerUrl: string;
  projects: IProjectVO[];
  socials: ISocialVO[];
  skills: ISkillVO[];
}
