import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { personalInfoSchema, PersonalInfoValues } from '@/lib/valiidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { resolve } from 'path'
import React from 'react'
import { ControllerFieldState,ControllerRenderProps, FieldValues, Form, useForm, UseFormStateReturn } from 'react-hook-form'


export default function PersonalInfoForm() {
    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            jobTitle: "",
            city: "",
            country: "",
            phone: "",
            email: "",
   }
})

return (
    <div className='max-w-xl mx-auto space-y-6'>
        <div className='space-y-1.5 text-center'>
        <h2 className='text-2xl font-semibold'>Personal info</h2>
        <p>Tell us about yourself.</p>
   </div>
       <Form {...form}>
        <form className='space-y-3'>
            <FormField
            control={form.control}
            name="photo"
        render={({ field: {value, ...fieldValues}}) => (
           <FormItem>
            <FormLabel>Your photo</FormLabel>
            <FormControl>
                <Input 
                {...fieldValues}
                />
            </FormControl>
           </FormItem>

        )}
             />
        </form>
       </Form> 
      
    </div>
  )
}
