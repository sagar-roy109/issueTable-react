const IssuList = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement(IssueTable, null));
};

const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueRow = props => {
  const rowstyle = {
    "border": "1px solid #000"
  };
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowstyle
  }, props.id), /*#__PURE__*/React.createElement("td", {
    style: rowstyle
  }, props.title));
};

const IssueTable = () => {
  const rowstyle = {
    "border": "1px solid #000"
  };
  const allIssues = [{
    id: 6,
    title: "Issue in CSS"
  }, {
    id: 7,
    title: "Issue in CSS"
  }, {
    id: 10,
    title: "Issue in CSS"
  }, {
    id: 11,
    title: "Issue in CSS"
  }];
  const allissueRow = allIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    style: rowstyle,
    key: issue.id,
    id: issue.id,
    title: issue.title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowstyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowstyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, allissueRow)));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(IssuList, null));