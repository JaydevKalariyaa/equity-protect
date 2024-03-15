import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';

const brandData: BRAND[] = [
  {
    no: '1',
    msg: 'User logged in to the system by verifying the biometric authentication.	',
    at: '14/03/2024 10:46:26 AM',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Logs List
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-12 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-12">
          <div className="col-span-2 p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">No.</h5>
          </div>
          <div className="col-span-6 p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Message
            </h5>
          </div>
          <div className="col-span-4 p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Created At
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-12 sm:grid-cols-12 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-2">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.no}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 col-span-6">
              <p className="text-black dark:text-white">{brand.msg}K</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5 col-span-4">
              <p className="text-black dark:text-white">{brand.at}K</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
