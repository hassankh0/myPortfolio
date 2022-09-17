export default class Person {
  constructor(private fname: string,
    private lname: string,
    private email: string,
    private phone: string,
    private linkedin: string,
    private github: string,
    private facebook: string,
    private instagram: string,
    private address: string,
    private about: string,
    private experiences: Experience[],
    private skills: Skill[],
    private educations: Education[],
    private certificates: Certificate[],
    private projects: Project[],
    private interests: string[]) { }

  public getFName = () => {
    return this.fname;
  }
  public getLName = () => {
    return this.lname;
  }
  public getEmail = () => {
    return this.email;
  }
  public getPhone = () => {
    return this.phone;
  }
  public getLinkedin = () => {
    return this.linkedin;
  }
  public getInstagram = () => {
    return this.instagram;
  }
  public getGitHub = () => {
    return this.github;
  }
  public getFacebook = () => {
    return this.facebook;
  }
  public getAddress = () => {
    return this.address;
  }
  public getAbout = () => {
    return this.about;
  }
  public getExperiences = () => {
    return this.experiences;
  }
  public getSkills = () => {
    return this.skills;
  }
  public getEducations = () => {
    return this.educations;
  }
  public getCertificates = () => {
    return this.certificates;
  }
  public getProjects = () => {
    return this.projects;
  }
  public getInterests = () => {
    return this.interests;
  }

}

class Experience {
  constructor(private type: string,
    private companyName: string,
    private cityName: string,
    private cityZip: number,
    private dateStart: Date,
    private dateEnd: Date,
    private present: boolean,
    private description: string,
    private skills: Skill[]) { }

  public getType = () => {
    return this.type;
  }
  public getCompanyName = () => {
    return this.companyName;
  }
  public getCityName = () => {
    return this.cityName;
  }
  public getCityZip = () => {
    return this.cityZip;
  }
  public getDateStart = () => {
    return this.dateStart;
  }
  public getDateEnd = () => {
    return this.dateEnd;
  }
  public getPresent = () => {
    return this.present;
  }
  public getDesription = () => {
    return this.description;
  }
  public getSkills = () => {
    return this.skills;
  }
}

class Skill {
  constructor(private skillType: string, // can be a Language or a soft Skill
    private skillName: string,
    private avg: number,
    private logo: string) { }

  public getSkillType = () => {
    return this.skillType
  }
  public getSkillName = () => {
    return this.skillName
  }
  public getAVG = () => {
    return this.avg;
  }
  public getLogo = () => {
    return this.logo;
  }
}

class Certificate {
  private title: string;
  private companyName: string;
  private date: Date;
}

class Project {
  private title: string;
  private type: string;
  private url: string;
  private photos: string[];
  private description: string[];
}

class Education {
  constructor(private formation: string,
    private companyName: string,
    private cityName: string,
    private cityZip: number,
    private dateStart: Date,
    private dateEnd: Date,
    private present: boolean,
    private description: string,
    private skills: Skill[]) { }

  public getFormation = () => {
    return this.formation;
  }
  public getCompanyName = () => {
    return this.companyName;
  }
  public getCityName = () => {
    return this.cityName;
  }
  public getCityZip = () => {
    return this.cityZip;
  }
  public getDateStart = () => {
    return this.dateStart;
  }
  public getDateEnd = () => {
    return this.dateEnd;
  }
  public getPresent = () => {
    return this.present;
  }
  public getDesription = () => {
    return this.description;
  }
  public getSkills = () => {
    return this.skills;
  }
}
