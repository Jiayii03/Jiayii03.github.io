import { ReactNode } from 'react'
import '../App.css'

interface Props {
    // ReactNode is a special type that allows us to pass html content to the component
    children: ReactNode; 
}

export const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-success" role="alert">
        {children}
    </div>
  )
}
