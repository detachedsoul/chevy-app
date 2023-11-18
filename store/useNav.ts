import { create } from 'zustand';

interface MyState {
    isToggleOn: boolean;
    toggle: () => void;
}

const useNav = create<MyState>((set): MyState => ({
    isToggleOn: false,
    toggle: () => set((state: MyState): { isToggleOn: boolean; } => ({ isToggleOn: !state.isToggleOn })),
}));

export default useNav;
