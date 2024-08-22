import {create} from 'zustand';
import axios from 'axios';

interface UserData {
  id: number;
  name: string;
  username:string;
  email: string;
}

interface StoreState {
  userData: UserData[] | null;
  loading: boolean;
  error: Error | null;
  fetchUserData: () => Promise<void>;
}

const useUserStore = create<StoreState>((set) => ({
  userData: null,
  loading: false,
  error: null,

  fetchUserData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      set({ userData: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useUserStore;
