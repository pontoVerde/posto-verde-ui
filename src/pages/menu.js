import { useRouter } from "next/router";
import Navbar from "../components/navbar";
// import {useGauge} from "../hooks/useGauge";
import Chart from "../components/grafico";
import {Stat} from "../components/gauge";

export default function Menu() {
    const router = useRouter();

    
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
                                <div id="gauge1"></div>
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
                                <div id="gauge1"></div>
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
            <Stat value={20}/>
            <Chart/>
            </main>
            </div>
    )
}