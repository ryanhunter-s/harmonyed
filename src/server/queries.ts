import "server-only";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";
import { posts } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getImages() {
	// const user = auth();
	// if(!user.userId) throw new Error("Unauthorized");
	// where: (model, { eq }) => eq(model.userId, user.userId),
	const images = await db.query.posts.findMany({
		orderBy: (model, {desc}) => desc(model.id),
	});
	return images;
}

export async function getImage(id: number) {
	// const user = auth();
	// if(user.userId !== auth().userId) throw new Error("Unauthorized");

	const image = await db.query.posts.findFirst({
		where: (model, { eq }) => eq(model.id, id),
	});

	if(!image) throw new Error("Image not found");

	// if(image.userId !== user.userId) throw new Error("Unauthorized");

	return image;
}

export async function deleteImage(id: number) {
	const user = auth();
	if (!user.userId) throw new Error("Unauthorized");
	await db.delete(posts).where(and(eq(posts.id, id), eq(posts.userId, user.userId)));
	redirect("/");
}