function App(){
    return (
        <div>
            <Tweet username='GameyGrumpies'
            name='Arin Hansen'
            date={new Date().toDateString()}
            msg='What am I doing here?'/>

            <Tweet username='Yarldron'
            name='Emit Schmidt'
            date={new Date().toDateString()}
            msg='Hello World!'/>

            <Tweet username='BlingBling87'
            name='Amy Gray'
            date={new Date().toDateString()}
            msg='I love tweeting!'/>
        </div>
    )
}