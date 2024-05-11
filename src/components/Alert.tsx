import { ReactNode } from "react"

interface AlertProps {
    children: ReactNode,
    onClickBtn: () => void
}

const Alert = ( {children, onClickBtn} : AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClickBtn}></button>

    </div>
  )
}

export default Alert
