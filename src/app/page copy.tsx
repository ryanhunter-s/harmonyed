import { SignedIn, SignedOut } from "@clerk/nextjs";
import { BtnUploadImg } from "./_components/btnuploadimg";
import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
import { checkRole, getRole } from "~/utils/roles";


export const dynamic = "force-dynamic";

async function Images() {
	const role = getRole();
	const images = await getImages();
	return (
		<div className="flex flex-wrap justify-center gap-4">
			{images.map((image) => (
				<div key={image.id} className="w-48">
					<Link href={`/image/${image.id}`}>
						<Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192} alt={image.name} className="aspect-square object-cover"/>
					</Link>
					<p>{image.name}</p>
				</div>
			))}
		</div>
	);
}

export default async function HomePage() {
	return (
		<main className="">
			<SignedOut>
				<div className="grid h-48 grid-cols-2 place-content-center">
					<p>Please Sign In Above</p>
				</div>
			</SignedOut>
			<SignedIn>
				<div className="flex justify-center gap-4">
					<BtnUploadImg/>
				</div>
				<div className="px-4 pt-5">
					<Images/>
				</div>
			</SignedIn>
		</main>
	);
}
