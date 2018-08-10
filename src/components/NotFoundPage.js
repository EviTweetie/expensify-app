import React from 'react'
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
    {/*
    <a href="/">Go Home</a>
    This would cause a full page refresh with server request - we do not want that in client side routing
    */}
  </div>
)

export default NotFoundPage