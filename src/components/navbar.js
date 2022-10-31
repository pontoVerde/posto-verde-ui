import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useRouter } from 'next/router';
import { Bars4Icon } from '@heroicons/react/24/solid';

const Navbar = (props) => {
  const { user, isAuthenticated, signOut } = useContext(AuthContext);

  const router = useRouter();

  return (
    <>
      <header className='panel-header'>
        <div>
          <div onClick={() => router.push('menu')}>
            <h1 className='panel-header_title'>
              Ponto Verde
              <span>v.01</span>
            </h1>
          </div>
        </div>
        <div className='panel-header_container'>
          <p>
            Bem vindo, <br></br>
            {isAuthenticated ? user?.name : ''}
          </p>
          <div className='panel-header_menu'>
            <Bars4Icon className='h-10 w-10' />
            <button type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='0.5'
                stroke='currentColor'
                class='w-6 h-6'
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
          <div className='basic-info_item'>
            <span>2</span>
            <div>
              <span>Plantas ativas</span>
            </div>
          </div>
        </a>
        <a onClick={() => router.push('/tokens')}>
          <div className='basic-info_item'>
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
