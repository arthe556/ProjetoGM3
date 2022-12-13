import BasicExample from "../Components/card"
export default function Page1()
{
    return(
        <div className="all">
            <div className="Card">
                <div  className="ft">
                    <BasicExample/>
                </div>
                <div className="ft">
                    <BasicExample/>
                </div>
                <div className="ft">
                    <BasicExample/>
                </div> 
            </div>
            <footer>

                <div className="fot">
                    <ul>
                        <li>Generico</li>
                        <li>Generico</li>
                        <li>Generico</li>
                    </ul>
                </div>

                <div className="fot">
                    <ul>
                        <li>Generico</li>
                        <li>Generico</li>
                        <li>Generico</li>
                    </ul>
                </div>

                <div className="fot">
                    <ul>
                        <li>Generico</li>
                        <li>Generico</li>
                        <li>Generico</li>
                    </ul>
                </div>

            </footer>
        </div>

    )
}