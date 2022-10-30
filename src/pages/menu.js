import { useRouter } from "next/router";
import Navbar from "../components/navbar";
// import {useGauge} from "../hooks/useGauge";
import Chart from "../components/grafico";
import {Stat} from "../components/gauge";
import { useContext, useEffect, useState } from "react";
import SocketProvider from '../context/socket';

export default function Menu() {
    const socket = useContext(SocketProvider);
    const router = useRouter();

    const [speed1, setSpeed1] = useState(0);
    const [speed2, setSpeed2] = useState(0);

 
    useEffect(() => {
        socket.emit('gauge1', '');
        socket.emit('gauge2', '');
        socket.on('gauge_speed1', (data) => {
            if(data > 0){
                setSpeed1(data);
            }

        });

        socket.on('gauge_speed2', (data) => {

                setSpeed2(data);
            
        })

    },[socket]);

    return (
        <div className="panel-body cont">
            <main>
                <Navbar/>
                <section className="device-data">
                    <div className="device-data_title">
                        <h2>
                            Geração Real time
                        </h2>
                    </div>
                    <div className="device-data_cards">
                        <div className="device-data_card device_on">
                            <div className="device-data_card__painel">
                            <Stat value={speed1}/>
                            </div>
                            <div className="device-data_card__infos">
                                <div className="device-data_cards__name">
                                    <p> Fazenda 1</p>
                                </div>
                                <div className="device-data_card__btt" onClick={() => router.push('producao')}>
                                
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7v-6l11 11-11 11v-6h-13v-10z"/></svg>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="device-data_card device_off" id="card_{{$device->id}}">
                            <div className="device-data_card__painel">
                                <Stat value={speed2}/>
                            </div>
                            <div className="device-data_card__infos">
                                <div className="device-data_cards__name">
                                    <p> Fazenda 2</p>
                                </div>
                                <div className="device-data_card__btt" id="btt_{{$device->id}}">
                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7v-6l11 11-11 11v-6h-13v-10z"/></svg>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="history_card">
                </section>
            {/* Posicionar no local correto */}
            
            <Chart/>
            </main>
            </div>
    )
}