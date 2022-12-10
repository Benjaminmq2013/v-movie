import "./index.css"

export interface params{
  className?: string;
}

const App = (params:params):JSX.Element => {
  
  params = { ...{ className: 'container' }, ...params }

  return (
    <div className={`Header ${ params.className }`} >
      <img src="icons/header/logo.svg" alt="vMovie Logo" className="header-logo" />
      <span className="header-name" >vMovies</span>
    </div>
  )
}

export default App