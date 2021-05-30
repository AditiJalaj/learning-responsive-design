import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import './App.css';

function App() {
 return(
   <>
   <header className="bg-light center">
   <div className="container narrow-container">
     <p>Lorem ipsum dolor sit.</p>
     <h1>Responsive layouts don't have to a struggle </h1>
   </div>
   </header>
   
   <section>
   <h2 className='center'>Quality designs</h2>
   <div className="split">
   <div>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, exercitationem fugit vero nobis veritatis consequuntur ad rerum labore sequi hic id veniam qui quibusdam ducimus.</p>
   </div>
   <div>
     <p>Saepe corporis ducimus, commodi deserunt quaerat nisi voluptatem expedita, minus velit maxime consequatur laudantium tempora cum voluptas animi accusantium dolor id eaque facere aperiam magni!</p>
   </div>
   </div>
   </section>
   

   <section className="bg-dark">
   <div className="container">
     <div><h2>Made custom</h2>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi nesciunt qui illum facere aperiam ratione placeat iste?</p></div>
     <div><img src={img1} alt="img1" /></div>
   </div>
   </section>

   <section className='bg-accent'>
   <div className="container">
     <div><img src={img2} alt="img2" /></div>
     <div><h2>Created with Care</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat quo et vero saepe cum, commodi vel quam.</p></div>
   </div>
   </section>
   
   </>

 )
}

export default App;
