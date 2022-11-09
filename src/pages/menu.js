import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Chart from '../components/grafico';
import { Stat } from '../components/gauge';
import { useContext, useEffect, useState } from 'react';
import SocketContext from '../context/socket';

export const data = [
  [
    { type: 'date', label: 'Day' },
    'Produção Média Fazenda 1',
    'Produção Média Fazenda 2',
  ],
  [new Date(2022, 10, 29, 0), 0, 0],
  [new Date(2022, 10, 29, 1), 0, 0],
  [new Date(2022, 10, 29, 2), 0, 0],
  [new Date(2022, 10, 29, 3), 0, 0],
  [new Date(2022, 10, 29, 4), 0, 0],
  [new Date(2022, 10, 29, 5), 3, 5],
  [new Date(2022, 10, 29, 6), 4, 7],
  [new Date(2022, 10, 29, 7), 6, 10],
  [new Date(2022, 10, 29, 8), 8, 14],
  [new Date(2022, 10, 29, 9), 11, 20],
  [new Date(2022, 10, 29, 10), 15, 25],
  [new Date(2022, 10, 29, 11), 17, 33],
  [new Date(2022, 10, 29, 12), 25, 55],
  [new Date(2022, 10, 29, 13), 24, 52],
  [new Date(2022, 10, 29, 14), 22, 44],
  [new Date(2022, 10, 29, 15), 20, 30],
  [new Date(2022, 10, 29, 16), 14, 20],
  [new Date(2022, 10, 29, 17), 8, 12],
  [new Date(2022, 10, 29, 18), 2, 6],
  [new Date(2022, 10, 29, 19), 1, 3],
  [new Date(2022, 10, 29, 20), 0, 1],
  [new Date(2022, 10, 29, 21), 0, 0],
  [new Date(2022, 10, 29, 22), 0, 0],
  [new Date(2022, 10, 29, 23), 0, 0],
  [new Date(2022, 10, 30, 0), 0, 0]
];

export default function Menu() {
  const socket = useContext(SocketContext);
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
      <main>
        <Navbar />
        <section className='device-data'>
          <div className='device-data_title'>
            <h2>Geração Real-time</h2>
          </div>
          <div className='device-data_cards'>
            <div
              className={
                speed1 > 0
                  ? 'device-data_card device_on'
                  : 'device-data_card device_off'
              }
              onClick={() =>
                router.push('/production')
              }
            ><div className='device-data_card__painel'>
                <p style={{ position: 'absolute' }}>{speed1} kWh</p>
                <Stat value={speed1} />
              </div>
              <div className='device-data_card__infos'>
                <div className='device-data_cards__name'>
                  <p> Fazenda 1</p>
                </div>
              </div>
            </div>
            <div
              className={
                speed2 > 0
                  ? 'device-data_card device_on'
                  : 'device-data_card device_off'
              }
              id='card_{{$device->id}}'
            >
              <div className='device-data_card__painel'>
                <p style={{ position: 'absolute' }}>{speed2} kWh</p>

                <Stat value={speed2} />
              </div>
              <div className='device-data_card__infos'>
                <div className='device-data_cards__name'>
                  <p> Fazenda 2</p>
                </div>
              </div>
            </div>
            <div
              className='addFarm'
            >
              <div className='device-data_card__painel'>
                <div className='icon-container'>
                  <img src="https://cdn-icons-png.flaticon.com/512/3161/3161390.png"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='history_card'></section>
        {/* Posicionar no local correto */}
        <Chart data={data} />
      </main>
    </div>
  );
}
