import { Icon, IconProps } from "@chakra-ui/react";

export function BgWavesSpecialists(props: IconProps) {
  return (
    <Icon
      mt={{ base: "4", md: "-150" }}
      width="100%"
      height="50%"
      fill="#1A202C"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      {...props}
    >
      <path
        fill-opacity="1"
        d="M0,192L80,208C160,224,320,256,480,256C640,256,800,224,960,208C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </Icon>
  );
}
