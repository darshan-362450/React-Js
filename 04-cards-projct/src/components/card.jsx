import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {

     console.log(props.company);
  return (
  
   
     <div className="card">
          <div>
              <div className="top">
                {/* <img src="https://tse3.mm.bing.net/th/id/OIP.RbDmmt0F982-5AzJmXvXtAHaHa?pid=Api&P=0&h=180" alt="" /> */}
                <img src="https://www.fineprintart.com/images/blog/amazon-logo/amazon_logo_history_5.jpg" alt="" />
                <button>Save <Bookmark size={12}/> </button>
            </div>
            <div className="center">
              <h3>{props.company}<span>5 Days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
              <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
            </div>  
            </div>    
            <div className="bottom">
              <div>
                  <h3>$120/hr</h3>
                  <p>Mumbai , India</p>
                
              </div>
              <button>Apply Now</button>
            </div>
        </div>
  )
}

export default card