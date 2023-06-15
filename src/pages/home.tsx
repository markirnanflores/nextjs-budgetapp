import { Meta } from '../layout/Meta';

const Home = () => (
  <>
    <Meta title="BudgetApp | Home" description="My BudgetApp" />
    Home
    <table className="table-auto mt-10 w-full">
      <thead className="bg-slate-300">
        <tr>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">
            Note
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">
            Date
          </th>
          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        <tr>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            Home expenses
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            2023-06-15
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            - 1000€
          </td>
        </tr>
        <tr>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            Bills
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            2023-06-15
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            - 300€
          </td>
        </tr>
        <tr>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            Shopping
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            2023-06-15
          </td>
          <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            - 90€
          </td>
        </tr>
      </tbody>
    </table>
    {/**
     * @TODO: Transaction page
     */}
  </>
);

export default Home;
