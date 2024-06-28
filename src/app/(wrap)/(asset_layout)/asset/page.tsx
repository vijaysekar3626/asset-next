import React from 'react'
import ReusableInputs from '../_components/ReusableInputs'

function page() {
  return (
    <div className="w-full">
        <div className="p-2">
          <div className="form">
            
            <form>
              <ReusableInputs label='Ownership' type='text' placeholder='please enter'/>
              
            </form>
          </div>
        </div>
    </div>
  )
}

export default page