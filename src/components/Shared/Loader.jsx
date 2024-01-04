/* eslint-disable react/prop-types */
import { DNA } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
      <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      />
    </div>
    
  )
}

export default Loader
