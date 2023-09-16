
import logo from '../../assets/logo.svg'; 

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-hidden">
      <div className="w-full md:w-1/2 bg-[#008F8F] relative flex items-center justify-center">
      <div>
      <img src={logo} alt="Logo" className="w-32 h-32 ml-20" />
        <h2 className='font-Roboto font-[700] text-[40px] text-white '>Create Account</h2>
        <p className='text-[#C8C8C8] font-normal text-[16px]'>Join the community and have fun <br />
        <span className='ml-20'>
        predicting!
        </span>
        </p>
      </div>

      </div>
      <div className='items-center flex flex-col ml-20 w-auto my-[200px] h-screen'>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>First Name</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="text"
        placeholder='First Name' />
      </form>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>Last Name</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="text"
        placeholder='Last Name' />
      </form>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>Username</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="text"
        placeholder='Username' />
      </form>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>Email Address</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="Email"
        placeholder='Email Address' />
      </form>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>Password</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="password"
        placeholder='Password' />
      </form>
      <form>
        <p className='text-black text-[16px] font-[400] mb-[8px]'>Confirm Password</p>
        <input className='placeholder:text-[#C8C8C8] placeholder:text-[16px] placeholder:font-[400] h-[40px] w-[360px] py-[16px] rounded border pl-7'
        type="password"
        placeholder='Confirm Password' />
      </form>
      <button className='bg-[#008F8F] text-white text-[16px] font-[400] py-[6px] rounded mt-16 h-[35px] w-36'>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
