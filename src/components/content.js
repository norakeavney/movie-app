const Content = ()=>{
    return(
        <div>
            <h1>Hi</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

//To use in other files
export default Content;