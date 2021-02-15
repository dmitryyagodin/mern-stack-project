class IssueFilter extends React.Component {
  render() {
    return <div>Placeholder for IssueFilter</div>
  };
}

class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.issue_title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const rowStyle = {border: "1px solid silver", padding: 4};
    return (
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow rowStyle={rowStyle} issue_id={1} 
             issue_title="Error in console when clicking Add"/>
          <IssueRow rowStyle={rowStyle} issue_id={2}
             issue_title="Missing bottom border on panel"/>
        </tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>Placeholder for IssueAdded</div>
  };
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>IssueTracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  };
}

ReactDOM.render(<IssueList />, document.getElementById('root'));