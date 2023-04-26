import Link from 'next/link';

const Robots = (props) => {
	return (
		<div>
			<h1>Robots</h1>
			<Link href='/'>
				<button>Home</button>
			</Link>
			<div>
				{
					props.robots.map(robot=> (
						<li key= {robot.id}>
							<Link href={`robots/${robot.id}`} legacyBehavior>
								<a>{robot.name}</a>
							</Link>
						</li>
					))
				}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log(data);
	return {
		props: {robots: data}
	}
}

export default Robots;