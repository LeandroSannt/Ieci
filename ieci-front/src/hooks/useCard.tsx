import { createContext, useContext, useState } from 'react'
interface CartContextState{
  changeNumberCart(value:string):void
  changeDateExpiration(value:string):void
  changeCodCard(value:string):void
  setIsFlipped(value:boolean):void
  changeMonthExpiration(value:string):void
  changeYearExpiration(value:string):void
  changeYear:string
  changeMonth:string
  initialExpiration:string | undefined
  changeDate:string | undefined
  codCard:string | undefined
  isFlipped:boolean
}

interface NumberCardProps{
  first:string
  second:string
  third:string
  fourth:string
}

interface Props{
  children:JSX.Element
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const CartContext = createContext<CartContextState>({} as CartContextState)

const CartProvider = ({children}:Props) => {

  const [changeDate,setChangeDate] = useState('XX / XX')
  const [changeMonth,setChangeMonth] = useState('XX')
  const [changeYear,setChangeYear] = useState('XX')
  const [initialExpiration,setInitialExpiration] = useState<string | undefined>('XXXX XXXX XXXX XXXX')
  const [codCard,setCodCard] = useState<string | undefined>('XXX')
  const [isFlipped, setIsFlipped] = useState(false);

  const changeNumberCart = (str:string) =>{
    if(str.length === 0 ){
      setInitialExpiration('XXXX XXXX XXXX XXXX')
    }else{
      setInitialExpiration(str)
    }
  }

  const changeDateExpiration = (str:string) =>{
    if(str.length === 0 ){
      setChangeDate('XX / XX')
    }
      setChangeDate(str)
  }

  const changeMonthExpiration = (str:string) =>{
    if(str.length === 0 ){
      setChangeMonth('XX / XX')
    }
      setChangeMonth(str)
  }

  const changeYearExpiration = (str:string) =>{
    if(str.length === 0 ){
      setChangeYear('XX / XX')
    }
      setChangeYear(str)
  }

  const changeCodCard = (str:string) =>{
    if(str.length === 0){
      setCodCard('XXX')
    }else{
      setCodCard(str)
    }
  }

  return (
    <CartContext.Provider value ={{changeMonth,changeYear,changeYearExpiration,changeMonthExpiration,setIsFlipped,isFlipped,codCard,changeCodCard,initialExpiration,changeNumberCart,changeDateExpiration,changeDate}}>
      {children}
     </CartContext.Provider>
  )
}

function useCard(): CartContextState{
  const context = useContext(CartContext)

  if(!context) {
    throw new Error('insira o cartProvider ao redor do seu elemento')
  }
  return context
}

export { CartProvider, useCard }

