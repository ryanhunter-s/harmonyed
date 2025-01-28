import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
	const idAsNumber = Number(props.photoId);
	if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

	const image = await getImage(idAsNumber);

	const userInfo = await clerkClient.users.getUser(image.userId);
	return (
		<div className="flex h-full min-w-0 text-dark bg-white">
			<div className="w-full max-w-50 overflow-hidden">
				<img src={image.url} className="object-cover" width="100%" height="100%" alt={image.name}/>
			</div>
			<div className="w-full max-w-50 border-l">
				<div className="border-b p-2 text-xl">{image.name}</div>

				<div className="p-2">
					<div>Uploaded By:</div>
					<div>{userInfo.fullName}</div>
				</div>

				<div className="p-2">
					<div>Created On:</div>
					<div>{image.createdAt.toLocaleDateString()}</div>
				</div>

				<div className="p-2">
					<form action={async () => {
						"use server";
						await deleteImage(idAsNumber);
					}}>
						<button className="bg-red-600 p-2 rounded-md text-white">Delete</button>
					</form>
				</div>
			</div>
		</div>
	);
}