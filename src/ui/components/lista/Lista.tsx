import { Button } from '@mui/material';
import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from './Lista.style'
import { Pet } from '../../../data/@types/pet'
import { TextService } from '../../../data/services/TextServices';

interface ListaProps{
    pets: Pet[];

}

export default function Lista(props: ListaProps){
    const tamanhoMaximoTexto = 200;
    return(
        <ListaStyled>
            {props.pets.map(pet => (
            <ItemLista>
                <Foto src={pet.foto} alt={pet.nome} />
                <Informacoes>
                    <Nome>{pet.nome}</Nome>
                    <Descricao>
                        {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar {pet.nome}</Button>
                </Informacoes>
            </ItemLista>
            ))}
        </ListaStyled>
    )
}
        
