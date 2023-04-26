import Link from 'next/link';

const Index = () => (
	<div>
		<h1>SSR Magician</h1>
		<Link href='/about'><button>About</button></Link> {/*client side routing */}
		{/* <a href = 'about'>About</a> //server side routing */}
	</div>
);

export default Index;