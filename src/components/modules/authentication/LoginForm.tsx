import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          
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
              placeholder="Enter your password"
              className="mt-1"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <Button className="w-full">
            Login
          </Button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}