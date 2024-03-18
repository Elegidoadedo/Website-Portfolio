import UserIcon from "../assets/icons/UserIcon.astro";
import type { IconName } from "./SectionTitle.types";
export const sectionIcon = (iconName: IconName) => {
  switch (iconName) {
    case "user":
      return UserIcon;
  }
};
