import Profile from '../../assets/images/profile.png'

export default function Header() {
  return (

    <div className='border-b-2 '>
          <div className='container m-auto px-2 py-4 flex items-center justify-between '>
            <h1 className='font-bold text-2xl'>Knowledge Cafe</h1>
            <img className='w-11'src={Profile} alt="" />
          </div>
    </div>

  )
}
