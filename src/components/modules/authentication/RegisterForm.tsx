import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

export default function RegisterFrom() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an account
        </h2>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="Create a password"
              className="mt-1"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              placeholder="Confirm your password"
              className="mt-1"
            />
          </div>

          {/* Button */}
          <Button className="w-full">
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}