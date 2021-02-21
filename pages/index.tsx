import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout, { siteTitle } from '@components/layout';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import utilStyles from '../styles/utils.module.css';

type Inputs = {
  value: string,
  filter: string,
};

export default function Home() {
  const {
    register, handleSubmit, watch, errors,
  } = useForm<Inputs>();
  const router = useRouter();
  const [fetching, setFetching] = useState<boolean>(false);
  const onSubmit = async (form) => {
    setFetching(true);
    const { data } = await fetch(`/api/medication?filter=${form.filter}&value=${form.value}`).then((res) => res.json());
    router.push(`/description/${data[0].REGISTRO}`);
    setFetching(false);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-center">
          Anvisa med é uma aplicação para facilitar o acesso
          a informações da ANVISA para um medicamento
        </p>
        {/* <input className="border-gray-600" placeholder="aheia" /> */}
        <div className="container mx-auto max-w-md pt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="m-2 flex flex-col">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <select
                name="filter"
                id="filter"
                ref={register({ required: true })}
                className="w-full form-select rounded-lg p-4 mr-0 mb-3 border text-gray-800 border-gray-200 bg-white text-center"
                placeholder="Selecione um filtro"
                defaultValue="filter"
              >
                <option defaultValue="filter">Selecione um filtro...</option>
                <option value="CÓDIGO GGREM">CÓDIGO GGREM</option>
                <option value="REGISTRO">REGISTRO</option>
                <option value="EAN 1">Código de barras</option>
              </select>
            </motion.div>
            {errors.filter && <span className="text-red-500"> this field is required </span>}
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <input
                name="value"
                id="value"
                ref={register({ required: true })}
                className="w-full rounded-lg p-4 mr-0 mb-3 border text-gray-800 border-gray-200 bg-white text-center"
                placeholder="valor"
              />
            </motion.div>
            {errors.value && <span className="text-red-500"> this field is required </span>}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  ease: 'easeInOut',
                  duration: 1.5,
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button type="submit" className="w-full px-8 rounded-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border hover:text-gray-50 hover:bg-gray-400 ease-in-out duration-500">
                {fetching
                  ? <span className="fas fa-circle-notch fa-spin fa-3x" />
                  : 'Buscar'}
              </button>
            </motion.div>
          </form>
        </div>
      </section>

    </Layout>
  );
}
