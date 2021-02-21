import Layout from '@components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { IMedication } from '@services/medAnvisaPrice/interfaces/IMedication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import medAnvisaPrice from '@services/medAnvisaPrice';

type Props = {
  data: IMedication
}

export default function description({ data }: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout home={false}>
        <div className="flex h-screen text-center">
          <div className="m-auto">
            <span className="fas fa-circle-notch fa-spin fa-2x mb-6" />
            <h1 className="m-auto">Carregando...</h1>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout home={false}>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold pb-3 mx-auto text-2xl">Descrição</h1>
        <div className="flex flex-col md:flex-row shadow-lg w-full m-auto bg-white rounded-lg px-4 hover:shadow-md transition duration-800 ease-in-out">
          <div className="flex-auto py-3">
            <div className="mb-3">
              <p className="text-sm text-gray-500">Produto</p>
              <p className="text-lg">{data.PRODUTO}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-500">Substância</p>
              <p className="text-md font-light">{data.SUBSTÂNCIA}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-500">Apresentação</p>
              <p className="text-md font-light">{data.APRESENTAÇÃO}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-500">classe Terapêutica</p>
              <p className="text-md font-light">{data['CLASSE TERAPÊUTICA']}</p>
            </div>
            <div className="mb-3 justify-self-center">
              <p className="text-sm text-gray-500">Código de Barras</p>
              <p className="text-md font-light">{data['EAN 1']}</p>
            </div>
            <div className="mb-3 justify-self-center">
              <p className="text-sm text-gray-500">Laboratório</p>
              <p className="text-md font-light">{`${data['LABORATÓRIO']}\n${data.CNPJ}`}</p>
            </div>
            <div className="mb-3 justify-self-center">
              <p className="text-sm text-gray-500">Tarja</p>
              <p className="text-md font-light">{`${data.TARJA}`}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center  pb-3 my-auto opacity-40">
            <button type="button" disabled className="w-10">
              <span className="m-auto fas fa-file-download fa-3x mb-1" />
            </button>
            <p className="text-center">Bulário</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold pb-6 mx-auto">Preços</h1>
          <div className="-my-2  sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campo
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor (R$)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white w-full divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF Sem Impostos
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF Sem Impostos']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 0%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 0%']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 12%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 12%']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 17%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 17%']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 17% ALC
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 17% ALC']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 17,5%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 17,5%']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 17,5% ALC
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 17,5% ALC']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 18%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 18%']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 18% ALC
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 18% ALC']}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          PF 20%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data['PF 20%']}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { register } = context?.params;

  const data = await medAnvisaPrice('REGISTRO', register as string);

  return ({
    props: {
      data: data[0],
    },
  });
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { register: '1705600230032' } }, // See the "paths" section below
  ],
  fallback: true,
});
