import * as React from 'react';
import { textSecondary } from "../utils/Color-Pallete"

export default function Loader(){
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="spinner-border" role="status" style={{color: textSecondary}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}