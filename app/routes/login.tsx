import { useState } from 'react'
import { Layout } from '~/components/layout'
import { FormField } from '~/components/form-field'

export default function Login() {
    const [action, setAction] = useState('login')
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  // Updates the form data when an input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({ ...form, [field]: event.target.value }))
  }

  return (
    
    <Layout>

      <div className="h-full justify-center items-center flex flex-col gap-y-4">
      <button
        onClick={() => setAction(action == 'login' ? 'register' : 'login')}
        className="absolute top-8 right-8 rounded-xl bg-black font-semibold bg-white px-3 py-2 transition duration-300 ease-in-out hover:bg-cyan-400 hover:-translate-y-1"
      >
        {action === 'login' ? 'Sign Up' : 'Sign In'}
      </button>
        <h2 className="text-5xl font-extrabold text-black-300">seyhey</h2>
        <p className="font-semibold text-cyan-400">
  {action === 'login' ? 'log in' : 'sign up'}
 </p>


        <form method="POST" className="rounded-2xl bg-gray-200 p-6 w-96">

        {action === 'register' && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                onChange={e => handleInputChange(e, 'firstName')}
                value={formData.firstName}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                onChange={e => handleInputChange(e, 'lastName')}
                value={formData.lastName}
              />
            </>
          )}
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={e => handleInputChange(e, 'password')}
          />
          <div className="w-full text-center">
          <button type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-gray px-3 py-2 text-black font-semibold transition duration-300 ease-in-out hover:bg-cyan-400 hover:-translate-y-1">
    {
        action === 'login' ? "Sign In" : "Sign Up"
    }
 </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}