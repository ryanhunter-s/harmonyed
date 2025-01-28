import { Roles } from '@/types/globals';
import { auth } from '@clerk/nextjs/server';

export const checkRole = (role: Roles) => {
	const { sessionClaims } = auth();
	return sessionClaims?.metadata.role === role;
}

export const getRole = () => {
	const { sessionClaims } = auth();
	if(!sessionClaims?.metadata.role) return 'member';
	return sessionClaims?.metadata.role;
}