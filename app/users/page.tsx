import React from 'react'

interface User {
	id: number;
	name: string;
	email: string;
}

const UsersPage = async () => {
  const res = await fetch(
	'https://jsonplaceholder.typicode.com/users', 
	{ cache: 'no-store' }); 
  const users: User[] = await res.json();

  const { Client } = require('@notionhq/client');

	const notion = new Client({ auth: process.env.NOTION_API_KEY });
	
	(async () => {
	  const pageId = 'fe3ee4c49a3e47869d489a3450077fd7';
	  const response = await notion.pages.retrieve({ page_id: pageId });
	  console.log(response);
	})();

  return (
	<main className=''>
		<h1>
			Users
		</h1>
		{/* <p>{new Date().toLocaleTimeString()}</p> */}
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
			{users.map(user => 
			<tr key={user.id}>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr> )}
			</tbody>
			
		</table>
	</main>
  )
}
export default UsersPage