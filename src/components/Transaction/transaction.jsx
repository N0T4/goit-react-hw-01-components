import PropTypes from 'prop-types';
import {TranTable, TranSection} from './transaction.styled'

export const Tran = ({ tran }) => {
    return <TranSection>
        <TranTable>
             <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
            </thead>

            <tbody>
                {tran.map(transition => {
                    return (
                    <tr key={transition.id}>
                            <td>{transition.type}</td>
                            <td>{transition.amount}</td>
                            <td>{transition.currency}</td>
                    </tr>
                    )
                })}
                    
            </tbody>
        </TranTable>
    </TranSection>
}


Tran.propTypes = {
    tran: PropTypes.arrayOf(PropTypes.object).isRequired 
}
