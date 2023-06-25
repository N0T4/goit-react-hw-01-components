import PropTypes from 'prop-types';
import {StatsSection,StatsTitle,StatsUl,StatsLi} from './statistics.styled'

export const Statistics = ({ title, stats }) => {
    return <StatsSection>
        {
            title ? <StatsTitle>{title}</StatsTitle> : undefined
        }
        <StatsUl>{stats.map(statEl => {
            return (<StatsLi key={statEl.id}>
                <span className='label'>{statEl.label}</span>
                <span className='percentage'>{statEl.percentage}</span>
            </StatsLi>)
        })}
        </StatsUl>
        
    </StatsSection>
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}
