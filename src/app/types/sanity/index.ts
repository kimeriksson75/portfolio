export type SanityDocument<T extends { _type: string }> = {
	_createdAt: string;
	_rev: string;
	_updatedAt: string;
	_id: string;
} & T;
