// Login.js
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './login.css'
// import { login } from '../actions/userActions'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await dispatch(login(email, password))
      navigate('/')
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-primary-green text-white rounded-lg hover:bg-dark-green"
        >
          Log In
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-sm mt-4">
        Don't have an account?{' '}
        <Link to="/sign-up" className="text-primary-green hover:text-dark-green">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default Login