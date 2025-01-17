// import logo from './logo.svg';
import './App.css';
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const mode = 'WELCOME';
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="WELCOME" body="Hello, WEB"></Article>
  } else if(mode === 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=> {
        mode = 'WELCOME'
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        mode = 'READ'
      }}></Nav>
      {content}
      <Article title="Welcome" body="Hello, Web"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
