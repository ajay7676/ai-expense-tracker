import { Link } from "react-router";

// import ExpenseTracker from '../../assets/expense-tracker.png'
const Header = () => {
  return (
    <header className="w-full  border-b bg-white border-gray-400">
      <div className="max-w-7xl flex mx-auto px-6 gap-3 lg:px-10 py-4 items-center justify-between">
        <div className='flex items-center'>
             {/* <img
          src={ExpenseTracker}
          alt="Expense Tracker Logo"
          className="w-34 h-full object-contain" 
        /> */}
         <h2 className="text-2xl font-extrabold text-gray-700">ExpenseTracker</h2>
        </div>
        <nav className=" hidden md:flex  gap-8 items-center text-sm font-medium text-gray-600 ">
            <Link to="/features" className="hover:text-blue-400"> Features</Link>
            <Link to="/how-it-works" className="hover:text-blue-400"> How It Work</Link>
            <Link to="/ai-advisor" className="hover:text-blue-400"> Ai Advisor</Link>
            <Link to="/reviews" className="hover:text-blue-400"> Reviews</Link>

        </nav>
        <div className="flex gap-6 items-center">
            <button className="px-5 py-2 border rounded-md border-gray-600 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">Login</button>
            <button className="px-5 py-2  rounded-md bg-blue-400 text-white text-sm font-medium hover:bg-blue-500 transition cursor-pointer">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
