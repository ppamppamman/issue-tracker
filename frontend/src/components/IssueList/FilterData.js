const FilterData = {
  "IssueManagerFilterInfo": {
    "name": "담당자",
    "header": "담당자 필터",
    "alignment": "reverse",
    "icon": "ArrowIcon",
    "elements": [
      {"contents": "담당자가 없는 이슈", "value": 0, "options":{}}
    ]
  },
  "IssueLabelFilterInfo": {
    "name": "레이블",
    "header": "레이블 필터",
    "alignment": "reverse",
    "icon": "ArrowIcon",
    "elements": [
      {"contents": "레이블이 없는 이슈", "value": 0, "options":{}},
      {"contents": "bug", "value": 1, "options":{"color": "red"}},
      {"contents": "documentation", "value": 2, "options":{"color": "blue"}}
    ]
  },
  "IssueMilestoneFilterInfo": {
    "name": "마일스톤",
    "header": "마일스톤 필터",
    "alignment": "reverse",
    "icon": "ArrowIcon",
    "elements": [
      {"contents": "마일스톤이 없는 이슈", "value": 0, "options":{}},
      {"contents": "마스터즈 코스", "value": 1, "options":{}}
    ]
  },
  "IssueAuthorFilterInfo": {
    "name": "작성자",
    "header": "작성자 필터",
    "alignment": "reverse",
    "icon": "ArrowIcon",
    "elements": [
      {"contents": "테스트 계정", "value": 0, "options":{}}
    ]
  },
  "IssueCategoryFilterInfo": {
    "name": "필터",
    "header": "이슈 필터",
    "icon": "ArrowIcon",
    "elements": [
      {"contents": "열린 이슈", "value": "OPENED"},
      {"contents": "내가 작성한 이슈", "value": "WRITTEN"},
      {"contents": "나에게 할당된 이슈", "value": "ASSIGNED"},
      {"contents": "내가 댓글을 남긴 이슈", "value": "REPLIED"},
      {"contents": "닫힌 이슈", "value": "CLOSED"}
    ]
  }
};

export default FilterData;