import { Product } from '../../types/product';

const productData: Product[] = [
  {
    Address: '31033 Calle Aragon, Temecula',
    Document: 'a.pdf',
    time: '24/01/2024 10:41:03 AM',
    delete: '',
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Your Documents
        </h4>
      </div>

      <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium"> Property Address</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Document</p>
        </div>
        <div className="col-span-4 flex items-center">
          <p className="font-medium">Uploaded At </p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {product.Address}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.Document}
            </p>
          </div>
          <div className="col-span-4 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.time}
            </p>
          </div>
          <div className="col-span-3 flex items-center">
            {/* <p className="text-sm text-black dark:text-white"> */}
              {/* ${product.time} */}
          <button className="flex justify-center rounded bg-danger py-1 px-3  font-medium text-gray hover:bg-opacity-90">
            Delete
          </button>
          <button className="flex  justify-center rounded bg-primary py-1 px-3 ml-2 font-medium text-gray hover:bg-opacity-90">
            Update
          </button>
            {/* </p> */}
          </div>
          {/* <div className="col-span-1 flex items-center">
     
            <button>Update</button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
