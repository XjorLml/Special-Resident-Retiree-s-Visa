import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/client";

export type UserRole = 'admin' | 'applicant'

export async function getUserRole(userRole: UserRole){
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error || !user) {
        redirect('/login')
    }
    return user
}