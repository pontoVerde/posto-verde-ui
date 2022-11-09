// import Head from "next/head";
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Chart from '../components/grafico';
import { Stat } from '../components/gauge';
import { useContext, useEffect, useState } from 'react';
import SocketContext from '../context/socket';

export const data = [
  [
    { type: 'date', label: 'Day' },
    'Produção média',
    // "Average hours of daylight",
  ],
  [new Date(2022, 10, 29, 0), 0],
  [new Date(2022, 10, 29, 1), 0],
  [new Date(2022, 10, 29, 2), 0],
  [new Date(2022, 10, 29, 3), 0],
  [new Date(2022, 10, 29, 4), 0],
  [new Date(2022, 10, 29, 5), 3],
  [new Date(2022, 10, 29, 6), 4],
  [new Date(2022, 10, 29, 7), 6],
  [new Date(2022, 10, 29, 8), 8],
  [new Date(2022, 10, 29, 9), 11],
  [new Date(2022, 10, 29, 10), 15],
  [new Date(2022, 10, 29, 11), 17],
  [new Date(2022, 10, 29, 12), 25],
  [new Date(2022, 10, 29, 13), 24],
  [new Date(2022, 10, 29, 14), 22],
  [new Date(2022, 10, 29, 15), 20],
  [new Date(2022, 10, 29, 16), 14],
  [new Date(2022, 10, 29, 17), 8],
  [new Date(2022, 10, 29, 18), 2],
  [new Date(2022, 10, 29, 19), 1],
  [new Date(2022, 10, 29, 20), 0],
  [new Date(2022, 10, 29, 21), 0],
  [new Date(2022, 10, 29, 22), 0],
  [new Date(2022, 10, 29, 23), 0],
  [new Date(2022, 10, 30, 0), 0]
];

export default function Production() {
  const socket = useContext(SocketContext);
  // const {user}  = useContext(AuthContext);
  const router = useRouter();

  const [speed1, setSpeed1] = useState(0);
  const [speed2, setSpeed2] = useState(0);
  let started = false;

  useEffect(() => {
    if (socket?.connected && !started) {
      socket.on('gauge_speed1', (data) => {
        setSpeed1(data);
      });

      socket.on('gauge_speed2', (data) => {
        setSpeed2(data);
      });
      started = true;
    }
  }, [socket]);
  return (
    <div className='panel-body cont'>
      {/* <Head>
            <title>Home</title>
        </Head> */}
      <Navbar />
      <main>
        <section className='device-data'>
          <div className='device-data_title'>
            <button onClick={() => router.push('/producao')}>
              <h2>Fazenda 1</h2>
            </button>
          </div>
          <div className='device-data_cards'>
            <div
              className='device-data_card device_on'
              style={{
                backgroundColor: '#527459',
                color: 'white',
                cursor: 'auto',
              }}
            >
              <div className='device-data_card__painel'>
                <p style={{ position: 'absolute' }}>{speed1} kWh</p>
                <div id='gauge1'>
                  <Stat value={speed1} />
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
        <Chart data={data} />
        {/* <section className="history_card">
                    <div>
                    </div>
                </section> */}
      </main>
      <footer></footer>
    </div>
  );
}
