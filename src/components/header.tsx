import { Sun } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import Github from "./icons/github"

export default function Header() {
	return (
		<nav className="flex justify-between items-center">
			<Link href="/">
				<Image src="/logo.svg" alt="Vercel Logo" width={131} height={64} priority />
			</Link>
			<div className="flex items-center gap-5">
				<Button variant="ghost" size="icon">
					<Sun />
				</Button>
				<Button className="flex gap-3">
					Log in
					<Github />
				</Button>
			</div>
		</nav>
	)
}