
import styled from '@emotion/styled';
import data from '../../data/data.json'

const StatsSection = styled.section`
width: calc(${data.length}*73px);
min-width: 375px;
min-height: 100px;
padding-top: 32px;
margin: 0 auto 15px;
border: 1px solid rgb(224, 224, 224);
border-radius: 5px;`

const StatsTitle = styled.section`
margin-bottom: 32px;
text-transform: uppercase;
font-size: 20px;
text-align: center;
font-weight: bold;`

const StatsUl = styled.ul`
background-color: black;
display: flex;
margin: 0;
padding: 0;
list-style: none;`

const StatsLi = styled.li`
display: flex;
flex-direction: column;
padding-top: 10px;
padding-bottom: 15px;
align-items: center;
width: calc(100%/${data.length});
color: white;

& .percentage {
    margin-top: 5px;
    font-size: 20px;
}
`

export {StatsSection,StatsTitle,StatsUl,StatsLi}