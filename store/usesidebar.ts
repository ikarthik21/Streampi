import { create } from 'zustand';

interface SideBarStore {
    collapse: boolean;
    onExpand: () => void;
    onCollapse: () => void;
};

export const useSidebar = create<SideBarStore>((set) => ({
    collapse: true,
    onExpand: () => set(() => ({ collapse: false })),
    onCollapse: () => set(() => ({ collapse: true })),
}));


