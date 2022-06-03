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
            historia: 'Dócil e amoroso, buscando um lar e uma familia',
            foto: 'data:image/jpeg;base64,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'

          }
        ]}
      />
    </div>
  )
}

export default Home
