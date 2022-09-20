import React from 'react';
import '../styles/entryitem.css'

class EntryItem extends React.Component {
    constructor(props) {
        super(props);
        this.runtime = this.runtime.bind(this);
    }
     items =[ { 
        'name': 'Mango juice', 
        'amount': 30.00, 
        'spend_date': '2020-10-10' ,
        'category': 'Food', 
     }]

      runtime() {
        console.log("Running on the road");
        console.log(this)
        
     }
  
    render() {
        return <div>
            A Class Component
            <div className='entry'>
                {this.items.map(item => <div className='items' key={item.name} >
                    <p><strong>Name</strong>:{item.name}</p>
                    <p><strong>Amount</strong>:{item.amount}</p>
                    <p><strong>Date</strong>:{item.spend_date}</p> 
                    <p><strong>Category</strong>:{item.category}</p>
                    </div>)}
            <div><b>Item:</b> <em>Mango Juice</em></div>
            <div><b>Amount:</b> <em>30.00</em></div>
            <div><b>Spend Date:</b> <em>2020-10-10</em></div>
            <div><b>Category:</b> <em>Food</em></div>
            </div>
         <button onClick={this.runtime} >Press</button>
        </div>

    }
}

export default EntryItem;