import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'


function HomePage(){
  return(
    <div className='homepage'>
      <div className='text-container'>
        <div className='wrapper'>
        <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
        

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus atque tenetur similique omnis culpa. Incidunt aliquam porro labore ipsum facere culpa veniam iusto, laborum quis a. Explicabo, dignissimos repellendus!
        </p>     
        <SearchBar/>
        <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gain</h2>
            </div>
            <div className='box'>
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
        </div>
        </div>

      </div>
      <div className='image-container'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default HomePage
