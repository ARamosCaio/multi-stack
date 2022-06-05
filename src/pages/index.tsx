import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/lista/Lista'


const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong> 
        </span>
        } />
      
      <Lista 
        pets={[
          {
            id:1,
            nome: 'Bidu',
            historia: 'Abandonado por sua familia e desonrado pelo seu clã, Bidu recebeu novo sentido para sua vida: VINGANÇA',
            foto: 'https://static4.depositphotos.com/1011434/493/i/600/depositphotos_4939645-stock-photo-cute-puppy.jpg'

          },
          {
            id:2,
            nome: 'Paçoca',
            historia: '5 grand prix, 2 de ferias com o ex, 4 copa pistao, campeao mundial de jokempo',
            foto: 'https://images-na.ssl-images-amazon.com/images/I/81NGXVSGWFL.png'

          }
        ]}
      />
    </div>
  )
}

export default Home
