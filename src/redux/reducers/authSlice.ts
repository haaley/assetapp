import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  {
    id: '1',
    email: 'user1',
    firstName: 'haaley',
    lastName: 'silva',
    password: 'password1',
  },
];

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, {rejectWithValue}) => {
    const {email, password} = payload;
    const existingUser = users.find(
      (u: User) => u.email === email && u.password === password,
    );

    if (existingUser) {
      return existingUser;
    } else {
      throw rejectWithValue('Invalid username or password');
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, {rejectWithValue}) => {
    const {email, password, firstName, lastName} = payload;
    const existingUser = users.find((u: User) => u.email === email);

    if (existingUser) {
      throw rejectWithValue('Username already taken');
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      password,
      firstName,
      lastName,
    };

    users.push(newUser);
    return newUser;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  // Make API call to logout user
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(
        login.fulfilled,
        (state: AuthState, action: PayloadAction<User>) => {
          state.isLoggedIn = true;
          state.user = action.payload;
          state.error = null;
        },
      )
      .addCase(
        login.rejected,
        (state: AuthState, action: PayloadAction<string>) => {
          state.isLoggedIn = false;
          state.user = null;
          state.error = action.payload;
        },
      )
      .addCase(register.fulfilled, (state: AuthState) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      })
      .addCase(
        register.rejected,
        (state: AuthState, action: PayloadAction<string>) => {
          state.isLoggedIn = false;
          state.user = null;
          state.error = action.payload;
        },
      )
      .addCase(logout.fulfilled, (state: AuthState) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
