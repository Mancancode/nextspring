import Head from 'next/head'
import styles from '../styles/Home.module.css'
// const NavItem = props => (
//   <li className="  text-bg font-bold text-gray-700  cursor-pointer px-2 py-3 hover:text-blue-700 "> {props.text} </li>
//   );

//   const botton = props => (
//     <li className="bg-blue-700 hover:bg-blue-400 cursor-pointer text-white  btn btn-primary text-base font-medium p-3 rounded-full ">
//     {props.text} </li>
//     );

export default function Home() {
  return (
    
    <div >
      <Head>
        <title>Springbot  App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* <main> */}


{/*   
  <div className="container mx-auto">
  <nav className="flex justify-center px-3 py-2 mt-16">
            <div>
            <span className="text-4xl font-bold mr-16">Notion</span>
            </div>

            <div>
            <ul className="flex space-x-2  flex justify-around">
              <NavItem  href="/products"  text="Products" />
              <NavItem href="/Download" text ="Download" />
              <NavItem href="/Remote work" text ="Remote Work" />
              <NavItem href="/customers" text ="Customers" />
              <NavItem href="/pricing" text ="Pricing" />
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign In
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign Out
              </button>
              
            </ul>
            </div>
            </nav>
            <div className="text-center md:text-center md:flex max-w-3xl mx-auto mt-24">
              <div>
              <h1 className="font-bold text-6xl leading-tight ">The only platform that measures ROI from learning</h1>

              </div>
              <p>Over 1 million global learners</p>
                        
            </div>
            
            
            
  </div> */}


        {/* <div className ={styles.flex}>
          
        <a className={styles.nav}>
              <h3>sprintblog</h3>
            </a>

          <div className={styles}> 
           
           
           
           <ul >
             <li><a className={styles.header} > <h3>  AboutUs</h3></a></li>
             <li><a className={styles.header} > <h3>  Carrers</h3></a></li>
             <li><a className={styles.header} > <h3>  News</h3></a></li>
             <li><a className={styles.header} > <h3>  ContactUs</h3></a></li>
             <li><a className={styles.header} > <h3>  SignUp</h3></a></li>
             <li><a className={styles.header} > <h3>  SignIn</h3></a></li>
           </ul>
            
          </div>
        </div>
        <h1 className={styles.title}>
        The only platform that measures ROI from learning
        </h1>
        
        <p className={styles.description}>
        Over 1 million global learners.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div> */}
  {/* </main> */}
      
{/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
