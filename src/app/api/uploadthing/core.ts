import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: {maxFileSize: "4MB", maxFileCount: 10}})
		.middleware(async ({ req }) => {
		const user = auth();

		// eslint-disable-next-line @typescript-eslint/only-throw-error
		if (!user.userId) throw new UploadThingError("Unauthorized");

		return { userId: user.userId };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			await db.insert(posts).values({
				name: file.name,
				url: file.url,
				userId: metadata.userId
			});
			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;