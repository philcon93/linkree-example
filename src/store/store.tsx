import create, { State } from 'zustand';

export interface AppState extends State {
    collapseId: string,
    setCollapseId: (id: string) => void
}

export const useStore = create<AppState>((set) => ({
    collapseId: '',
    setCollapseId: (id) => set({ collapseId: id }),
}))