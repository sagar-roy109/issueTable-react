const IssuList = () =>{
	return(
		<div>
			<IssueFilter/>
			<IssueTable/>
		</div>
	)
}


const IssueFilter = () =>{
	return(
		<h1>Issue Filter</h1>
	)
}


const IssueRow =(props) =>{
	const rowstyle = {"border": "1px solid #000"};
	return(
		<tr>
				<td style={rowstyle}>{props.id}</td>
				<td style={rowstyle}>{props.title}</td>
			</tr>
	)
}

const IssueTable = () =>{
	const rowstyle = {"border": "1px solid #000"};
	const allIssues = [
		{
			id: 6,
			title: "Issue in CSS"
		},
		{
			id: 7,
			title: "Issue in CSS"
		},
		{
			id: 10,
			title: "Issue in CSS"
		},
		{
			id: 11,
			title: "Issue in CSS"
		}
	]

	const allissueRow = allIssues.map(issue =>(
		<IssueRow style = {rowstyle} key={issue.id} id={issue.id} title={issue.title}/>
	))


	return(

	<div>
		<table  >
			<thead>
			<tr>
				<th style={rowstyle}>ID</th>
				<th style={rowstyle} >Title</th>
			</tr>
			</thead>
			<tbody>
				{
					allissueRow
				}
			</tbody>


		</table>
	</div>
	)

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<IssuList />
)
