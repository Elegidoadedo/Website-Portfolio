import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Wrapper,
  LeftHalf,
  RightHalf,
  ImgWrapper,
  BackgroundAnimation,
  GridItem,
  Title,
  SubTitle,
  Image,
  MobileFooter,
  FlexRow,
} from "./App.styles";

import thingiverseImg from "./assets/thingiverse.png";
import instagramImg from "./assets/instagram.png";
import githubImg from "./assets/github.png";
import githubReverseImg from "./assets/github-reverse.png";
import linkedinLogo from "./assets/linkedin_logo.png";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const isLaptopUp = useMediaQuery("(min-width: 1024px)");
  console.log(isLaptopUp);
  const isMaker = mousePos.x < 30;
  const isCoder = mousePos.x > 30;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: Math.floor((event.clientX / window.innerWidth) * 100),
        y: Math.floor((event.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <GridItem
        row={{ initial: 3, desktop: 4 }}
        column={{ initial: "2/4" }}
        isSelected={isMaker}
      >
        <Title>MAKER</Title>
      </GridItem>
      {isLaptopUp ? (
        <>
          <GridItem
            row={{ initial: "5/7" }}
            column={{ initial: "2/4" }}
            isSelected={isMaker}
            isHidden
          >
            <SubTitle isSelected={isMaker}>
              3d Maker who love printing and creating things
            </SubTitle>
          </GridItem>
          <GridItem
            row={{ initial: "6/7" }}
            column={{ initial: "2" }}
            isSelected={isMaker}
            isHidden
          >
            <a href="https://www.thingiverse.com/elegidoadedo/designs">
              <Image alt="thingiverseLink" src={thingiverseImg} />
            </a>
          </GridItem>
          <GridItem
            row={{ initial: "6/7" }}
            column={{ initial: 3 }}
            isSelected={isMaker}
            isHidden
          >
            <a href="https://www.instagram.com/stories/highlights/18259807864185887/?hl=es">
              <Image alt="instagramLink" src={instagramImg} />
            </a>
          </GridItem>
        </>
      ) : null}

      <GridItem
        row={{ initial: 3, desktop: 4 }}
        column={{ initial: "8/-1" }}
        isSelected={isCoder}
      >
        <Title isSelected={isCoder}>&#60;CODER &#62;</Title>
      </GridItem>
      {isLaptopUp ? (
        <>
          <GridItem
            row={{ initial: "5/6" }}
            column={{ initial: "8/10" }}
            isSelected={isCoder}
            isHidden
          >
            <SubTitle isSelected={isCoder}>
              Front end developer who writes clean, elegant and efficient code.
            </SubTitle>
          </GridItem>
          <GridItem
            row={{ initial: "6/7" }}
            column={{ initial: 8 }}
            isSelected={isCoder}
            isHidden
          >
            <a href="https://github.com/Elegidoadedo">
              <Image alt="githubLink" src={githubImg} />
            </a>
          </GridItem>
          <GridItem
            row={{ initial: "6/7" }}
            column={{ initial: 9 }}
            isSelected={isCoder}
            isHidden
          >
            <a href="https://github.com/Elegidoadedo">
              <Image alt="linkedinLogo" src={linkedinLogo} />
            </a>
          </GridItem>
        </>
      ) : null}

      <BackgroundAnimation mousePos={mousePos.x}>
        <ImgWrapper>
          <LeftHalf />
          <RightHalf position={mousePos.x} />
        </ImgWrapper>
      </BackgroundAnimation>
      {!isLaptopUp ? (
        <MobileFooter>
          <SubTitle>3d Maker who love printing and creating things</SubTitle>
          <FlexRow>
            <a href="https://www.thingiverse.com/elegidoadedo/designs">
              <Image alt="thingiverseLink" src={thingiverseImg} />
            </a>
            <a href="https://www.instagram.com/stories/highlights/18259807864185887/?hl=es">
              <Image alt="instagramLink" src={instagramImg} />
            </a>
          </FlexRow>
          <SubTitle isSelected={isCoder}>
            Front end developer who writes clean, elegant and efficient code.
          </SubTitle>
          <FlexRow>
            <a href="https://github.com/Elegidoadedo">
              <Image alt="githubLink" src={githubReverseImg} />
            </a>
            <a href="https://www.linkedin.com/in/jose-morales/">
              <Image alt="linkedinLogo" src={linkedinLogo} />
            </a>
          </FlexRow>
        </MobileFooter>
      ) : null}
    </Wrapper>
  );
};

export default App;
