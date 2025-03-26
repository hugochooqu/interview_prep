'use server'

import { db } from "@/firebase/admin";

export async function SignUp (params : SignUpParams) {
    const {uid, name, email} = params;

    try{
        const userRecord = await  db.collection('users').doc(uid).get()

        if (userRecord.exists) {
            return{
                success: false,
                message: 'User already exist, sign in'
            } 
        } else {
              await db.collection('user').doc(uid).set({name, email})  
        }

    } catch (error : any) {
        console.error('An error occured:', error)

        if (error.code === 'auth/email-already-exist'){
            return {
                success : false,
                message : 'Email already exist on another user. Sign in instead'
        }
        } return {
            success : false,
            message : 'Error registering user'
        }
    }
}