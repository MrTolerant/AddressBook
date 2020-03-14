import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserView = ({ currentUser }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      </div>
    </div>
  )
}

UserView.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserView))
