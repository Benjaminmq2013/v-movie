import "./index.css"

export interface params{
  title?: string
  icon?: string
  onClick?: () => void
  isDisabled?: boolean
  className?: string
}

const App = (params:params):JSX.Element => {
  params = { ...{ className: '' }, ...params }

  return (
    <button className={`button ${ params.className } ${ params.isDisabled ? "btn-disabled" : "" } ` } onClick={params.onClick}  >        
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