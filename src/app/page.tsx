import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
	
	return (
		<main className="flex justify-center">
			<Link href="/dashboard/">
				<h1>go to dashboard</h1>
			</Link>
		</main>
	);
}
