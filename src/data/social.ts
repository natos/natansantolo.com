export interface SocialLink {
  name: string;
  identifier: string;
  url: string;
  icon: string;
  weight: number;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    identifier: 'linkedin',
    url: 'https://www.linkedin.com/in/natansantolo',
    icon: 'linkedin',
    weight: 3,
  },
];
