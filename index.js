 import Header from "./Header.js"
 //function Page() {
   //return (
    //the function returns something
    //<div>
        //<header>
            //<nav>
                //<img src = "./pp.jpg" width = "40px" />
               // <h1>Reasons to learnn react</h1>
                //<ol>
                    //<li>lovely</li>
                    //<li>looks good</li>
                    //<li>faster</li>
              //  </ol>
           // </nav>
        //</header>
        //<footer>
           //<small>2021 edited by Aadrika.All rights reserved</small> 

       // </footer>
   // </div>
   // )

// }



//ReactDOM.render(<Page />,document.getElementById("root"))
//we need to capitalise the first letter
//Instead of calling funcion in parenthsis we use <function name />


//Learning how to create parent and child component
//function Header(){
    //return (
       // <header>
           // <nav className = "nav">
            // <img src = "./pp.jpg" className = "nav-logo" />
             //  <h1>Reasons to learnn react</h1>
               // <ul className = "nav-items">
               //    <li>faster</li>
                //   <li>easy</li>
               //    <li>speed</li>
             //  </ul>
           // </nav>
 //</header>
     
  // )
//}
function Footer(){
    return (
        <nav className = "fot">
            <small>all rights reserved</small>
        </nav>
        
    )
    
}
function Page(){
    return(
        <div>
             <Header />   
             <Footer />
        </div>
       
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))

//next lecture

