import { useState } from 'react';
import styled from 'styled-components';

import * as Icons from 'components/common/icons';

const Dropdown = ({ info }) => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleDropDownButtonClick = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  }

  return (
    <DropdownLayout alignment={info.alignment && info.alignment}>
      <DropdownButton onClick={handleDropDownButtonClick}> 
        {Icons[info.icon] && Icons[info.icon]()}<DropdownButtonText>{info.name}</DropdownButtonText>
      </DropdownButton>
      {isClicked && 
        <DropdownLayer isClicked={isClicked}>
          <DropdownHeader>{info.header}</DropdownHeader>
          <DropdownUnorderedList>
            {info.elements.map((element, i) => {
              return (
                <DropdownElement key={`dropdown-${i}`}>
                  {element.profileImage && <>
                      <DropdownGroup>
                        <DropdownImg src={element.profileImage} />
                        {element.name} 
                      </DropdownGroup>
                      <Radio type="radio" value={element.userId} name={`dropdown-profileImage-${info.name}`} />
                    </>
                  }
                  {element.labelId && <>
                      <DropdownGroup>
                        <DropdownLabel color={element.color} />
                        {element.title} 
                      </DropdownGroup>
                      <Radio type="radio" value={element.labelId} name={`dropdown-label-${info.name}`} />
                    </>
                  }
                  {/* {element.profileImage && <>
                      <DropdownGroup>
                        <DropdownImg src={element.profileImage} />
                        {element.name} 
                      </DropdownGroup>
                      <Radio type="radio" value={element.userId} name={`dropdown-profileImage-${info.name}`} />
                    </>
                  } */}
                  
                </DropdownElement>
              )
            })}
          </DropdownUnorderedList>
        </DropdownLayer>
      }
    </DropdownLayout>
  )
}

const DropdownLayout = styled.div<any>`
  display: flex;
  justify-content: ${({alignment}) => !alignment ? '': 'flex-end'};
`;

const DropdownButton = styled.button`
  padding: 0 30px;
  border: none;
  background-color: rgba( 255, 255, 255, 0 );
  cursor: pointer;
  /* background: #F7F7FC; */
  /* border: 1px solid #D9DBE9;
  border-radius: 11px 0px 0px 11px; */
  
  display: flex;
  flex-basis: 120px;
  align-items: center;

  span { margin-left: 10px; white-space:nowrap; }
`;

const DropdownLayer = styled.div<any>`
  width: 240px;
  position: absolute;
  margin-top: 45px;
  
  /* background: #D9DBE9; */
  border: 1px solid #D9DBE9;
  border-radius: 16px;

  ul {
    list-style-type: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
  }
`;

const DropdownHeader = styled.header`
  height: 48px;
  padding: 8px 16px;
  background-color: #D9DBE9;
  border-radius: 16px 16px 0 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownUnorderedList = styled.ul``;
const DropdownElement = styled.li`
  height: 44px;
  padding: 8px 16px;
  /* border: 1px solid #D9DBE9; */
  border-radius: 0 0 16px 16px;
  background-color: #FEFEFE;

  /* margin: -1px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #D9DBE9;
  }
`;

const DropdownImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;
const DropdownLabel = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${({color}) => color};
`;

const DropdownGroup = styled.div`
  height: 100%;
  
  display: flex;
  align-items: center;

  img { margin-right: 15px; }
  div { margin-right: 15px; }
`;

const DropdownButtonText = styled.span`
  cursor: pointer;
`;
const Radio = styled.input``

export default Dropdown;