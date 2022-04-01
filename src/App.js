import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
    </div>
  );
}

const Header = ()=>{
  return(
    <div className={styles.mainHeader}>
      <h1 >
        React Meals
      </h1>
      <Button className={`${styles.button} ${styles.buttonLarge}`} type="button">CART</Button>

    </div>
  )
}

const Button = ({type, children, className})=>{
  return(
    <>
    <button type={type} className={className}>
      {children}
    </button>
    </>
    
  )
}

export default App;
