
import PropTypes from "prop-types"

const Result = ({age}) => {
  return (
    <div>
     
      <h1>You Are : {age.years} Years</h1>
      <h2>You Are : {age.months} Months</h2>
      <h3>You Are : {age.days} Days</h3>
    
    </div>
  )
}
Result.propTypes ={
  age:PropTypes.shape({
    years:PropTypes.number.isRequired,
    months:PropTypes.number.isRequired,
    days:PropTypes.number.isRequired,
  })}

export default Result
