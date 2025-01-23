import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export async function Images() {
	const images = await db.query.posts.findMany({
		orderBy: (model, {desc}) => desc(model.id)
	});
	return (
		<div className="flex flex-wrap gap-4">
			{images.map((image, index) => (
				<div key={image.id} className="w-48">
					<img src={image.url} />
					<p>{image.name}</p>
				</div>
			))}
		</div>
	);
}

export default async function HomePage() {
	return (
		<main className="flex justify-center">
			<SignedOut>
				<div className="h-full w-full text-2x1">please Sign In above</div>
			</SignedOut>
			<SignedIn>
				<Images/>
			</SignedIn>
		</main>
	);
}
