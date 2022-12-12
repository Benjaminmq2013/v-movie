import "./index.css"

export interface params{
  title?: string
  icon?: string
  onClick?: () => void
  isDisabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

const App = (params:params):JSX.Element => {
  params = { ...{ className: '' }, ...params }

  return (
    <button className={`button ${ params.className } ${ params.isDisabled ? "btn-disabled" : "" } ` } onClick={params.onClick} type={params.type}  >        
      {params.icon && (
        <img
          src={params.icon}
          alt="icon"
          className="button_icon" 
          onClick={params.onClick}
        />
      )}

      {params.title}
    </button>
  );
}

export default App