import Navbar from "../components/navbar";

export default function Tokens() {

    return(
        <>
                <div className="panel-body cont">

            <Navbar/>
            <main>
                <section className="tokens-data">
                    <div>
                        <div className="tokens-data_title">
                            <span>Gerenciamento de tokens</span>
                            <div></div>
                        </div> 
                        <div className="tokens-data_pattern1">
                            <div>
                                <span>
                                    105
                                </span>
                                <h3>
                                    Tokens emitidos
                                </h3>
                            </div>
                            <div>
                                <span>
                                    25
                                </span>
                                <h3>
                                    Disponíveis para saque
                                </h3>
                            </div>
                        </div>
                        <div className="tokens-data_pattern2">
                            <div>
                                <div>
                                    <span>
                                        R$0,85
                                    </span>
                                    <span>
                                        cotação do token
                                    </span>
                                </div>
                                <span>
                                    X
                                </span>
                                <span>
                                    25pV
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div className="tokens-data_pattern3">
                            <span>R$ 21,25</span>
                            <button type="button" className="plan-button">
                                PROGRAMAR VENDA
                            </button>
                        </div>               
                    </div>
                    <div className="tokens-data_withdraw">
                        <div className="tokens-data_title">
                            <span>Sacar tokens</span>
                            <div></div>
                        </div> 
                        <div className="tokens-data_pattern1">
                            <div>
                                <span>
                                    105
                                </span>
                                <h3>
                                    Tokens emitidos
                                </h3>
                            </div>
                            <div>
                                <span>
                                    25
                                </span>
                                <h3>
                                    Disponíveis para saque
                                </h3>
                            </div>
                            <button type="button" className="withdraw-button">
                                SACAR TOKENS
                            </button>
                        </div>
                        <div className="address-input">
                            <p>
                                Endereço destino
                            </p>
                            <form action="" method="post">
                                <input type="text" placeholder="endereço da carteira" name="wallet-address"/> 
                                <button>
                                    CONFIRMAR
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            </div>
        </>
    )
}