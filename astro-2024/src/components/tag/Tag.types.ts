export type IconName =
  | "WORDPRESS"
  | "NODEJS"
  | "TELEGRAM"
  | "CLOUDINARY"
  | "ASTRO"
  | "TAILWIND"
  | "TOOLJET";

export type Props = {
  iconName: IconName;
};

export type TagInfo = {
  Icon: (_props: Record<string, unknown>) => JSX.Element;
  name?: string;
  className?: string;
};

export type TagMapper = {
  [key in IconName]: TagInfo;
};
