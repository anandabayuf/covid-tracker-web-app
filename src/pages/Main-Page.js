import { useEffect, useState } from "react"
import { textPrimary } from "../utils/Color-Pallete"

export default function MainPage() {
    const [data, setData] = useState({});

    useEffect(() => {

    }, []);

    return (
        <div className="container">
            <h2 style={{color: textPrimary}}>Summary</h2>
            <div className="row">

            </div>
        </div>
    )
}