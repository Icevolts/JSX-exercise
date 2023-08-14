function Person(props){
    let voteMsg = props.age >= 18 ? 'Please go vote' : 'Stay in school';
    let hobbies = props.hobbies.map(hobby => {<li>{hobby}</li>});

    return (
        <div>
            <p>Learn some inforamtion about this person:</p>
                <ul>
                    <li>Name: {props.name.slice(0,6)}</li>
                    <li>Age: {props.age}</li>
                    <ul>
                        Hobbies: {hobbies}
                    </ul>
                </ul>
                <h3>{voteMsg}</h3>
        </div>
    )
}