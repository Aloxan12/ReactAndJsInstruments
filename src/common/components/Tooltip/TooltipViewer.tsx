import {Tooltip} from "./Tooltip";
import './TooltipViewer.css'

export const TooltipViewer = ()=>{
    return(
        <div className="tooltip-viewer-wrapper">
            <div className="example-wrapper">
                <Tooltip content="Yee-haw!" direction="right">
          <span className="example-emoji" role="img" aria-label="cowboy emoji">
            🤠
          </span>
                </Tooltip>
            </div>
        </div>
    )
}