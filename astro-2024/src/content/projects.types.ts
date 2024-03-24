import type { IconName } from "../components/Tag.types";

export type Project = {
  name: string;
  link: string;
  image: string;
  description: string;
  stack: IconName[];
};

export type OpenSourceProject = {
  name: string;
  link: string;
  iconName?: IconName;
  image?: string;
};
