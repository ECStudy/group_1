export const enum TreeItemType {
	Tab,
	Group,
	Slot,
};

export type Group = {
	readonly type: TreeItemType.Group;
	readonly id: string;
	colorId: string;
	label: string;
	children: Tab[];
	collapsed: boolean;
};

export type Tab = {
	readonly type: TreeItemType.Tab;
	groupId: string | null;
	id: string;
};

export type Slot = {
	type: TreeItemType.Slot;
	index: number;
	groupId: string | null;
};