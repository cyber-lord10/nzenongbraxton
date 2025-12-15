import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
	theme: 'light' | 'dark' | 'system';
	setTheme: (theme: 'light' | 'dark' | 'system') => void;
	lastVisitedPage: string;
	setLastVisitedPage: (page: string) => void;
}

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			theme: 'system',
			setTheme: (theme) => set({ theme }),
			lastVisitedPage: '/',
			setLastVisitedPage: (page) => set({ lastVisitedPage: page }),
		}),
		{
			name: 'cyber-lord-storage',
		}
	)
);
