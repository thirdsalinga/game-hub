import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react"; 
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    platstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    max: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={"10px"}>
      {" "}
      {platforms.map((platform, index) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={index} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
