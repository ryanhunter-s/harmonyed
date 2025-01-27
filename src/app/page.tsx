import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { BtnUploadImg } from "./_components/btnuploadimg";
// import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
	const images = await db.query.posts.findMany({
		orderBy: (model, {desc}) => desc(model.id)
	});
	return (
		<div className="flex flex-wrap gap-4">
			{images.map((image, index) => (
				<div key={image.id} className="w-48">
					<img src={image.url} className="aspect-3/2 object-cover"/>
					<p>{image.name}</p>
				</div>
			))}
		</div>
	);
}

export default async function HomePage() {
	return (
		<main className="flex justify-center gap-4">
			<SignedOut>
				<div className="grid h-48 grid-cols-2 place-content-center">
					<p>Please Sign In Above</p>
				</div>
			</SignedOut>
			<SignedIn>
				<Images/>
				<BtnUploadImg/>
			</SignedIn>
		</main>
	);
}
