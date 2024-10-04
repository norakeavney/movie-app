//Content Compenent displays hi and date
const Content = ()=>{
    return(
        <div>
            <h1>Hi</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

//export to app
export default Content;