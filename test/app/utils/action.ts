'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const create = async (prevState: any, formData: any) => {
    const data = Object.fromEntries(formData)
    // revalidatePath('/info')
    // redirect('/')
    await console.log(data)
    return "created"
}