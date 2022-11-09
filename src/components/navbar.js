import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useRouter } from 'next/router';
import { Bars4Icon } from '@heroicons/react/24/solid';

const Navbar = (props) => {
  const { user, isAuthenticated, signOut } = useContext(AuthContext);
  const router = useRouter();

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <header className='panel-header cont'>
        <div>
          <div onClick={() => router.push('menu')}>
            <h1 className='panel-header_title'>
              pontoVerde<span>v.02</span>
            </h1>
          </div>
        </div>
        <div className='panel-header_container'>
          <p>
            Bem vindo, <br></br>
            {isAuthenticated ? user?.name : 'Usuário'}
          </p>
          <div className='panel-header_menu'>
            <Bars4Icon className='h-5 w-5' />
            <button type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='0.5'
                stroke='currentColor'
                class='w-3 h-3'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className='basic-info'>
        <a onClick={() => router.push('/menu')}>
          <div className={router?.pathname == '/menu' ? 'basic-info_item navbar_on' : 'basic-info_item navbar_off'}>
            <span>2</span>
            <div>
              <span>Plantas ativas</span>
            </div>
          </div>
        </a>
        <a onClick={() => router.push('/tokens')}>
          <div className={router?.pathname == '/tokens' ? 'basic-info_item navbar_on' : 'basic-info_item navbar_off'}>
            <span>105</span>
            <div>
              <span>Tokens emitidos</span>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default Navbar;
