import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

const ToggleTheme = () => {

  // pegando tema do sistema e vendo se ele faz 'matches' com o dark, retornando um true ou false
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  // como se repete algumas vezes, fizemos uma variacel para isso
  const  pageClasses = document.documentElement.classList

  useEffect(() => {
    // isso só será executato se meu sitema for dark, que é o esperado de 'systemPreference'
    systemPreference && pageClasses.add('dark')
  }, [pageClasses, systemPreference])

  const toggle = () => {
    pageClasses.toggle('dark');
  };

  return (
    <div className="hidden sm:block ">
      <SunIcon
        className="w-7 h-7 text-gray-100 cursor-pointer hidden dark:block"
        onClick={toggle}
      />
      <MoonIcon
        className="w-7 h-7 text-gray-100 cursor-pointer block dark:hidden"
        onClick={toggle}
      />
    </div>
  );
};

export default ToggleTheme;
