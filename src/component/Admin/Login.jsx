"use client"

import "./LoginSignup.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  })

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUserData(JSON.parse(storedUser))
      setIsLoggedIn(true)
    }
  }, [])

  // Toggle between login and signup
  const toggleAuthMode = (e) => {
    e.preventDefault()
    setIsLogin((prev) => !prev)
    setFormData({ name: "", phone: "", email: "", password: "" }) // Reset form
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Extract only required fields based on the auth mode
    const submissionData = isLogin ? { email: formData.email, password: formData.password } : formData

    console.log("Submitting Data:", submissionData)

    try {
      const url = isLogin ? "http://localhost:5000/api/regLogin/login" : "http://localhost:5000/api/regLogin/register"

      const response = await axios.post(url, submissionData, {
        headers: { "Content-Type": "application/json" },
      })

      console.log("✅ Success:", response.data)

      if (isLogin) {
        // Store user data in state and localStorage
        const user = response.data
        setUserData(user)
        localStorage.setItem("user", JSON.stringify(user))
        setIsLoggedIn(true)
        alert("Login successful!")

        // Navigate based on user role
        if (user.role === "admin") {
          navigate("/seatlayout") // Navigate to admin dashboard
        } if(user.role === "user") {
          navigate("/") // Navigate to home page for non-admin users
        }
      } else {
        alert("Registration successful! Please log in.")
        setIsLogin(true) // Switch to login after signup
      }
    } catch (error) {
      console.error("❌ Authentication Error:", error.response?.data || error)
      alert(error.response?.data?.message || "Something went wrong.")
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserData(null)
    localStorage.removeItem("user")
    setFormData({ name: "", phone: "", email: "", password: "" })
    alert("Logged out successfully!")
    navigate("/") // Redirect to home page after logout
  }

  // If user is logged in, show welcome message and logout button
  if (isLoggedIn && userData) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h2>Welcome!</h2>
          <p className="welcome-message">Hello, {userData.name || userData.email}</p>
          <button className="auth-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  }

  // Otherwise show login/signup form
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="auth-btn" type="submit">
            {isLogin ? "Continue" : "Sign Up"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <a href="#" onClick={toggleAuthMode}>
            {isLogin ? " Sign up here" : " Login here"}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Auth