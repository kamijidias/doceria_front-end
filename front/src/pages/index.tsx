import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

//import logoImg from '../../public/logo.svg';

import {Input} from '../components/ui/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doces</title>
      </Head>
      <div className={styles.containerCenter}>
        <div className={styles.login}>
          <form>
            <Input />
          </form>
        </div>
      </div>
    </>
  )
}
