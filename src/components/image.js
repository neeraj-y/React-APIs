import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;
const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
  img {
    margin-right: 10px;
  }
`;
const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

const Icon = styled.img`
  height: calc(20vh - 50px);
  border-radius: 50px;
`;

function Image({ image }) {
  return (
    <ImgContainer>
      <Img src={image.source} />
      <ImgMeta>
        <ImgIcons>
          {image.isVideo ? <Icon src={image.urlVideo} /> : <Icon src={image.urlImage} />} {image.likes}
        </ImgIcons>
        <ImgIcons>
          {image.comments}
        </ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
}
export default Image;