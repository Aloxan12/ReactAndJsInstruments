import React from "react";
import './TableFlex.scss'

export const TableFlex = () => {
    return (
        <div>
            <div className="table-wrap">
                <div className="table-header">Header</div>
                <div className="table-body">
                    <div className="table-row">
                        <div className="table-col">
                            1
                        </div>
                        <div className="table-col">
                            2
                        </div>
                        <div className="table-col">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}