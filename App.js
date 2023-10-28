const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1',{},'hi i am h1'), 
        React.createElement('h2',{},'hi i am h2')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1',{},'hi i am h1'), 
        React.createElement('h2',{},'hi i am h2')
    ]),
    React.createElement('h1',{id:'heading'},'i am end')
])
let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)