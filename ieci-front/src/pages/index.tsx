import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
const Home:React.FC = () =>{

  const router = useRouter();
    useEffect(() =>{
      router.push({ pathname: '/home'});
    },[router])

    return <></>
}

// export function getStaticProps({locale}:GetStaticPropsContext){
//   return {
//     props:{
//       messages:require(`../i18n/locales/${locale}`)
//     }
//   }
// }
export default Home