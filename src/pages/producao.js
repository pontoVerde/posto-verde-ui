import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import { Stat } from '../components/gauge';
import { useContext, useEffect, useState } from 'react';

export default function Production() {
  const router = useRouter();
  const [speed1, setSpeed1] = useState(0);

  return (
    <>
      <div className='panel-body cont'>
        <Head>
          <title>Home</title>
        </Head>
        <Navbar />
        <main>
          <section className='device-data'>
            <div className='device-data_title'>
              <button onClick={() => router.push('/producao')}>
                <h2>Fazenda 1</h2>
              </button>
            </div>
            <div className='device-data_cards'>
              <div className='device-data_card device_on'>
                <div className='device-data_card__painel'>
                  <p style={{ position: 'fixed' }}>1</p>

                  <Stat value={speed1} />
                </div>
                <div className='device-data_card__infos'>
                  <div className='device-data_cards__name'>
                    <p> Fazenda 1</p>
                  </div>
                  <div
                    className='device-data_card__btt'
                    onClick={() => router.push('producao')}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M13 7v-6l11 11-11 11v-6h-13v-10z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='production-management'>
                <div className='production-management_title'>
                  <span>Gerenciamento de produtos</span>
                  <div></div>
                </div>
                <div className='production-management_infos'>
                  <div>
                    <span>105</span>
                    <h3>kW/h mês</h3>
                  </div>
                  <div>
                    <span>125</span>
                    <h3>Tokens</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='history_card'>
            <div></div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
