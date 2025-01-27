"use client"
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function BtnUploadImg() {
	const router = useRouter();
	return (
		<div>
			<UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh()}}/>
		</div>
	);
}