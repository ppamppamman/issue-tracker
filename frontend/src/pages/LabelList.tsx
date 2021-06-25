import ResponsiveLayout from 'components/common/ResponsiveLayout';
import styled from 'styled-components';


const LabelList = () => {
  return (
    <LabelListLayout>
      <NavigationBlock>
        <NavigationLayer>
          <NavigationList></NavigationList>
          <MilestoneList></MilestoneList>
        </NavigationLayer>
        <AddButton>+ 추가</AddButton>
      </NavigationBlock>
      <LabelListBlock>

      </LabelListBlock>
    </LabelListLayout>
  )
}

const LabelListLayout = styled(ResponsiveLayout)`
  background-color: #F7F7FC;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`

const NavigationBlock = styled.div`
  width: 1280px;
`

const NavigationLayer = styled.div``

const NavigationList = styled.div``

const MilestoneList = styled.div``

const AddButton = styled.button`
  width: 120px;
  height: 40px;

  align-items: center;
  padding: 0px 16px;

  border: none;
  border-radius: 11px;
  color: #fff;
  background-color: #007AFF;
`

const LabelListBlock = styled.div`
  width: 1280px;
  background-color: #fff;
  border: 1px solid #D9DBE9;
  border-radius: 16px;
`

export default LabelList
