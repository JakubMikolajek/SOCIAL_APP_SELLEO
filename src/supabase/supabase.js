import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto"
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://jvneoinifrjqltrrxesb.supabase.co"
const supabesKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bmVvaW5pZnJqcWx0cnJ4ZXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NTAwOTYsImV4cCI6MTk4MjEyNjA5Nn0.YYIUu3UKyNAxEh5Y5_elQxkV3uWHvu3aOjDS4wmyqvg"


export const client = createClient(supabaseUrl, supabesKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});