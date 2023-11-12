interface LocalizationValueObject {
  elements: {
    project: string;
    footer: string;
    navbar: {
      about: string;
      home: string;
      projects: string;
      socials: string;
      skills: string;
    };
    form: {
      name: string;
      message: string;
      subject: string;
      submit: string;
    };
  };
  projects: {
    muggleApi: {
      description: string;
    };
    robbnaWebsite: {
      description: string;
    };
    robbnaWebsiteApi: {
      description: string;
    };
  };
  robb: {
    about: string;
    description: string;
  };
  socials: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface ILocalizations {
  id: string;
  data: LocalizationValueObject;
}
