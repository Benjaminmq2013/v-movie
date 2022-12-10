import "./index.css"
import { CSSProperties, useEffect, useRef } from "react";


export interface params {
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  src: string;
}

/**
 * 
 * Reusable SVG container
 * -The target is to have a customizable SVG container
 * -You can set colors to it by just assigning a background-color
 *
 * internal className:
 * - container
 *
 * @param params
 * @param params.src src for the Icon
 * @param params.onClick callback
 * @param params.style CSS in JS Properties
 * @param params.className className for the container of this component and prefix for the internals
 *
 * @example
 * <Icon className="navigate-button" src="assets/icons/arrow-left.svg" onClick={ handleLastPage } ></Icon>
 *
 * @returns JSX.Element
 */

const App = ( params: params ): JSX.Element => {

  params = { ...{ className: "" }, ...params };

  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // Setting the color for the first time
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.mask = `url(${params.src}) no-repeat center`;
      ref.current.style.maskSize = "100%";

      // Deprecated but pure css
      ref.current.style.webkitMask = `url(${params.src}) no-repeat center`;
      ref.current.style.webkitMaskSize = "100%";
    }
  }, []);

  return (
    <div
      ref={ ref }
      className={`icon ${params.className}`}
      onClick={params.onClick}
    />
  );
};
export default App;
