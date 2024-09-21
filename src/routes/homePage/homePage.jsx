import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'


function HomePage(){
  return(
    <div className='homepage'>
      <div className='text-container'>
        <div className='wrapper'>
        <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
        

        <p>
        E-Estate, powered by CIFAR, is revolutionizing the real estate industry with cutting-edge AI and machine learning technologies. Leveraging CIFAR's expertise, E-Estate enables smarter property management, personalized home recommendations, and efficient data-driven solutions. 
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
