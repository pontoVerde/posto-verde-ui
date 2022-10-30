import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../context/authContext';
import { useRouter } from 'next/router';

const Navbar = (props) => {

    const { user, isAuthenticated, signOut } = useContext(AuthContext);
    const router = useRouter();
    return (
        <>
            <header className="panel-header">
            <div>
                <div onClick={() => router.push('menu')}>
                    <h1 className="panel-header_title">
                        Ponto Verde
                        <span>v.01</span>
                    </h1>
                </div>
            </div>
            <div className="panel-header_menu">
                <i className="fa-regular fa-compass"></i>
                <span>Menu</span>
                <button type="button">
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
        </header>

        <section className="basic-info">
                    <div className="basic-info_item">
                        <span>
                            2
                        </span>
                        <div>
                            <span>
                                Plantas
                                ativas
                            </span>
                        </div>
                    </div>
                    <a onClick={() => router.push('/tokens')}>
                        <div className="basic-info_item">
                            <span>
                                105
                            </span>
                            <div>
                                <span>
                                    Tokens
                                    emitidos
                                </span>
                            </div>
                        </div>
                        </a>
                </section>
    </>
    )
}

export default Navbar;