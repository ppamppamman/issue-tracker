import { useState, useEffect } from 'react';
import styled from 'styled-components';

import DropDown from 'components/common/DropDown';
import ArrowIcon from 'components/common/icons/ArrowIcon';
import Label from 'components/common/Label';

import API from 'lib/API/API';

const IssueManagerFilterInfo = {
  name: "담당자",
  header: "담당자 필터",
  alignment: "reverse",
  icon: ArrowIcon,
  elements: [
    {contents: "담당자가 없는 이슈", value: 0, options:{}},
    // {} 동적 생성
  ]
}

const IssueLabelFilterInfo = {
  name: "레이블",
  header: "레이블 필터",
  alignment: "reverse",
  icon: ArrowIcon,
  elements: [
    {contents: "레이블이 없는 이슈", value: 0, options:{}},
    {contents: "bug", value: 1, options:{color: "red"}},
    {contents: "documentation", value: 2, options:{color: "blue"}},
    // {} 동적 생성
  ]
}

const IssueMilestoneFilterInfo = {
  name: "마일스톤",
  header: "마일스톤 필터",
  alignment: "reverse",
  icon: ArrowIcon,
  elements: [
    {contents: "마일스톤이 없는 이슈", value: 0, options:{}},
    {contents: "마스터즈 코스", value: 1, options:{}},
    
    // {} 동적 생성
  ]
}

const IssueAuthorFilterInfo = {
  name: "작성자",
  header: "작성자 필터",
  alignment: "reverse",
  icon: ArrowIcon,
  elements: [
    {contents: "테스트 계정", value: 0, options:{}},
    // {contents: "마스터즈 코스", value: 1, options:{}},
    
    // {} 동적 생성
  ]
}

const IssueList = () => {
  const [issues, setIssues] = useState<any>([]);
  
  useEffect(() => {
    const fetchIssues = async () => {
      const result = await API.get.issues("is open");
      console.log("fetchIssues", result)
      setIssues(result.issueList);
    }
    fetchIssues();
  }, [])

  if (issues.length === 0) {return <></>}
  return (
    <IssueListLayout>
      <IssueListHeader>
        <IssueListCheckBoxLayer>
          <input type="checkbox" />
        </IssueListCheckBoxLayer>
        <IssueListButtonGroupLayer>
          <button> 열린 이슈 </button>
          <button> 닫힌 이슈 </button>
        </IssueListButtonGroupLayer>
        <IssueListFilterGroupLayer>
          <DropDown info={IssueManagerFilterInfo} />
          <DropDown info={IssueLabelFilterInfo} />
          <DropDown info={IssueMilestoneFilterInfo} />
          <DropDown info={IssueAuthorFilterInfo} />
        </IssueListFilterGroupLayer>
      </IssueListHeader>

      {Array(3).fill(true).map((each) => {
        return (
          <IssueListContents>
            <IssueListCheckBoxLayer>
              <input type="checkbox" />
            </IssueListCheckBoxLayer>
            <IssueListDetailInfomationLayer>
              <DetailInformationTitleArea>
                <DetailInformationTitle> 이슈 제목 </DetailInformationTitle>
                <Label type={"DEFAULT"} value={"레이블 이름"} />
              </DetailInformationTitleArea>
              <DetailInformationContents># 이슈 번호 ... </DetailInformationContents>
            </IssueListDetailInfomationLayer>
            <IssueListProfileLayer>
              profile img
            </IssueListProfileLayer>
          </IssueListContents>
        )
      })}
      {
        issues.map((issue) => {
          return (
            <IssueListContents>
            <IssueListCheckBoxLayer>
              <input type="checkbox" />
            </IssueListCheckBoxLayer>
            <IssueListDetailInfomationLayer>
              <DetailInformationTitleArea>
                <DetailInformationTitle> {issue.issueDTO.issueInfo.title} </DetailInformationTitle>
                <Label type={"DEFAULT"} value={"레이블 이름"} />
              </DetailInformationTitleArea>
              <DetailInformationContents>#{issue.issueDTO.issueInfo.issueId} </DetailInformationContents>
            </IssueListDetailInfomationLayer>
            <IssueListProfileLayer>
              <ProfileImg src={issue.issueDTO.userDTO.profileImage} />
            </IssueListProfileLayer>
          </IssueListContents>
          )
        })
      }
    </IssueListLayout>
  )
}

const IssueListLayout = styled.div`
  width: 100%;
  border: 1px solid #D9DBE9;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  
  & > div:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const IssueListHeader = styled.div`
  width: 100%;
  background: #F7F7FC;
  
  padding: 16px 32px;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid #D9DBE9;
  box-sizing: border-box;

  display: flex;
`;

const IssueListContents = styled.div`
  width: 100%;
  background-color: white;
  
  padding: 16px 32px;
  box-sizing: border-box;
  
  display: flex;

  & + & {
    border-top: 1px solid #D9DBE9;
  } 
  
`;

const IssueListLayer = styled.div`
  display: flex;
`;
const IssueListCheckBoxLayer = styled(IssueListLayer)`
  margin-right: 30px;
  align-items: center;
`;
const IssueListButtonGroupLayer = styled(IssueListLayer)`
  
`;
const IssueListFilterGroupLayer = styled(IssueListLayer)`
  margin-left: auto;
`;

const IssueListDetailInfomationLayer = styled(IssueListLayer)`
  flex-direction: column;
  width: 100%;
`

const DetailInformationTitle = styled.span`
  font-weight: 700;
  font-size: 1.89rem;
  margin-right: 10px;
`;

const DetailInformationTitleArea = styled(IssueListLayer)`
  margin-top: 10px;
`

const DetailInformationContents = styled(IssueListLayer)`
  margin-top: 10px;
`;

const IssueListProfileLayer = styled(IssueListLayer)`
  margin-left: auto;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default IssueList;