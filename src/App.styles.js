import styled from "styled-components";
import sepiaImg from "./assets/foto-sepia.jpg";

export const Wrapper = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: grid;

  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;
export const GridItem = styled.div`
  grid-row: ${({ row }) => row.initial};
  grid-column: ${({ column }) => column.initial};
  z-index: 1;
  @media (min-width: 1024px) {
    grid-row: ${({ row }) => (row.desktop ? row.desktop : row.initial)};
    grid-column: ${({ column }) =>
      column.desktop ? column.desktop : column.desktop};
    color: ${({ isSelected }) => (isSelected ? "black" : "grey")} !important;
    opacity: ${({ isSelected, isHidden }) =>
      isHidden && !isSelected ? "0" : "1"};
    transition: color 0.8s linear, opacity 1.5s linear;
  }
`;
export const BackgroundAnimation = styled.div`
  grid-row: 3/-1;
  grid-column: 2/9;
  width: 100%;
  z-index: 0;

  @media (min-width: 1024px) {
    grid-row: 2/-1;
    grid-column: 3/6;
    transform: translateX(
      ${({ mousePos }) =>
        mousePos > 60 ? "-80px" : mousePos < 40 ? "80px" : 0}
    );
    transition: 0.7s ease;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h4`
  margin: 0;
  font-size: 24px;
  text-align: center;
  color: white;
  max-width: 80%;
  @media (min-width: 1024px) {
    display: block;
    font-size: 18px;
    text-align: left;
    color: inherit;
  }
`;

export const ImgWrapper = styled.section`
  height: 400px;
  width: 300px;
  position: relative;
  @media (min-width: 1024px) {
    height: 600px;
    width: 780px;
  }
`;

export const LeftHalf = styled.div`
  background: url(${sepiaImg}) no-repeat right center;
  background-size: 300px 400px;
  width: 300px;
  top: 0;
  position: absolute;
  height: 400px;
  @media (min-width: 1024px) {
    background-size: 780px 600px;
    height: 600px;
    width: 780px;
  }
`;
export const RightHalf = styled.div`
  background: url(${sepiaImg}) no-repeat left center;
  filter: grayscale(100%);
  /* filter: brightness(0.5); */

  background-size: 300px 400px;
  position: absolute;
  top: 0;
  margin: auto;
  height: 400px;
  max-width: 300px;
  width: 50%;
  @media (min-width: 1024px) {
    background-size: 780px 600px;
    width: ${({ position }) => position}%;
    height: 600px;
    max-width: 780px;
  }
`;

export const Image = styled.img`
  width: 82px;
  heihgt: 82px;
  aspect-ratio: 2/2;

  @media (min-width: 1024px) {
    width: 82px;
    heihgt: 82px;
  }
`;

export const MobileFooter = styled.section`
  background-color: black;
  width: 100%;
  height: 100%;
  grid-row: 6/-1;
  grid-column: 1/12;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-items: center;
  gap: 24px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-evenly;
`;
