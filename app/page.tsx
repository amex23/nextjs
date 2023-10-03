import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {

	
	
	
  return (
    <main className="">
		<h1>Hello Word</h1>
		<Link href="/users">Users</Link>
		<ProductCard/>
	</main>
  )
}
