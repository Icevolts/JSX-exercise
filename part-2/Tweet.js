function Tweet(props){
    return (
        <div>
            <span>{props.username}</span>
            <span>{props.name}</span>
            <span>{props.date}</span>
            <p>{props.msg}</p>
        </div>
    );
}