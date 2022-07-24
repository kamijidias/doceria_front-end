import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

//import logoImg from '../../public/logo.svg';

import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doces</title>
      </Head>
      <div className={styles.containerCenter}>

        <div className={styles.login}>
          <form>
            <Input 
              placeholder="Digite seu email"
              type="text"  
            />

            <Input 
              placeholder="Digite sua senha"  
              type="password"
            />

            <Button
            type="submit"
            loading={false}
            >
              Acessar
            </Button>
            
            <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
    
          </form>
        </div>
      </div>
    </>
  )
}
