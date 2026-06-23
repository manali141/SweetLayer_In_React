import MenuHero from '../components/MenuHero'
import SearchBar from './SearchBar'
import Cakes from './Cakes'

const Menu = () => {
  return (
    <div>
      <MenuHero/>
      <section className='Menugrid container'>
      <SearchBar />
        
          <Cakes />
        
      </section>
      
    </div>
  )
}

export default Menu
